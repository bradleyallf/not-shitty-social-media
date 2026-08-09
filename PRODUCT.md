# Fourfold product notes

Status: working product brief. This is the place to add, revise, and debate the
rules as the idea develops.

## The idea

Fourfold is a place to check in on friends and family briefly, then leave. It
brings social media back to its original useful job: sharing photos and life
updates with people we actually know.

The format is closer to a seasonal letter or family holiday card than a content
platform. Each person gets four substantial updates per year. Friends can see
what changed, send some love, and be done.

Working promise: **A little life, shared slowly.**

Working name: **Fourfold**. It connects the four annual updates, four seasons,
and the four-part “lives remaining” mark. The name is provisional until domain
and trademark checks are complete. “Vivaldi” remains a useful creative
reference, but is already strongly associated with the composer and the Vivaldi
web browser.

## Product principles

1. **It should have an ending.** There is no infinite scroll, suggested content,
   or attempt to fill empty space. When a person is caught up, the feed says so.
2. **People, not content, are the unit of value.** The product optimizes for
   keeping up with a chosen circle rather than maximizing consumption.
3. **Scarcity should increase thoughtfulness.** Four posts per year encourages
   meaningful updates instead of performance or constant broadcasting.
4. **Trust matters more than growth.** Invitations, identity, and moderation
   should favor a bot-free community over frictionless scale.
5. **No attention traps.** Success is a useful five-minute visit, not a long
   session or a daily streak.

## Rules we have committed to

- A person can publish no more than **four posts per calendar year**.
- The remaining allowance is always visible as four heart-like “lives.”
- The home feed is **reverse chronological**. There is no engagement ranking.
- People only see posts from accounts they explicitly follow.
- An account can follow no more than **1,000 people**.
- There are no ads, sponsored posts, influencers, recommendation feeds, or
  public virality mechanics.
- Video is not supported.
- A post contains a caption and up to **10 photos**.
- A completed feed ends clearly; the product does not substitute other content.

## Decisions still open

- Are the four posts available at any time during the year, or is there one
  non-transferable post per season/quarter? The prototype currently models a
  simple annual pool.
- Does editing an existing post consume anything? Proposed answer: no, but keep
  a visible edited date and a short edit window for trust.
- Can unused posts roll over? Proposed answer: no; rollover would undermine the
  simple seasonal rhythm.
- Are hearts useful, or should every response be private? The prototype includes
  both so the emotional temperature can be tested.
- What counts as “someone you know” for invitations and identity checks?
- Are profiles discoverable by name, invite-only, or both?
- What is the minimum age and family/child-photo policy?
- What happens to a feed when someone deletes an account or changes a follow?

## Recommended build order

### Phase 1 — Prove the feeling (current)

Build and share a realistic web prototype. Test whether the pace, visual
language, seasonal post format, and explicit end of feed feel genuinely calmer.

### Phase 2 — Small private beta

- Google sign-in through a managed authentication provider
- Private profiles and follow relationships
- Invitation links and basic human review for new members
- Durable text posts and photo storage
- Enforced annual allowance and 10-photo limit
- Chronological feed, hearts, private replies, blocking, and reporting
- Basic account export and deletion

Google sign-in is a sensible first option because it reduces password and
account-recovery work. It should be an entry method, not proof that an account
is human; invitations, rate limits, abuse monitoring, and lightweight review
will still be needed.

### Phase 3 — Portability and trust

- Instagram import for a member's own photos and captions
- Import preview, date preservation, duplicate detection, and explicit consent
- A maximum of four imported historical posts per calendar year
- Stronger bot and abuse defenses
- Downloadable personal archive
- Native mobile apps only after the web product is useful and stable

Instagram importing depends on platform APIs and permissions that may change.
Treat it as a migration tool, not a requirement for the first useful version.

## What we should measure

Avoid conventional “engagement” targets. Better signals are:

- percentage of members who share at least one thoughtful update per year
- percentage of visits that reach “you’re all caught up”
- replies exchanged between existing relationships
- member-reported closeness and usefulness
- bot, spam, and abuse incidence
- time to finish the feed (shorter can be healthier)

## Explicit non-goals

- Becoming a creator economy
- Maximizing daily active use or time on site
- Trending topics or public discovery
- Short-form entertainment
- Behavioral ad targeting
- Algorithmic recommendations
- Growth at the cost of trust
