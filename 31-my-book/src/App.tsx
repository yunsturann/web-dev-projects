import { Route, Routes } from "react-router-dom";
import Layout from "./components/shared/layout";
import Homepage from "./pages/homepage";
import Blog from "./pages/blog";
import Checkout from "./pages/checkout";
import Shop from "./pages/shop";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="blog" element={<Blog />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="shop" element={<Shop />} />

        <Route path="*" element={<h1>Not Found</h1>} />
      </Route>
    </Routes>
  );
};

export default App;
