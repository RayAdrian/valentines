import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ValentinesProposal from "./components/ValentinesProposal";
import SuccessPage from "./components/SuccessPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ValentinesProposal />} />
        <Route path="/my-valentine" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;
