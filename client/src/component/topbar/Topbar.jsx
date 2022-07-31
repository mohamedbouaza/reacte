import React from "react";
import "./Topbar.css";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import { mobile } from "../../responsive";
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          {/* <img className="img" src="BFgest.png" alt="logo" />   */}
          <span className="logo">BFgest</span>
        </div>
        <div className="topRight">
          <div className="topbarIcons">
            <CircleNotificationsIcon />
            <span className="topBadge">2</span>
          </div>

          <div className="topbarIcons">
            <LanguageIcon />
            <span className="topBadge">fr</span>
          </div>

          <div className="topbarIcons">
            <SettingsIcon />
          </div>
          <div>
            <img src="BFgest.png" alt="" className="topAvatar" />
            
          </div>
        </div>
      </div>
    </div>
  );
}
