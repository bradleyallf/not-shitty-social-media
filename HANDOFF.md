# Tetrameter handoff

Last updated: August 9, 2026

## Where we left off

Tetrameter is a working, privately deployed product prototype for a deliberately
limited social network: four photo-and-text updates per person per year, shown
chronologically to people who explicitly follow them.

Private prototype: <https://fourfold-social.bradleyallf.chatgpt.site>

The hosting URL retains the first prototype's `fourfold-social` slug, but the
site, metadata, repository, and product notes use **Tetrameter**.

## What is in the prototype

- Neon-tetra, shallow-water visual identity with a four-diamond mark
- Responsive chronological feed with realistic sample posts
- Four-diamond annual post allowance and a working local composer demo
- Hearts, private-reply affordance, and an explicit end to the feed
- “Now go outside” as the end-of-feed message
- Rules card: four updates, followed people only, no algorithms, no ads, no
  bots, and no influencers
- Apply-to-join section and interactive application preview
- Clear disclosure that the application preview stores or submits nothing
- Bespoke Tetrameter social-sharing card

The full product principles, committed rules, naming ideas, unresolved
questions, and roadmap live in [PRODUCT.md](./PRODUCT.md).

## Important limitations

- Feed data and interactions are temporary in-browser prototype state.
- Accounts, follow relationships, posts, applications, and photos are not stored.
- Photo upload, invitations, replies, and application submission are not wired.
- The private deployment's OpenAI sign-in is a hosting access gate, not the
  intended Tetrameter account system.
- The intended first product sign-in is Google through a managed authentication
  provider. Google authentication must not automatically grant community access.
- Instagram import, stronger anti-bot defenses, and native apps remain later work.

## Recommended next milestone

Build one complete trust-first vertical slice:

**Google sign-in → application → member vouches → human review → approval → feed access**

This is the next priority because it tests Tetrameter's most distinctive premise
and creates the identity boundary required before durable posts and photos.

Suggested order:

1. Confirm a supported managed authentication path and configure Google as the
   first provider.
2. Define minimal user, application, sponsor/vouch, review, and account-status
   records.
3. Decide application privacy, reviewer access, retention, rejection, appeal,
   and deletion policies before storing applicant answers.
4. Build the real application form and two-member-vouch flow.
5. Build a small reviewer queue with audit history.
6. Gate the feed to approved accounts.
7. Add durable posts and photo uploads only after that boundary works.

## Decisions to revisit

- Four posts available at any time per calendar year versus one per quarter
- Whether hearts remain or all responses become private
- Exact number and responsibility of member sponsors
- How recognizable-name and impersonation challenges work
- Whether email magic links or passkeys should follow Google sign-in
- Domain and trademark checks for Tetrameter and Shoalhouse

## Working locally

Node.js 22.13 or newer is required.

```bash
npm install
npm run dev
```

Before publishing changes, run the build and rendered-output tests.
