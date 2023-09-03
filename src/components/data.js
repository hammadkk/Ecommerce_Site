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
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
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

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "Mission",
    text: "Our mission is to create custom furniture that reflects your unique style and meets your specific needs. We believe that furniture should not only be beautiful, but also functional and comfortable. That's why we work closely with our clients to design and build pieces that are both aesthetically pleasing and practical.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "Vision",
    text: "Our vision is to be the premier custom furniture maker in the industry, known for our exceptional craftsmanship, personalized service, and commitment to sustainability. We strive to create pieces that not only meet our clients' needs, but also exceed their expectations in terms of quality and design.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "History",
    text: "Our company has a rich history of creating custom furniture that spans several generations. We were founded by a family of craftsmen who were passionate about creating beautiful and functional furniture that would stand the test of time. Today, we continue that tradition by using the same time-honored techniques and attention to detail that our founders used over a century ago.",
  },
];

export const products_url = "https://course-api.com/react-store-products";
