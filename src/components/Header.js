import React from "react";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header-container" onClick={() => navigate("/")}>
      <MdOutlineSlowMotionVideo size={25} className="header-icon" />
      <div>Play Videos Hub </div>
    </div>
  );
};

export default Header;
