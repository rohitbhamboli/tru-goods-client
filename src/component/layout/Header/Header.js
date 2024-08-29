import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/truGoods_logo.png";

let options = {
  burgerColorHover: "gray",
  logo,
  logoWidth: "20vmax",
  navColor1: "#f4f3f2",
  logoHoverSize: "10px",
  logoHoverColor: "#000000",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "2vmax",
  link1Color: "rgba(35, 35, 35, 0.8)",
  link1Transition: 0.2,
  link2Transition: 0.2,
  link3Transition: 0.2,
  link4Transition: 0.2,
  link1AnimationTime: 0.2,
  link2AnimationTime: 0.4,
  link3AnimationTime: 0.6,
  link4AnimationTime: 0.8,
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#000000",
  link1Margin: "1.5vmax",
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35, 0.8)",
  searchIconColor: "rgba(35, 35, 35, 0.8)",
  cartIconColor: "rgba(35, 35, 35, 0.8)",
  profileIconColorHover: "#000000",
  searchIconColorHover: "#000000",
  cartIconColorHover: "#000000",
  cartIconMargin: "1.5vmax",
  searchIconTransition: 0.3,
  cartIconTransition: 0.3,
  profileIconTransition: 0.3,
  searchIconAnimationTime: 1,
  cartIconAnimationTime: 1.4,
  profileIconAnimationTime: 1.8,
  searchIconUrl: "/search",
  cartIconUrl: "/cart",
};
const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;
