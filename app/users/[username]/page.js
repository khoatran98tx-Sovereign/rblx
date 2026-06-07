import AvatarViewer from "../../components/AvatarViewer";

export default function ProfilePage({ params }) {
  const users = {
    noobmaster: {
      username: "noobmaster",
      bio: "I love building obbies.",
      friends: 42,
      games: 5,
      joined: "2025",
    },
    builderman: {
      username: "builderman",
      bio: "Creating awesome games.",
      friends: 120,
      games: 18,
      joined: "2024",
    },
  };

  const user = users[params.username];

  if (!user) {
    return (
      <main
        style={{
          minHeight: "100vh",
          background: "#111",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Arial",
        }}
      >
        <h1>User Not Found</h1>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#111",
        color: "white",
        fontFamily: "Arial",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: "#1f1f1f",
          borderRadius: "16px",
          padding: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "30px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <div>
            <AvatarViewer />
          </div>

          <div>
            <h1
              style={{
                marginBottom: "10px",
                fontSize: "42px",
              }}
            >
              {user.username}
            </h1>

            <p
              style={{
                color: "#aaa",
                marginBottom: "20px",
              }}
            >
              {user.bio}
            </p>

            <div
              style={{
                display: "grid",
                gap: "10px",
              }}
            >
              <div>📅 Joined: {user.joined}</div>
              <div>👥 Friends: {user.friends}</div>
              <div>🎮 Games Created: {user.games}</div>
            </div>

            <button
              style={{
                marginTop: "20px",
                padding: "12px 24px",
                borderRadius: "8px",
                border: "none",
                background: "#2563eb",
                color: "white",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Add Friend
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
