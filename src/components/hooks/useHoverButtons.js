import { useState } from "react";

const useHoverButtons = () => {
  const [isHover, setIsHover] = useState(false);

  const buttonVerDetalle = {
    backgroundColor: isHover ? "white" : "#564592",
    color: isHover ? "#564592" : "white",
    fontFamily: "Montserrat",
    //textDecoration: "line-through",
  };

  const buttonVolver = {
    backgroundColor: isHover ? "white" : "#564592",
    color: isHover ? "#564592" : "white",
    //textDecoration: "line-through",
  };

  const buttonLogo = {
    imagenLogo: {
      width: "100px",
      //height: "200px",
      backgroundColor: isHover ? "#EDF67D" : "#564592",
    },
  };

  const buttonNavBar = {
    backgroundColor: isHover ? "#EDF67D" : "#564592",
    color: isHover ? "black" : "white",
  };

  const buttonNavBarElementos = {
    backgroundColor: isHover ? "#EDF67D" : "#564592",
    color: isHover ? "black" : "white",
  };
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleMouseEnterVerDetalle = () => {
    setIsHover(true);
  };
  const handleMouseLeaveVerDetalle = () => {
    setIsHover(false);
  };

  const handleMouseEnterVolver = () => {
    setIsHover(true);
  };
  const handleMouseLeaveVolver = () => {
    setIsHover(false);
  };
  return {
    isHover,
    setIsHover,
    handleMouseEnter,
    handleMouseLeave,
    handleMouseEnterVerDetalle,
    handleMouseLeaveVerDetalle,
    handleMouseEnterVolver,
    handleMouseLeaveVolver,
    buttonVerDetalle,
    buttonLogo,
    buttonNavBar,
    buttonVolver,
    buttonNavBarElementos,
  };
};

export default useHoverButtons;
