"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [search, setSearch] = useState("");

  const games = [
    {
      name: "Obby Adventure",
      slug: "obby-adventure",
      players: "1.2K"
    },
    {
      name: "Racing World",
      slug: "racing-world",
      players: "850"
    },
    {
      name: "Survival Island",
      slug: "survival-island",
      players: "2.3K"
    },
    {
      name: "Battle Arena",
      slug: "battle-arena",
      players: "3.1K"
    }
  ];

  const filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(search.toLowerCase())
  );

  async function askBot() {
    if (!message.trim()) return;

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message
        })
      });

      const data = await res.json();
      setReply(data.reply);
    } catch {
      setReply("AI unavailable right now.");
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f0f0f",
        color: "white",
        fontFamily: "Arial"
      }}
    >
      <nav
        style={{
          background: "#181818",
          padding: "20px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <h1 style={{ margin: 0 }}>RBLX</h1>

        <button
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer"
          }}
        >
          Login
        </button>
      </nav>

      <section style={{ padding: "40px" }}>
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
            color: "#aaa",
            marginBottom: "30px"
          }}
        >
          Create, play, and share games.
        </p>

        <input
          type="text"
          placeholder="Search games..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "10px",
            border: "none",
            marginBottom: "30px",
            fontSize: "16px"
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px"
          }}
        >
          {filteredGames.map((game) => (
            <div
              key={game.slug}
              style={{
                background: "#1f1f1f",
                borderRadius: "12px",
                padding: "20px"
              }}
            >
              <div
                style={{
                  height: "140px",
                  background: "#333",
                  borderRadius: "10px",
                  marginBottom: "15px"
                }}
              />

              <h3>{game.name}</h3>

              <p style={{ color: "#aaa" }}>
                {game.players} players online
              </p>

              <Link href={`/games/${game.slug}`}>
                <button
                  style={{
                    padding: "10px 20px",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer"
                  }}
                >
                  Play
                </button>
              </Link>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "50px",
            background: "#1f1f1f",
            padding: "25px",
            borderRadius: "12px"
          }}
        >
          <h2>🤖 AI Assistant</h2>

          <p style={{ color: "#aaa" }}>
            Ask questions about games or the RBLX platform.
          </p>

          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask something..."
            style={{
              width: "100%",
              padding: "15px",
              borderRadius: "10px",
              border: "none",
              marginTop: "10px"
            }}
          />

          <button
            onClick={askBot}
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

          {reply && (
            <div
              style={{
                marginTop: "15px",
                background: "#2d2d2d",
                padding: "15px",
                borderRadius: "8px"
              }}
            >
              {reply}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
