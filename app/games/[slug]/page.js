export default function GamePage({ params }) {
  const games = {
    "obby-adventure": {
      title: "Obby Adventure",
      description: "Jump across obstacles and reach the finish."
    },
    "racing-world": {
      title: "Racing World",
      description: "Race against other players."
    },
    "survival-island": {
      title: "Survival Island",
      description: "Gather resources and survive."
    },
    "battle-arena": {
      title: "Battle Arena",
      description: "Fight other players and become champion."
    }
  };

  const game = games[params.slug];

  if (!game) {
    return (
      <main style={{ padding: "40px", color: "white" }}>
        <h1>Game Not Found</h1>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#111",
        color: "white",
        padding: "40px",
        fontFamily: "Arial"
      }}
    >
      <h1>{game.title}</h1>
      <p>{game.description}</p>

      <button
        style={{
          padding: "12px 24px",
          borderRadius: "8px",
          border: "none"
        }}
      >
        Play Game
      </button>
    </main>
  );
}
