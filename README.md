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
- A project to use React-Hook-Form in more efficient way.
- I used hookFormContext for the first time. It is beneficial to use.
- watch is an another useful method to keep track of the values of inputs. It can be used with useEffect.

## 15-cookie-auth

- To learn auth with cookies and middleware.
- JWT token.

## 16-swr-tutorial

- To learn how to useSwr efficiently
- The motivation of swr is grasped.
- data fetched and mutated. Some cases such as isValidating, isLoading, error were handled.
- custom hooks created to manage swr better with axios
- Folder structure might be better. I am aware of it.

## 17-landing-page

- [Design from frontendmentor.io](https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN)
- I practiced responsive design with tailwind.

## 18-pages-folder

- To learn how to use pages folder in the next.js project.
- Also, I tried to set up a folder structure while using swr.

## 19-countries

- [Design from frontendmentor.io](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca)
- to practice redux and swr
- there are two solution to fetch data from the server. One of them is swr and the other is redux.

## 20-apollo-graphql

- A project to learn Hasura, GraphQL, ApolloClient and i18next
- ApolloClient is used to fetch data from the server. It is a powerful tool to manage the data.
- Folder structure
  - services
    - pageName
      - hooks
      - mutations
      - queries
      - types
    - anotherPageName
- For i18next, it should be initialized in the config file. Then, import it in the \_app.js file.
- Then, use useTranslation hook in the components.
  - const { t, i18n } = useTranslation();
  - t("key")
  - <b>t("welcome", { name: "Yunus" })</b> => interpolation is possible with this way.
  - <b>i18n.changeLanguage("tr")</b> => to change the language
  - i18n.language => to get the current language

## 21-material-ui

- To learn how to use material-ui with lamadev/youtube

## 22-redux-crud

- To learn how to use redux with crud operations
- Focus on the redux part of the project and how to manage the states.

## 23-leaflet-map

- I used the leaflet library to show the map on the screen.
- Custom markers and Clusters were used to show the locations in the world.
- libs such as react-leaflet, leaflet, leaflet.markercluster were used.

## 24-file-upload-graphql

- To learn how to upload and download files with graphql
- I converted the file to base64 then stored in the db
- I listed users with the @mui/x-data-grid lib and showed the files in the table.
- In the actions column, I put the download button to download the file.
