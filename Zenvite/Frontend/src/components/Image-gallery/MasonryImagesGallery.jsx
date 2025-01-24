import React from 'react';
import galleryImages from './galleryImages';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const MasonryImagesGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
      <Masonry gutter="1rem">
        {galleryImages.map((item, index) => (
          <img
            key={index} // Ideally, replace with a unique id if available
            className="masonry__img"
            src={item}
            alt={`Gallery Image ${index + 1}`}
            style={{
              width: '100%',
              display: 'block',
              borderRadius: '10px',
            }}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonryImagesGallery;
