import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";

function App() {
  return (
    <div className="container">
      <div className="App">
        <Header />
        <Navbar />
        <div className="wrapp">
          <Profile />
          <Messages />
        </div>
      </div>
    </div>
  );
}

export default App;
