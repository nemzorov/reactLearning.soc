import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Main from "./components/Main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="App">
          <Header />
          <Navbar data={props.state.navbar} />
          <div className="wrapp">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route
                path="/profile"
                element={
                  <Profile
                    data={props.state.profile}
                    dispath={props.dispath}
                    textareaVal={props.state.profile.textareaVal}
                  />
                }
              />
              <Route
                path="/message/*"
                element={
                  <Messages
                    data={props.state.messagesPage}
                    dispath={props.dispath}
                    textareaVal={props.state.messagesPage.textareaVal}
                  />
                }
              />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
