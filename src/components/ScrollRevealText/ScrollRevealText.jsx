import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const ScrollRevealText = ({children}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, 
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const elementRef = useRef(null);

  useEffect(() => {
    if (inView) {
      elementRef.current.style.opacity = 1;
      elementRef.current.style.transform = 'translateY(0)';
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <motion.div
        ref={elementRef}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? 'visible' : 'hidden'}
        transition={{ duration: 1 }}
        variants={variants}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollRevealText;
