import { motion } from "framer-motion";

type PageProps = {
  children: React.ReactNode;
};

type TVariants = {
  initial: {
    x: string;
  };
  animate: {
    x: number;
  };
  exit: {
    x: string;
  };
};

// values for right to left transition
const variants: TVariants = {
  initial: {
    x: "100vw",
  },
  animate: {
    x: 0,
  },
  exit: {
    x: "-100vw",
  },
};

const PageTransition = ({ children }: PageProps) => {
  return (
    <motion.div
      {...variants}
      transition={{ duration: 0.5 }}
      style={{ position: "absolute" }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
