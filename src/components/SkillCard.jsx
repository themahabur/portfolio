import { Icon } from "@iconify/react";
import { motion } from "motion/react";

const SkillCard = ({ name, src }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="group relative transition duration-300"
    >
      <div className="relative">
        {/* Glowing background on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl scale-105" />

        {/* Main card */}
        <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl border border-gray-200/60 dark:border-gray-700/60 group-hover:border-gray-300/80 dark:group-hover:border-gray-600/80 transition-all duration-300 shadow-lg group-hover:shadow-2xl group-hover:shadow-black/5 dark:group-hover:shadow-black/40 overflow-hidden">
          {/* Top border gradient */}
          <div className="relative h-0.5 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Animated dots */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
            <div className="absolute top-4 right-4 w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse" />
            <div className="absolute top-8 left-6 w-0.5 h-0.5 bg-gray-400 dark:bg-gray-500 rounded-full animate-pulse delay-1000" />
            <div className="absolute bottom-6 right-8 w-0.5 h-0.5 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse delay-2000" />
          </div>

          {/* Card content */}
          <div className="p-4 relative">
            {/* Icon */}
            <div className="flex justify-center mb-3">
              <div className="relative group/icon">
                <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-3 rounded-xl border border-gray-200/50 dark:border-gray-600/50 group-hover:border-gray-300/70 dark:group-hover:border-gray-500/70 transition-all duration-300">
                  <Icon
                    icon={src}
                    width="36"
                    height="36"
                    className="group-hover/icon:scale-110 group-hover/icon:rotate-3 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>
              </div>
            </div>

            <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 text-center mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors tracking-tight">
              {name}
            </h3>

            <div className="flex justify-center mb-2">
              <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold border bg-gradient-to-r from-emerald-500/10 to-teal-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800 transition-all duration-300">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 mr-1.5" />
              </span>
            </div>
          </div>

          {/* Pattern background */}
          <div
            className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, currentcolor 1px, transparent 0px)",
              backgroundSize: "20px 20px",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
