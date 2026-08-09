# Fourfold

Fourfold is a deliberately quiet social network for seasonal updates among
friends and family. It is built around a chronological feed, a small circle,
and four posts per person per year.

This repository currently contains the first product prototype. The interface
demonstrates the feed, the four-update counter, reactions, a seasonal post
composer, responsive layouts, and the intentional end of the feed. Data and
interactions are temporary until accounts and storage are added.

The living product rules, open questions, and roadmap are in
[PRODUCT.md](./PRODUCT.md). Put new product ideas there; keep this README focused
on the project itself.

## Local development

The project requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Current scope

- Responsive web prototype
- Chronological feed with a true ending
- Four-update annual allowance
- Text updates with a ten-photo product limit
- Hearts and private-reply affordances
- No video, ads, recommendations, or public discovery

Authentication, durable posts, photo uploads, invitations, moderation, bot
prevention, and Instagram importing are intentionally not connected yet.
