import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllPosts } from "../../store/Actions/TestActions";
import "../../App.css";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  const handleLogout = () => {
    sessionStorage.clear();
    window.location.pathname = "/signin";
  };
  return (
    <div className="App">
      <h1>Private page</h1>
      <button className="btn btn-primary" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Home;
