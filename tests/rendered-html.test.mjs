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

test("server-renders the Fourfold feed", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Fourfold/);
  assert.match(html, /A little life, shared slowly\./);
  assert.match(html, /Recent updates/);
  assert.match(html, /Designed to have an ending\./);
  assert.match(html, /That’s everything\./);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("publishes product-specific social metadata", async () => {
  const response = await render();
  const html = await response.text();
  assert.match(html, /og\.png/);
  assert.match(html, /summary_large_image/);
  assert.match(html, /Four thoughtful updates a year/);
});
