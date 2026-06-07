"use client";

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  const games = [
    { name: "Obby Adventure", players: "1.2K" },
    { name: "Racing World", players: "850" },
    { name: "Survival Island", players: "2.3K" },
    { name: "Zombie Escape", players: "600" },
    { name: "Sky Tycoon", players: "1.8K" },
    { name: "Battle Arena", players: "3.4K" }
  ];

  async function askBot() {
    if (!message.trim()) return;

    setLoading(true);

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

      setReply(data.reply || "No response received.");
      setMessage("");
    } catch (error) {
      setReply("Error connecting to AI.");
    }

    setLoading(false);
  }

  return (
    <main
      style={{
        background: "#111",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <nav
        style={{
          padding: "20px",
          background: "#1b1b1b",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <h2 style={{ margin: 0 }}>RBLX</h2>

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
        <h1
          style={{
            fontSize: "48px",
            marginBottom: "10px"
          }}
        >
          Discover Games
        </h1>

        <p
          style={{
            color: "#bbb",
            fontSize: "20px",
            marginBottom: "40px"
          }}
        >
          Create, play, and share games.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px"
          }}
        >
          {games.map((game) => (
            <div
              key={game.name}
              style={{
                background: "#222",
                padding: "20px",
                borderRadius: "12px"
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

              <button
                style={{
                  padding: "10px 16px",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer"
                }}
              >
                Play
              </button>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "50px",
            background: "#222",
            padding: "25px",
            borderRadius: "12px"
          }}
        >
          <h2>🤖 AI Assistant</h2>

          <p style={{ color: "#bbb" }}>
            Ask questions about games or the RBLX platform.
          </p>

          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask the AI something..."
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "10px",
              marginBottom: "10px",
              borderRadius: "8px",
              border: "none"
            }}
          />

          <button
            onClick={askBot}
            disabled={loading}
            style={{
              padding: "10px 20px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer"
            }}
          >
            {loading ? "Thinking..." : "Send"}
          </button>

          {reply && (
            <div
              style={{
                marginTop: "15px",
                padding: "15px",
                background: "#333",
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
