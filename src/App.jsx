import "./css/App.css"
import Navbar from "./components/Navbar.jsx"
import Welcome from "./components/Welcome.jsx";

function App() {
  return (
    <div className="flex-center-column">
      <Navbar />
      <Welcome />
    </div>
  );
}

export default App;
