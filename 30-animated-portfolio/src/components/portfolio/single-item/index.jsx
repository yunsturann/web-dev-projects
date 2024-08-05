import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const SingleItem = ({ item }) => {
  const imageContainerRef = useRef();

  const { scrollYProgress } = useScroll({
    target: imageContainerRef,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={imageContainerRef}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SingleItem;
