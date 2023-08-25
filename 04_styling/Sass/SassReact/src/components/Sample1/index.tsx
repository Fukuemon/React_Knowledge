import React from "react";
import "../style.css";
import { motion } from "framer-motion";

export const Sample1 = () => {
  return (
    <div className="container">
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 1 }}>
        <div className="rect"></div>
      </motion.div>
      <motion.div animate={{ x: [null, 100, 0] }} />
    </div>
  );
};
