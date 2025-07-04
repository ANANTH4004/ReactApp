
const Profile = ({ link, pic }) => (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        textDecoration: "none",
        color: "#333",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src={pic}
        alt="Profile avatar"
        style={{
          width: 100,
          height: 100,
          borderRadius: "50%",
          objectFit: "cover",
          boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
          marginBottom: 12,
          transition: "transform 0.3s ease",
        }}
        // Slight zoom effect on hover
        onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
      />
      <span style={{ fontWeight: "600", fontSize: 14, userSelect: "none" }}>
        View Profile
      </span>
    </a>
  );

export default Profile