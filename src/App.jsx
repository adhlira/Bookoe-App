/* eslint-disable no-unused-vars */
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage";
import BookDetail from "./Pages/BookDetailPage";
import TopPicksPage from "./Pages/TopPicksPage";
import LatestBookPage from "./Pages/LatestBookPage";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/detail/:id" element={<BookDetail />}></Route>
          <Route path="/top_picks" element={<TopPicksPage />}></Route>
          <Route path="/latest" element={<LatestBookPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
