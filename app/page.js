export default function Home() {
  const games = [
    { name: "Obby Adventure", players: "1.2K" },
    { name: "Racing World", players: "850" },
    { name: "Survival Island", players: "2.3K" },
    { name: "Zombie Escape", players: "600" },
    { name: "Sky Tycoon", players: "1.8K" },
    { name: "Battle Arena", players: "3.4K" }
  ];

  return (
    <main
      style={{
        background: "#111",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial"
      }}
    >
      <nav
        style={{
          padding: "20px",
          background: "#1b1b1b",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <h2>RBLX</h2>
        <button>Login</button>
      </nav>

      <section style={{ padding: "40px" }}>
        <h1>Discover Games</h1>
        <p>Create, play, and share games.</p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
            marginTop: "30px"
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
                  height: "120px",
                  background: "#333",
                  borderRadius: "8px"
                }}
              />

              <h3>{game.name}</h3>
              <p>{game.players} players</p>

              <button>Play</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
