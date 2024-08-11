import { IBook } from "../types";

export const bookByGenres = [
  {
    id: 1,
    text: "All Genres",
  },
  {
    id: 2,
    text: "Business",
  },
  {
    id: 3,
    text: "Science",
  },
  {
    id: 4,
    text: "Fiction",
  },
  {
    id: 5,
    text: "Philosophy",
  },
  {
    id: 6,
    text: "Biography",
  },
];

export const recomendations = [
  {
    id: 1,
    text: "Artist of the Month",
  },
  {
    id: 2,
    text: "Book of the Year",
  },
  {
    id: 3,
    text: "Top Genre",
  },
  {
    id: 4,
    text: "Trending",
  },
];

export const recommendendBooks: IBook[] = [
  {
    id: 100,
    name: "All The Light We Cannot See",
    author: "By Anthony Doerr",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique",
    votes: 1988288,
    star: 4,
    image: "/recommended1.png",
  },
  {
    id: 101,
    name: "Where The Crawdads Sing",
    author: "By Delia Owens",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique",
    votes: 19288,
    star: 3,
    image: "/recommended2.png",
  },
  {
    id: 102,
    name: "Rich People Problems",
    author: "By Kevin Kwan",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique",
    votes: 88288,
    star: 5,
    image: "/recommended3.png",
  },
  {
    id: 103,
    name: "Crazy Rich Asians",
    author: "By Kevin Kwan",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique",
    votes: 988288,
    star: 2,
    image: "/recommended4.png",
  },
];

export const popularBooks = [
  {
    id: 104,
    name: "Tentang kamu",
    author: "Tere Liye",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique",
    votes: 1988288,
    star: 3,
    image: "/populer1.png",
  },
  {
    id: 105,
    name: "Pergi",
    author: "Tere Liye",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique",
    votes: 1988288,
    star: 4,
    image: "/populer2.png",
  },
  {
    id: 106,
    name: "Garis Waktu",
    author: "Fiersa besari",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique",
    votes: 1988288,
    star: 2,
    image: "/populer3.png",
  },
  {
    id: 107,
    name: "Becoming",
    author: "Miechelle Obama",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique",
    votes: 1988288,
    star: 4,
    image: "/populer4.png",
  },
];

export const navLinks = [
  {
    id: 1000,
    href: "/",
    name: "Explorer",
  },
  {
    id: 1001,
    href: "/shop",
    name: "Shop",
  },
  {
    id: 1002,
    href: "/about",
    name: "About",
  },
];
