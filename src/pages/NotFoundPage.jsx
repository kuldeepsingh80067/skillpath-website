import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="not-found">

      <h1>404</h1>

      <h2>Oops! Page Not Found</h2>

      <p>
        The page you are looking for doesn't exist.
      </p>

      <Link to="/">
        <button className="btn">
          Go Back Home
        </button>
      </Link>

    </div>
  );
}

export default NotFoundPage;