"use client";

import Link from "next/link";

export default function Home() {
  const games = [
    {
      title: "Obby Adventure",
      slug: "obby-adventure",
      description: "Jump across obstacles and reach the finish."
    },
    {
      title: "Racing World",
      slug: "racing-world",
      description: "Race against other players."
    },
    {
      title: "Survival Island",
      slug: "survival-island",
      description: "Gather resources and survive."
    }
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f0f0f",
        color: "white",
        fontFamily: "Arial, sans-serif"
      }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          background: "#181818"
        }}
      >
        <h1>RBLX</h1>

        <div style={{ display: "flex", gap: "10px" }}>
          <Link href="/users/noobmaster">
            <button
              style={{
                padding: "10px 16px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer"
              }}
            >
              👤 Profile
            </button>
          </Link>

          <Link href="/friends">
            <button
              style={{
                padding: "10px 16px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer"
              }}
            >
              👥 Friends
            </button>
          </Link>

          <Link href="/avatar-shop">
            <button
              style={{
                padding: "10px 16px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer"
              }}
            >
              😀 Avatar Shop
            </button>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section
        style={{
          padding: "60px 40px"
        }}
      >
        <h2
          style={{
            fontSize: "48px",
            marginBottom: "10px"
          }}
        >
          Discover Games
        </h2>

        <p
          style={{
            fontSize: "22px",
            color: "#aaa"
          }}
        >
          Create, play, and share games.
        </p>
      </section>

      {/* Games */}
      <section
        style={{
          padding: "0 40px 60px"
        }}
      >
        <h2>🎮 Featured Games</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "20px",
            marginTop: "20px"
          }}
        >
          {games.map((game) => (
            <div
              key={game.slug}
              style={{
                background: "#1d1d1d",
                borderRadius: "16px",
                padding: "20px"
              }}
            >
              <div
                style={{
                  height: "180px",
                  background: "#333",
                  borderRadius: "10px",
                  marginBottom: "15px"
                }}
              />

              <h3>{game.title}</h3>

              <p
                style={{
                  color: "#bbb"
                }}
              >
                {game.description}
              </p>

              <Link href={`/games/${game.slug}`}>
                <button
                  style={{
                    marginTop: "10px",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer"
                  }}
                >
                  Play Game
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* AI Section */}
      <section
        style={{
          margin: "40px",
          background: "#1d1d1d",
          borderRadius: "16px",
          padding: "30px"
        }}
      >
        <h2>🤖 AI Assistant</h2>

        <p style={{ color: "#aaa" }}>
          AI assistant integration coming soon.
        </p>

        <input
          placeholder="Ask about games..."
          style={{
            width: "100%",
            padding: "15px",
            marginTop: "15px",
            borderRadius: "10px",
            border: "none"
          }}
        />

        <button
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer"
          }}
        >
          Send
        </button>
      </section>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "30px",
          color: "#777"
        }}
      >
        © 2025 RBLX Platform
      </footer>
    </main>
  );
}
