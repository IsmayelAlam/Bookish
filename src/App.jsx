import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import SearchBar from "./components/SearchBar";
import Subject from "./pages/Subject";
import Bookmark from "./pages/Bookmark";
import About from "./pages/About";

function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="subject" element={<Subject />} />
        <Route path="bookmark" element={<Bookmark />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
