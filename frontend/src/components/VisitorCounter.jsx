import React, { useEffect, useState } from "react";
import db from "../firebase";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment,
} from "firebase/firestore";
import { motion } from "framer-motion";
import { FaEye } from "react-icons/fa";

const VisitorCounter = () => {
  const [count, setCount] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchAndIncrement = async () => {
      try {
        const hasVisited = sessionStorage.getItem("hasVisited");
        const ref = doc(db, "counters", "resume-visits");

        if (!hasVisited) {
          const snapshot = await getDoc(ref);
          if (snapshot.exists()) {
            await updateDoc(ref, { value: increment(1) });
          } else {
            await setDoc(ref, { value: 1 });
          }
          sessionStorage.setItem("hasVisited", "true");
        }

        const snapshot = await getDoc(ref);
        if (snapshot.exists()) {
          setCount(snapshot.data().value);
        } else {
          setCount(1);
        }
      } catch (err) {
        console.warn("Visitor counter failed:", err);
        setError(true);
      }
    };

    fetchAndIncrement();
  }, []);

  if (count === null && !error) return null;

  return (
    <div className="flex justify-center bg-slate-50 dark:bg-black py-8 border-t border-slate-200 dark:border-zinc-900/60 transition-colors duration-400">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-3 bg-white/90 dark:bg-zinc-950/80 border border-green-500/30 text-slate-700 dark:text-zinc-300 px-6 py-3 rounded-full text-xs font-mono shadow-md dark:shadow-[0_0_20px_rgba(34,197,94,0.15)] hover:border-green-500/50 hover:shadow-[0_0_25px_rgba(34,197,94,0.25)] transition-all duration-300"
      >
        <div className="relative">
          <FaEye className="text-green-500 dark:text-green-400 text-sm" />
          <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-green-400 animate-ping" />
        </div>
        <span className="text-zinc-500 dark:text-zinc-400">Portfolio Visitors:</span>
        <span className="text-green-600 dark:text-green-400 font-bold font-mono tracking-wider text-sm">
          {error ? "—" : count?.toLocaleString()}
        </span>
      </motion.div>
    </div>
  );
};

export default VisitorCounter;
