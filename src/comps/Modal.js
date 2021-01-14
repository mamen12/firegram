import React from 'react';
import {motion} from 'framer-motion'
const Modal = ({ selectedImage, setSelectedImage }) => {
    
    const handleClick = (e) => {
        setSelectedImage(null)
    };
    return (
    <motion.div className="backdrop" onClick={handleClick}
    initial={{opacity:0}}
    animate={{opacity:1}}
    
    >
      <motion.img src={selectedImage} alt="erlaged pic" 
      initial={{ y: "-100vh", x: 0 }}
      animate={{y: 0, x: "100"}} />
    </motion.div>
  );
};

export default Modal;