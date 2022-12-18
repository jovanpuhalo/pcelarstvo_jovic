import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage.js";
import ContactPage from "./pages/ContactPage.js";
import { useDispatch } from "react-redux";
import { uiActions } from "./store/ui-slice";
function App() {
  const { pathname, hash, key } = useLocation();
  const dispatch = useDispatch();
  console.log("app pathname", pathname);
  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === "") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: pathname === "/" ? "smooth" : "auto",
      });

      // else scroll to id
    } else {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    console.log("evo me ispred ifa");
    if (pathname !== "/") {
      console.log("usao");
      dispatch(uiActions.setIntroAnimationIsFinish());
    }
  }, [pathname, hash, key]); // do this on route change

  return (
    <Layout>
      <Routes>
        {/* <Route path="/" element={<Navigate replace to="/home" />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
