"use client";

import { FormEvent, useEffect, useState } from "react";

type Post = {
  id: number;
  name: string;
  initials: string;
  color: string;
  place: string;
  season: string;
  date: string;
  caption: string;
  photos: string[];
  reactions: number;
  reacted?: boolean;
};

const starterPosts: Post[] = [
  {
    id: 1,
    name: "Maya & Theo",
    initials: "MT",
    color: "#6f7b53",
    place: "Fort Collins, CO",
    season: "Summer",
    date: "July 28",
    caption:
      "A slow summer, in the best way. We finally planted the backyard, took June off from making plans, and spent a long weekend at the lake with my parents. Olive has decided that every body of water belongs to her. Feeling lucky and very sun-warmed.",
    photos: [
      "https://images.unsplash.com/photo-1504151932400-72d4384f04b3?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1499438075715-fc23ef376ab9?auto=format&fit=crop&w=900&q=85",
    ],
    reactions: 18,
  },
  {
    id: 2,
    name: "Priya Shah",
    initials: "PS",
    color: "#a86950",
    place: "Chicago, IL",
    season: "Spring",
    date: "May 19",
    caption:
      "This spring brought a new apartment, a tiny balcony, and the surprising discovery that I can keep herbs alive. Come visit — the guest room is officially open and the basil is getting out of hand.",
    photos: [
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=85",
    ],
    reactions: 24,
  },
  {
    id: 3,
    name: "Eli & Marcus",
    initials: "EM",
    color: "#738a9b",
    place: "Portland, ME",
    season: "Spring",
    date: "April 7",
    caption:
      "We made it through our first Maine winter. The reward: muddy trails, open windows, and one excellent birthday cake. Work is busy, the house is still crooked, and we're very happy here.",
    photos: [
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1000&q=85",
    ],
    reactions: 31,
  },
];

function FourfoldMark({ small = false }: { small?: boolean }) {
  return (
    <span className={small ? "mark mark-small" : "mark"} aria-hidden="true">
      <i />
      <i />
      <i />
      <i />
    </span>
  );
}

function Lives({ count }: { count: number }) {
  return (
    <div className="lives" aria-label={`${count} of 4 updates remaining this year`}>
      {[0, 1, 2, 3].map((life) => (
        <span className={life < count ? "life life-full" : "life"} key={life}>
          <i>♥</i>
        </span>
      ))}
    </div>
  );
}

export function Feed() {
  const [posts, setPosts] = useState(starterPosts);
  const [remaining, setRemaining] = useState(3);
  const [composerOpen, setComposerOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [caption, setCaption] = useState("");
  const [notice, setNotice] = useState("");

  useEffect(() => {
    if (!composerOpen) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setComposerOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [composerOpen]);

  function reactTo(postId: number) {
    setPosts((current) =>
      current.map((post) =>
        post.id === postId
          ? {
              ...post,
              reacted: !post.reacted,
              reactions: post.reactions + (post.reacted ? -1 : 1),
            }
          : post,
      ),
    );
  }

  function publish(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!caption.trim() || remaining === 0) return;
    setPosts((current) => [
      {
        id: Date.now(),
        name: "Alex Morgan",
        initials: "AM",
        color: "#8a6d8e",
        place: "Denver, CO",
        season: "Summer",
        date: "Just now",
        caption: caption.trim(),
        photos: [],
        reactions: 0,
      },
      ...current,
    ]);
    setRemaining((value) => value - 1);
    setCaption("");
    setComposerOpen(false);
    setNotice("Your summer update is now with your people.");
    window.setTimeout(() => setNotice(""), 4200);
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Fourfold home">
          <FourfoldMark />
          <span>fourfold</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a className="nav-active" href="#feed">Home</a>
          <a href="#people">People</a>
          <a href="#about">About</a>
        </nav>
        <div className="profile-wrap">
          <button
            className="profile-button"
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-label="Open profile menu"
          >
            <span className="avatar avatar-you">AM</span>
            <span className="profile-name">Alex</span>
            <span aria-hidden="true">⌄</span>
          </button>
          {menuOpen && (
            <div className="profile-menu">
              <button type="button">View profile</button>
              <button type="button">Settings</button>
              <button type="button">Sign out</button>
            </div>
          )}
        </div>
      </header>

      <main id="top">
        <section className="welcome" aria-labelledby="welcome-heading">
          <div>
            <p className="eyebrow">Your people, lately</p>
            <h1 id="welcome-heading">A little life, shared slowly.</h1>
            <p className="welcome-copy">
              No noise, no strangers, no catching up to do. Just the latest from
              the people you chose.
            </p>
          </div>
          <div className="season-card">
            <div className="season-card-top">
              <span>2026 updates</span>
              <span className="season-pill">Summer</span>
            </div>
            <Lives count={remaining} />
            <p><strong>{remaining} updates left</strong> until January 1</p>
            <button type="button" onClick={() => setComposerOpen(true)}>
              Share a seasonal update
            </button>
          </div>
        </section>

        <div className="page-grid">
          <aside className="left-rail" id="people">
            <div className="rail-card">
              <p className="rail-label">Your circle</p>
              <a className="rail-row rail-row-active" href="#feed">
                <span className="rail-icon">⌂</span>
                <span>All updates</span>
                <b>{posts.length}</b>
              </a>
              <a className="rail-row" href="#favorites">
                <span className="rail-icon">♡</span>
                <span>Closest people</span>
                <b>12</b>
              </a>
              <a className="rail-row" href="#saved">
                <span className="rail-icon">◇</span>
                <span>Saved moments</span>
              </a>
            </div>
            <div className="quiet-note">
              <FourfoldMark small />
              <p>
                <strong>You’re all caught up.</strong><br />
                There are no suggested posts here. When you reach the end, it ends.
              </p>
            </div>
          </aside>

          <section className="feed" id="feed" aria-label="Updates from your circle">
            <div className="feed-heading">
              <h2>Recent updates</h2>
              <span>Newest first</span>
            </div>
            {posts.map((post) => (
              <article className="post" key={post.id}>
                <header className="post-header">
                  <span className="avatar" style={{ background: post.color }}>
                    {post.initials}
                  </span>
                  <div>
                    <h3>{post.name}</h3>
                    <p>{post.place} <span>·</span> {post.date}</p>
                  </div>
                  <span className="post-season">{post.season} update</span>
                </header>

                {post.photos.length > 0 && (
                  <div className={`photo-grid photos-${Math.min(post.photos.length, 3)}`}>
                    {post.photos.map((photo, index) => (
                      <img
                        key={photo}
                        src={photo}
                        alt={`${post.name}'s ${post.season.toLowerCase()} update, photo ${index + 1}`}
                      />
                    ))}
                  </div>
                )}

                <div className="post-body">
                  <p>{post.caption}</p>
                  <div className="post-actions">
                    <button
                      className={post.reacted ? "heart-button heart-button-on" : "heart-button"}
                      type="button"
                      onClick={() => reactTo(post.id)}
                      aria-label={post.reacted ? "Remove heart" : "Send a heart"}
                    >
                      {post.reacted ? "♥" : "♡"} <span>{post.reactions || "Send some love"}</span>
                    </button>
                    <button type="button" onClick={() => setNotice("A private reply box is coming next.")}>
                      Reply privately
                    </button>
                  </div>
                </div>
              </article>
            ))}
            <div className="feed-end">
              <FourfoldMark small />
              <h2>That’s everything.</h2>
              <p>You’ve seen every update from the people you follow.</p>
            </div>
          </section>

          <aside className="right-rail" id="about">
            <div className="principles-card">
              <p className="rail-label">A gentler agreement</p>
              <h2>Designed to have an ending.</h2>
              <ul>
                <li><span>01</span>Four updates per year</li>
                <li><span>02</span>Only people you follow</li>
                <li><span>03</span>Chronological, always</li>
                <li><span>04</span>No ads, bots, or video</li>
              </ul>
              <a href="#manifesto">Why Fourfold exists →</a>
            </div>
            <div className="invite-card">
              <p className="rail-label">Your circle</p>
              <h3>86 of 1,000 people</h3>
              <div className="people-stack" aria-hidden="true">
                <span style={{ background: "#78865f" }}>JN</span>
                <span style={{ background: "#b27c63" }}>CB</span>
                <span style={{ background: "#788ca1" }}>RL</span>
                <span>+83</span>
              </div>
              <button type="button" onClick={() => setNotice("Invite links will arrive with sign-in.")}>
                Invite someone you know
              </button>
            </div>
          </aside>
        </div>
      </main>

      <footer>
        <a className="brand footer-brand" href="#top"><FourfoldMark small /> fourfold</a>
        <p>Made for keeping up, not keeping you here.</p>
        <div><a href="#privacy">Privacy</a><a href="#principles">Principles</a><a href="#help">Help</a></div>
      </footer>

      {composerOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setComposerOpen(false)}>
          <section className="composer" role="dialog" aria-modal="true" aria-labelledby="composer-title" onMouseDown={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" onClick={() => setComposerOpen(false)} aria-label="Close composer">×</button>
            <p className="eyebrow">Your summer update</p>
            <h2 id="composer-title">What should your people know?</h2>
            <p>Think of it like a note tucked into a seasonal card.</p>
            <form onSubmit={publish}>
              <textarea
                autoFocus
                value={caption}
                onChange={(event) => setCaption(event.target.value.slice(0, 1600))}
                placeholder="The ordinary things, the big news, the small joys…"
                aria-label="Seasonal update caption"
                required
              />
              <div className="composer-tools">
                <button type="button" className="photo-button" onClick={() => setNotice("Photo uploads are part of the next build.")}>＋ Add up to 10 photos</button>
                <span>{caption.length} / 1,600</span>
              </div>
              <div className="composer-footer">
                <div><Lives count={remaining} /><small>This uses one yearly update</small></div>
                <button className="publish-button" type="submit" disabled={!caption.trim()}>Share with my circle</button>
              </div>
            </form>
          </section>
        </div>
      )}

      {notice && <div className="toast" role="status">{notice}</div>}
    </div>
  );
}
