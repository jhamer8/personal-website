import { motion, useAnimation } from "framer-motion";
const useNavItemAnimation = () => {
  return useAnimation();
};
export default function NavItem ({ text, href }: { text: string; href: string }) {
    const controls = useNavItemAnimation();
  
    const motionProps = {
      whileHover: { scale: 1.15 },
      transition: { type: "spring", stiffness: 90 },
    };
  
    const textHoverProps = {
      whileHover: { color: "#E9B24C" },
    };
  
    const underlineVariants = {
      hidden: { width: 0 },
      visible: { width: "100%" },
    };
  
    return (
      <motion.a
        {...motionProps}
        href={href}
        onHoverStart={() => controls.start("visible")}
        onHoverEnd={() => controls.start("hidden")}
      >
        <motion.div className="relative">
          <motion.h1 {...textHoverProps} className="text-white">
            {text}
          </motion.h1>
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-themeOrange"
            variants={underlineVariants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.a>
    );
  };
