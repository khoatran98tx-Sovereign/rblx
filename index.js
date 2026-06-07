export default function Home() {
  return (
    <div style={{
      fontFamily: "Arial",
      padding: "40px",
      background: "#111",
      color: "white",
      minHeight: "100vh"
    }}>
      <h1>RBLX</h1>

      <h2>Popular Games</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
        gap: "20px"
      }}>
        <div style={{background:"#222",padding:"20px",borderRadius:"10px"}}>
          <h3>Obby Adventure</h3>
          <button>Play</button>
        </div>

        <div style={{background:"#222",padding:"20px",borderRadius:"10px"}}>
          <h3>Racing World</h3>
          <button>Play</button>
        </div>

        <div style={{background:"#222",padding:"20px",borderRadius:"10px"}}>
          <h3>Survival Island</h3>
          <button>Play</button>
        </div>
      </div>
    </div>
  );
}
