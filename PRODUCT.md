# Tetrameter product notes

Status: working product brief. This is the place to add, revise, and debate the
rules as the idea develops.

## The idea

Tetrameter is a place to check in on friends and family briefly, then leave. It
brings social media back to its original useful job: sharing photos and life
updates with people we actually know.

The format is closer to a seasonal letter or family holiday card than a content
platform. Each person gets four substantial updates per year. Friends can see
what changed, send some love, and be done.

Working promise: **Social media that isn’t shitty.**

Prototype name: **Tetrameter**. It carries the four-part cadence while opening a
visual world around neon tetra fish, shoals, shallow water, nature, and a touch
of neon festival energy. The four-part “lives remaining” mark is four separate
diamonds arranged as a larger diamond. The name is provisional until domain and
trademark checks are complete.

Other name ideas to keep in the ideation pool:

- **Shoalhouse** — communal, protective, and connected to the fish/shoal visual
  language.
- **Vivaldi** — a useful four-seasons reference, though already strongly
  associated with the composer and the Vivaldi web browser.
- **Fourfold** — directly communicates four and supplied the first prototype
  name.

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
- The remaining allowance is always visible as four diamond “lives,” arranged
  together as a larger diamond.
- The home feed is **reverse chronological**. There is no engagement ranking.
- People only see posts from accounts they explicitly follow.
- An account can follow no more than **1,000 people**.
- There are no ads, sponsored posts, influencers, recommendation feeds, or
  public virality mechanics.
- Video is not supported.
- A post contains a caption and up to **10 photos**.
- A completed feed ends clearly; the product does not substitute other content.
- There is **no anonymous participation**. A member uses their real name or the
  name their friends genuinely know them by. The product is not a place for
  anonymous shitposting.
- New members are subject to **community vetting** before joining. The exact
  mechanism is still open, but keeping bots and impersonators out takes
  priority over frictionless growth.

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
- How many existing members must vouch for a new person, and what accountability
  does a sponsor have if the invited account is abusive or fake?
- How should members challenge an impersonator or a name nobody recognizes?
- Are profiles discoverable by name, invite-only, or both?
- What is the minimum age and family/child-photo policy?
- What happens to a feed when someone deletes an account or changes a follow?

## Recommended build order

### Phase 1 — Prove the feeling (current)

Build and share a realistic web prototype. Test whether the pace, visual
language, seasonal post format, and explicit end of feed feel genuinely calmer.

### Phase 2 — Small private beta

- Google sign-in through a managed authentication provider. The OpenAI sign-in
  currently visible on the hosted prototype belongs to the private preview
  host; it is not the proposed product sign-in.
- Private profiles and follow relationships
- Invitation links, community vouching, and basic human review for new members
- Recognizable-name policy and an impersonation challenge flow
- Durable text posts and photo storage
- Enforced annual allowance and 10-photo limit
- Chronological feed, hearts, private replies, blocking, and reporting
- Basic account export and deletion

Google sign-in is a sensible first option because it reduces password and
account-recovery work. It should be an entry method, not proof that an account
is human; invitations, rate limits, abuse monitoring, and lightweight review
will still be needed.

### Authentication recommendation

For the first private beta, use a managed authentication service with **Google
as the first sign-in method**. Do not build or store Tetrameter passwords yet.
Owning passwords also means owning password hashing, reset emails, session
security, breached-password defenses, multifactor authentication, and account
recovery. Those responsibilities add risk without testing the product's unique
idea.

Google sign-in should establish an account, not automatically grant community
access. Keep these as separate states:

1. A person authenticates with Google.
2. They complete the recognizable-name and community-connection application.
3. Existing members vouch for them and a human reviews the application.
4. Approval unlocks the feed.

Later, add an email magic-link or passkey option for people who do not want to
use Google. A custom username-and-password system should only be added if users
demonstrate that they need it.

### Recommended next milestone

Build the real **apply → vouch → review → approve → enter** flow before building
Instagram import or native apps. It is both the account foundation and the most
distinctive test of Tetrameter's trust-first premise. The smallest useful beta
would include:

- Google sign-in through a managed provider
- applicant, sponsor, and reviewer roles
- an application stored privately with minimal personal data
- invitations or two member vouches
- a small human review queue
- approved, waitlisted, rejected, suspended, and deleted account states
- audit history for review decisions
- clear retention and deletion rules for rejected applications

Once that boundary works, add durable posts and photo uploads behind it.

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
