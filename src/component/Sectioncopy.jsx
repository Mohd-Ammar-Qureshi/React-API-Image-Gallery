import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const Sectioncopy = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const observerRef = useRef(null);

  // Fetch Images
  const fetchImages = async () => {
    if (loading) return;

    try {
      setLoading(true);

      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=12`
      );

      // Append new images
      setImages((prevImages) => [...prevImages, ...response.data]);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  // Run when page changes
  useEffect(() => {
    fetchImages();
  }, [page]);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];

        if (firstEntry.isIntersecting && !loading) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 1 }
    );

    const currentElement = observerRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [loading]);

  return (
    <div className="w-full min-h-screen bg-gray-200 p-4">
      <div className="flex flex-wrap justify-center">
        {images.map((image) => (
          <div key={image.id} className="m-3">
            <a href={image.url} target="_blank" rel="noreferrer">
              <div className="w-48 h-48 overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
                <img
                  src={image.download_url}
                  alt={image.author}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-center text-gray-700 font-semibold mt-2">
                {image.author}
              </h2>
            </a>
          </div>
        ))}
      </div>

      {loading && (
        <p className="text-center text-gray-600 font-bold text-lg mt-4">Loading...</p>
      )}

      {/* Observer Target */}
      <div ref={observerRef} className="h-10"></div>
    </div>
  );
};

export default Sectioncopy;