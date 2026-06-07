export default function FriendsPage() {
  const friends = [
    "builderman",
    "proplayer",
    "speedrunner",
    "obbyking"
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
      <h1>Friends</h1>

      {friends.map((friend) => (
        <div
          key={friend}
          style={{
            background: "#1f1f1f",
            padding: "15px",
            borderRadius: "10px",
            marginBottom: "10px"
          }}
        >
          👤 {friend}
        </div>
      ))}
    </main>
  );
}
