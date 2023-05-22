import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import './app.scss'
import Topbar from "./components/topbar/Topbar";
import Desktop9 from "./pages/Desktop9";
import Profile from "./pages/profile/Profile";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <div className="app">
      <Topbar/>

    <div className="pages">
      <Routes>
      <Route path="/" element={<Desktop9 />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
    </div>
    
    </div>
  );
}
export default App;
