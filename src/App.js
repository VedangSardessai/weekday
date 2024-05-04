import "./App.css";
import LeftSideBar from "./left_sidebar/LeftSidebar";
import RightSideBar from "./right_sidebar/RightSidebar";
import WelcomeUser from "./welcome_banner/WelcomeUser";

function App() {
  return (
    <div className="App">
      <div className="flex-container">
        <LeftSideBar />
        <WelcomeUser />
        <div className="content"></div>
        <RightSideBar />
      </div>
    </div>
  );
}

export default App;
