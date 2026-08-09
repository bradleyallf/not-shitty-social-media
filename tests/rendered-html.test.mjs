import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the Tetrameter feed", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Tetrameter/);
  assert.match(html, /Four posts a year from the most important people/);
  assert.match(html, /Recent updates/);
  assert.match(html, /Social media that isn’t shitty\./);
  assert.match(html, /No algorithms/);
  assert.match(html, /No influencers/);
  assert.match(html, /Now go outside\./);
  assert.match(html, /Apply to join/);
  assert.match(html, /That’s everything\./);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("publishes product-specific social metadata", async () => {
  const response = await render();
  const html = await response.text();
  assert.match(html, /og\.png/);
  assert.match(html, /summary_large_image/);
  assert.match(html, /Four posts a year from the most important people/);
});
