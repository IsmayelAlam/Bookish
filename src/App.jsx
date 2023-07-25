import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
