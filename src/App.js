import "./App.css";
import LeftSideBar from "./left_sidebar/LeftSidebar";
import RightSideBar from "./right_sidebar/RightSidebar";
import WelcomeUser from "./welcome_banner/WelcomeUser";
import { ReduxProvider } from "./redux/provider";
import InfoBanner from "./info_banner/InfoBanner";
import Jobs from "./job_card/Jobs";

function App() {
  return (
    <ReduxProvider>
      <div className="App">
        <div className="flex-container">
          <LeftSideBar />
          <WelcomeUser />
          <div className="content">
            <InfoBanner />
            <Jobs />
          </div>
          <RightSideBar />
        </div>
      </div>
    </ReduxProvider>
  );
}

export default App;
