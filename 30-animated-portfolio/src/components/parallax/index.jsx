import "./parallax.scss";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const onServices = type === "services";

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background: onServices
          ? "linear-gradient(180deg, #111132, #0c0c1d)"
          : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {onServices ? "What We Do?" : "What We Did?"}
      </motion.h1>

      <motion.div className="mountains" />
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${onServices ? "/planets.png" : "/sun.png "})`,
        }}
      />
      <motion.div className="stars" style={{ x: yBg }} />
    </div>
  );
};

export default Parallax;
