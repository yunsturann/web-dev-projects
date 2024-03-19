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

## 04-promptopia

## 05-hookform-zod

- I grasped the purpose of hookform, zod & when it is required.
- it handles lots of useful functionalities such as isSubmitting, errors, resetting form and submitting without preventDefault.
- schema and its type should be decleared for type safety.
- input validation can be handled in the schema.
  - z.object({ email: z.string().email().min(3,"email must be at least 3 character!"),})
- also zod can be used to check server errors.

## 06-lama-next.js

- This is my first project by using module.css. I followed LamaDev/youtube
- Server Actions were used on Login, Register, Admin Panel Pages.
- Auth-V5, protecting pages
- Mongoose
- Dynamic and Static Metadata.
- Data mutation with actions. revalidatePath("/blog")

## 07-lama-next.js

- I made lots of tests in the project about typescript, reusable components, server actions and iron session.

## 08-coffee-app

- I learned how to use AOS and SwiperJS.
- I practiced typescript, tailwind and responsive design.
- I made my reusable Button component with Typescript.
- I practiced making animations while coding this application. Design is not mine but <b>codes are mine</b>. Design is from <span style="color:blue; font-weight:bold">Efe Görkem Ümit</span>. Thanks to him for this design and I learned how to use swiper and aos libraries. You can reach his youtube channel from link below.
- [Click for His Channel](https://www.youtube.com/@EfeGorkemUmit)

## 10-multi-step-form

- [Design from frontendmentor.io](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ)
- I learned new things about typescript. Also, I repeated my old knowledge.
- I tried to practice typescript, hook-form + zod, useContext and reusable components.
- To deal with the mobile responsiveness was so educative.
- The design requires plenty of states to use them in another components. So that, state management was significant.
- I am aware of the importance of redux. I don't know it now. But it might be pretty handy/useful to manage many states.

## 11-cookie session

- To learn iron-session with typescript

## 12-redux-nextjs

- To learn how to use redux in the next.js project.

## 13-imaginify

## 14-interactive-card

- [Design from frontendmentor.io](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw)
- A project to use React-Hook-Form better
- I used hookFormContext for the first time. It is beneficial to use.
- watch is an another useful method to keep track of the values of inputs. It can be used with useEffect.
