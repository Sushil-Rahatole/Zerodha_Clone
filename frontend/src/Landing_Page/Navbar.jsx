import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Navbar() {
  const navigate = useNavigate();
  const [cookies] = useCookies(["token"]);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true); // NEW

  useEffect(() => {
    const verifyCookie = async () => {
      try {
        const { data } = await axios.post(
          "http://localhost:3002/api/auth/verify",
          {},
          { withCredentials: true }
        );

        const { status, user } = data;

        if (!status) {
          navigate("/login");
          return;
        }

        setUsername(user);

        // Show toast only once
        if (sessionStorage.getItem("justLoggedIn") || sessionStorage.getItem("justSignedUp")) {
          toast(`Hello ${user}`, { position: "top-right" });
          sessionStorage.removeItem("justLoggedIn");
          sessionStorage.removeItem("justSignedUp");
        }
      } catch (err) {
        console.error("Auth verification failed", err);
        navigate("/login");
      } finally {
        setLoading(false); // done loading
      }
    };

    // Delay a bit to allow cookie to be set
    const delayAuth = setTimeout(() => {
      verifyCookie();
    }, 500); // 500ms delay

    return () => clearTimeout(delayAuth);
  }, [cookies.token, navigate]);

  const Logout = () => {
    sessionStorage.clear();
    navigate("/login");
  };

  if (loading) return null; // don’t render Navbar until auth is checked

  return (
    <nav className="navbar navbar-expand-lg bg-light border-bottom text-start">
      <div className="container">
        <Link className="navbar-brand" to={"/"}>
          <img src="/media/images/logo.svg" style={{ width: "30%" }} alt="logo" />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link active" to={"/about"}>About</Link></li>
            <li className="nav-item"><Link className="nav-link active" to={"/product"}>Product</Link></li>
            <li className="nav-item"><Link className="nav-link active" to={"/pricing"}>Pricing</Link></li>
            <li className="nav-item"><Link className="nav-link active" to={"/support"}>Support</Link></li>
            <li className="nav-item">
              <button className="btn btn-link nav-link" onClick={Logout} style={{ padding: 0 }}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
      <ToastContainer />
    </nav>
  );
}

export default Navbar;
