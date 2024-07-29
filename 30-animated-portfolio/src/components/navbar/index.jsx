import Sidebar from "../sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

// ** Variants
const socialVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
    },
  },
  hidden: {
    opacity: 0,
    scale: 0.5,
    y: -50,
  },
};

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />

      {/* Navbar */}
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5, y: -50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Yunus Dev
        </motion.span>
        <motion.div
          className="social"
          initial="hidden"
          animate="visible"
          variants={socialVariants}
        >
          <motion.a href="#" variants={socialVariants}>
            <img src="/facebook.png" alt="Facebook logo" />
          </motion.a>
          <motion.a href="#" variants={socialVariants}>
            <img src="/instagram.png" alt="Instagram logo" />
          </motion.a>
          <motion.a href="#" variants={socialVariants}>
            <img src="/youtube.png" alt="YouTube logo" />
          </motion.a>
          <motion.a href="#" variants={socialVariants}>
            <img src="/dribbble.png" alt="Dribbble logo" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
