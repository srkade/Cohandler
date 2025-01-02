import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const PhotoGallery = () => {
  const images = [
    { src: "/images/hero1.jpg", alt: "Workspace 1" },
    { src: "/images/hero2.jpg", alt: "Workspace 2" },
    { src: "/images/hero3.jpg", alt: "Workspace 3" },
    { src: "/images/hero4.jpg", alt: "Workspace 4" },
  ];

  return (
    <div className="py-12 bg-gradient-to-r from-purple-50 to-purple-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-purple-600 mb-6">Workspace Photo Gallery</h2>
        <PhotoProvider>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <PhotoView key={index} src={image.src}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-56 object-cover rounded-lg shadow-lg cursor-pointer"
                />
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
      </div>
    </div>
  );
};

export default PhotoGallery;
