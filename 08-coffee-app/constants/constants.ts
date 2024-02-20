//icons
import { GiFoodTruck } from "react-icons/gi";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";

export const navDatas = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Services",
    link: "/services",
  },
  {
    id: 3,
    name: "About",
    link: "/about",
  },
  {
    id: 4,
    name: "Contact",
    link: "/contact",
  },
];

export const heroItems = [
  {
    id: 0,
    label1: "City's top",
    label2: "coffee",
    label3: "coding with caffeine and code.",
    src: "/images/1.png",
    text1: "Hey Coder",
    text2: "Hey Coffee",
  },
  {
    id: 1,
    label1: "City's best brew",
    label2: "coding ",
    label3: "with caffeine and code.",
    src: "/images/3.png",
    text1: "Hey Coder",
    text2: "Hey Coffee",
  },
  {
    id: 2,
    label1: "Finest brew",
    label2: "fueling  ",
    label3: "code with caffeine.",
    src: "/images/4.png",
    text1: "Hey Coder",
    text2: "Hey Coffee",
  },
  {
    id: 3,
    label1: "Boldest brew",
    label2: "fueling  ",
    label3: "code with caffeine.",
    src: "/images/5.png",
    text1: "Hey Coder",
    text2: "Hey Coffee",
  },
];

export const servicesItems = [
  {
    id: 0,
    name: "Expresso",
    src: "/images/1.png",
    desc: "Expresso is a concentrated coffee drink made by forcing hot water through finely-ground coffee beans.",
    aosDelay: "100",
  },
  {
    id: 1,
    name: "Cappuccino",
    src: "/images/3.png",
    desc: "Cappuccino is a coffee drink that today is typically composed of a single espresso shot and hot milk, with the surface topped with foamed milk.",
    aosDelay: "300",
  },
  {
    id: 2,
    name: "Americano",
    src: "/images/4.png",
    desc: "Caffè Americano or Americano is a type of coffee drink prepared by diluting an espresso with hot water, giving it a similar strength to, but different flavor from, traditionally brewed coffee.",
    aosDelay: "500",
  },
  {
    id: 3,
    name: "Latte",
    src: "/images/5.png",
    desc: "Caffè latte is a coffee drink made with espresso and steamed milk. The word comes from the Italian caffè e latte, caffelatte or caffellatte, which means 'coffee & milk'.",
    aosDelay: "700",
  },
];

// : {
//   id: number;
//   icon: IconType;
//   title: string;
//   bgColor: string | undefined;
// }[]

export const coffeeTypes = [
  {
    id: 0,
    icon: GrSecure,
    title: "Premium Coffee",
    bgColor: "rgb(253 164 175)",
  },
  {
    id: 1,
    icon: IoFastFood,
    title: "Hot Coffee",
    bgColor: "rgb(134 239 172)",
  },
  {
    id: 2,
    icon: GiFoodTruck,
    title: "Cold Coffee",
    bgColor: "rgb(147 197 253)",
  },
];

export const testimonials = [
  {
    id: 0,
    name: "Angelina Jolie",
    text: "This is the best coffee I've ever tasted. I'm in love with",
    img: "/images/person/1.jpg",
  },
  {
    id: 1,
    name: "Margor Robbie",
    text: "I am coffee person and this coffee are the best one I've ever tasted",
    img: "/images/person/2.jpg",
  },
  {
    id: 2,
    name: "Clark Kent",
    text: "I'm Superman who is the most powerful one.",
    img: "/images/person/3.jpg",
  },
  {
    id: 3,
    name: "Pelinsu",
    text: "Here is a place where you can find the best coffee in the world.",
    img: "/images/person/4.jpg",
  },
  {
    id: 4,
    name: "Gal Gadot",
    text: "I came from Themyscira to drink this coffee. It's amazing.",
    img: "/images/person/5.jpg",
  },
  {
    id: 5,
    name: "Arya Stark",
    text: "I'm no one. I'm here to drink coffee. It's delicious.",
    img: "/images/person/6.jpg",
  },
  {
    id: 6,
    name: "Bruce Wayne",
    text: "I'm Batman. I hate from Joker",
    img: "/images/person/7.jpg",
  },
];
