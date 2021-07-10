import React from 'react';
import { motion } from 'framer-motion';

const ImageGrid = ({ images, setSelectedImages}) => {
  

  return (
    <div className="img-grid">
      {images.map((img,index) => (
        <motion.div className="img-wrap" key={index} 
          layout
          whileHover={{ opacity: 1 }}s
          onClick={() => setSelectedImages(img.image)}
        >
          <motion.img src={img.image} alt={img.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />
        </motion.div>
      ))}
    </div>
  )
}

export default ImageGrid;