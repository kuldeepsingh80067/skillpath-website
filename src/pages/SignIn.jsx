import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "60px"
      }}
    >
      <div
        style={{
          width: "400px",
          padding: "30px",
          boxShadow: "0 5px 15px rgba(0,0,0,.2)",
          borderRadius: "10px"
        }}
      >
        <h1 style={{ textAlign: "center" }}>Sign In</h1>

        <input
          type="email"
          placeholder="Email"
          style={{ width: "100%", padding: "12px", margin: "10px 0" }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{ width: "100%", padding: "12px", margin: "10px 0" }}
        />

        <button
          style={{
            width: "100%",
            padding: "12px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px"
          }}
        >
          Sign In
        </button>

        <p style={{ marginTop: "20px", textAlign: "center" }}>
          Don't have an account?
          <Link to="/signup"> Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;