import React from "react";
import { MdOutlineSlowMotionVideo } from "react-icons/md";

const Header = () => {
  return (
    <div className="header-container">
      <MdOutlineSlowMotionVideo size={25} className="header-icon" />
      <div>Play Videos Hub </div>
    </div>
  );
};

export default Header;
