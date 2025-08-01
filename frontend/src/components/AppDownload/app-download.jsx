import { assets } from "../../assets/assets";
import "./app-download.css";

const AppDownload = () => {
  return (
    <div className="app-download" id="mobile-app">
      <p>
        For Better Experience Download <br /> Tomato App{" "}
      </p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="playstore" />
        <img src={assets.app_store} alt="appstore" />
      </div>
    </div>
  );
};

export default AppDownload;
