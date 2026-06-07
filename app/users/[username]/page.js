import AvatarViewer from "../../components/AvatarViewer";
export default function ProfilePage({ params }) {
  const users = {
    noobmaster: {
      username: "noobmaster",
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=noobmaster",
      bio: "I love building obbies.",
      friends: 42,
      games: 5,
      joined: "2025"
    },
    builderman: {
      username: "builderman",
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=builderman",
      bio: "Creating awesome games.",
      friends: 120,
      games: 18,
      joined: "2024"
    }
  };

  const user = users[params.username];

  if (!user) {
    return (
      <main style={{ padding: 40, color: "white", background: "#111", minHeight: "100vh" }}>
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
        padding: "40px"
      }}
    >
      <div
        style={{
          background: "#1f1f1f",
          borderRadius: "16px",
          padding: "30px",
          maxWidth: "800px",
          margin: "auto"
        }}
      >
<AvatarViewer />

        <h1>{user.username}</h1>

        <p>{user.bio}</p>

        <hr />

        <h3>📅 Joined: {user.joined}</h3>
        <h3>👥 Friends: {user.friends}</h3>
        <h3>🎮 Games Created: {user.games}</h3>

        <button
          style={{
            padding: "12px 24px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            marginTop: "20px"
          }}
        >
          Add Friend
        </button>
      </div>
    </main>
  );
}
