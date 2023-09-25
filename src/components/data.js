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
export const reviews = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
    name: "Maria Ferguson",
    title: "Interior Designer",
    quote:
      "The furniture from this store completely transformed my living room. The quality is outstanding, and the modern design perfectly matches my style.",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    name: "John Doe",
    title: "Homeowner",
    quote:
      "I recently purchased a dining table set from this store and I couldn't be happier. The craftsmanship is excellent, and it adds a touch of elegance to my dining area.",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg",
    name: "Peter Smith",
    title: "Apartment Renter",
    quote:
      "I was looking for a comfortable and stylish sofa for my apartment, and I found the perfect one at this store. It's incredibly cozy, and the sleek design complements my space.",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    name: "Susan Andersen",
    title: "Office Manager",
    quote:
      "The office furniture I purchased from this store is top-notch. It's ergonomic, functional, and has greatly improved productivity and comfort for everyone in the office.",
  },
];

export const products_url = "https://course-api.com/react-store-products";
export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
