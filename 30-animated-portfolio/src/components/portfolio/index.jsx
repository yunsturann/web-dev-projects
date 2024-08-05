import "./portfolio.scss";
import { portfolioItems } from "../../constants";
import SingleItem from "./single-item";
import { motion, useScroll, useSpring } from "framer-motion";

const Portfolio = () => {
  const containerRef = useScroll();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["end end", "start start"], // The offset of the target element. The first value is the vertical offset, the second value is the horizontal offset.
  });

  // ** useSpring is a hook that creates a spring animation that follows a spring curve from one value to another.
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100, // The stiffness of the spring. Higher values will create more sudden movement.
    damping: 30, // The damping of the spring. If set to 0, spring will oscillate indefinitely.
  });

  return (
    <div className="portfolio" ref={containerRef}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{ scaleX }} />
        {/* <motion.div  className="progressBar" style={{scaleX:scaleX}} /> */}
      </div>

      {portfolioItems.map((item) => (
        <SingleItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Portfolio;
