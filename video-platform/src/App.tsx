import { Routes, Route, BrowserRouter } from "react-router-dom";
import VideoPage from "./pages/VideoPage";
import Header from "./components/Header";
import { Home } from "./pages/Home";
import Search from "./pages/Search";

const App = () => {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:id" element={<VideoPage />} />
          <Route path="/results/:q" element={<Search />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
};

export default App;
