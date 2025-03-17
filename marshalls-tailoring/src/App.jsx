import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./navbar";
import { Home } from "./pages/home/home";
import { Suits } from "./pages/suits/suits";
import { Contact } from "./pages/contact/contact";
import Error from "./pages/error";

// import { useEffect, useState } from "react";

function App() {
  // const [loading, setLoading] = useState(0);
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);
  return (
    <>
      {/* {loading ? (
        <LoadingScreen />
      ) : (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/suits" element={<Suits />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      )} */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/suits" element={<Suits />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
