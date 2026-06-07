export default function ObbyAdventure() {
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
      <h1>Obby Adventure</h1>

      <p>Jump across platforms and reach the finish line!</p>

      <button
        onClick={() => alert("Game starting...")}
        style={{
          padding: "12px 24px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer"
        }}
      >
        Start Game
      </button>
    </main>
  );
}
