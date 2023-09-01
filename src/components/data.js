import React from "react";
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaShoppingCart,
} from "react-icons/fa";
export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
    icon: <FaHome />,
  },
  {
    id: 2,
    url: "/about",
    text: "about",
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: "/products",
    text: "Products",
    icon: <FaFolderOpen />,
  },
];

export const linksshop = [
  {
    id: 1,
    url: "/cart",
    text: "Cart",
    icon: <FaShoppingCart />,
  },
  {
    id: 2,
    url: "/Login",
    text: "Login",
    icon: <FaUserFriends />,
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.twitter.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.twitter.com",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.twitter.com",
    icon: <FaBehance />,
  },
  {
    id: 5,
    url: "https://www.twitter.com",
    icon: <FaSketch />,
  },
];
