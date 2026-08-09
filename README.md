# Tetrameter

Tetrameter is the prototype name for social media that isn’t shitty: pictures
and notes from the most important moments in your friends’ lives, four times a
year. It is built around a chronological feed, recognizable identities, and a
community that values trust over growth.

The current prototype demonstrates the feed, the four-diamond yearly counter,
reactions, a seasonal post composer, responsive layouts, and the intentional
end of the feed. Data and interactions are temporary until accounts and storage
are added.

The living product rules, name ideas, open questions, and roadmap are in
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
- No video, ads, recommendations, anonymity, or public discovery

The private hosted prototype uses its host’s OpenAI-account access gate. That is
not the intended product authentication. A real beta should use Google sign-in
through a supported managed identity provider, alongside community vetting.

Durable posts, photo uploads, invitations, moderation, bot prevention, and
Instagram importing are intentionally not connected yet.
