# web-dev-projects

Includes clone projects &amp; different projects to learn new perspectives and learn to solve problems in different ways.

## 01-ticket-app

- CRUD operations with mongoose
- Connect mongoose in models with <span style="color:blue">mongoose.Promise = global.Promise</span>
- data fetching on the server side. cache:"no-store" to see updated tickets.
- categories separated by using Set data structure in the main page.jsx
- EDITMODE variable is used to make different operations in the same file which includes form. Update & Add
- range, radio, select/option, text, submit input elements are used.
- display:contents is a usefull css property
- date formatted with a function in the TicketCard component

## 02-next-auth

## 03-anime-vault

- From <a href="https://www.youtube.com/watch?v=FKZAXFjxlJI" target="_blank">jsmasteryoutube</a>
- I learned new concepts and libraries such as server actions, framer motion and infinite scroll
- <span style="color:red">react-intersection-observer</span> library.
  - import <span style="color:blue">useInView</span> function then destruct ref and inView <span style="color:blue"> const { ref, inView } = useInView();</span>
  - use inView with useEffect. it returns 'boolen' true when the browser sees the element which was referred by ref.
  - finally make action in the useEffect
- <span style="color:red">framer motion</span> library is the most popular one to make animations. it was used in the AnimeCard component.
- Partial rendering
- make another component to render cards in the first page(8 cards in the page.jsx) on the server side. others are in the client side (_tested_). <span style="color:blue">export MotionDiv = motion.div</span>.
- Lastly, <span style="color:blue">line-clamp-1 </span>is a beneficial tailwind class
