import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "50px"
      }}
    >
      <div
        style={{
          width: "420px",
          padding: "30px",
          boxShadow: "0 5px 15px rgba(0,0,0,.2)",
          borderRadius: "10px"
        }}
      >
        <h1 style={{ textAlign: "center" }}>Create Account</h1>

        <input
          type="text"
          placeholder="Full Name"
          style={{ width: "100%", padding: "12px", margin: "10px 0" }}
        />

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
            background: "#16a34a",
            color: "white",
            border: "none",
            borderRadius: "8px"
          }}
        >
          Create Account
        </button>

        <p style={{ marginTop: "20px", textAlign: "center" }}>
          Already have an account?
          <Link to="/signin"> Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;