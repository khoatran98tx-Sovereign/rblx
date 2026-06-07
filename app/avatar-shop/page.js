export default function AvatarShop() {
  const avatars = [
    "robot",
    "ninja",
    "dragon",
    "wizard",
    "pirate"
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#111",
        color: "white",
        padding: "40px"
      }}
    >
      <h1>Avatar Shop</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
          gap: "20px"
        }}
      >
        {avatars.map((avatar) => (
          <div
            key={avatar}
            style={{
              background: "#1f1f1f",
              padding: "20px",
              borderRadius: "12px",
              textAlign: "center"
            }}
          >
            <img
              src={`https://api.dicebear.com/7.x/bottts/svg?seed=${avatar}`}
              width="120"
              height="120"
              alt={avatar}
            />

            <h3>{avatar}</h3>

            <button>Equip</button>
          </div>
        ))}
      </div>
    </main>
  );
}
