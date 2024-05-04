import "./App.css";
import LeftSideBar from "./left_sidebar/LeftSidebar";
import RightSideBar from "./right_sidebar/RightSidebar";

function App() {
  return (
    <div className="App">
      <div className="flex-container">
        <LeftSideBar />
        <div className="content"></div>
        <RightSideBar />
      </div>
    </div>
  );
}

export default App;
