import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function AlertCard({ title, initialCount, icon: Icon, dummyAlerts }) {
  const [count, setCount] = useState(initialCount);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newAlert = dummyAlerts[Math.floor(Math.random() * dummyAlerts.length)];
      setAlerts((prev) => [...prev.slice(-4), newAlert]);
      setCount((prev) => prev + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, [dummyAlerts]);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center w-full max-w-sm mx-auto">
      <div className="flex items-center gap-2 mb-3">
        {Icon && <Icon className="text-red-500 w-6 h-6" />}
        <h2 className="text-lg font-semibold text-center">{title}</h2>
      </div>

      <motion.div
        key={count}
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 0.3 }}
        className="text-3xl font-bold text-red-600 mb-4"
      >
        {count}
      </motion.div>

      <div className="flex flex-col gap-3 w-full">
        {alerts.map((alert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-100 rounded-xl p-3 text-sm text-center shadow-sm"
          >
            {alert}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
