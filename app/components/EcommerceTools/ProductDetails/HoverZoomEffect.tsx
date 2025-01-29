"use client";
import React, { useState } from "react";

interface ProductImageZoomProps {
  imageSrc: string;
  zoomSize?: number;
  cursorSize?: number;
  thumbnails?: string[];
}

const HoverZoomEffect: React.FC<ProductImageZoomProps> = ({
  imageSrc,
  zoomSize = 3,
  cursorSize = 32,
  thumbnails = [],
}) => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [showZoom, setShowZoom] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPosition({
      x: Math.min(Math.max(x, 0), 100),
      y: Math.min(Math.max(y, 0), 100),
    });
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto p-4">
      {/* Main product image container */}
      <div className="relative w-full aspect-square">
        <div
          className="relative w-full h-full overflow-hidden rounded-lg bg-gray-100"
          onMouseEnter={() => setShowZoom(true)}
          onMouseLeave={() => setShowZoom(false)}
          onMouseMove={handleMouseMove}
          style={{
            cursor: showZoom ? "none" : "default",
          }}
        >
          {/* Main product image */}
          <img
            src={imageSrc}
            alt="Product"
            className="w-full h-full object-cover"
          />

          {/* Custom cursor */}
          {showZoom && (
            <div
              className="absolute pointer-events-none"
              style={{
                width: `${cursorSize}px`,
                height: `${cursorSize}px`,
                left: `${position.x}%`,
                top: `${position.y}%`,
                transform: "translate(-50%, -50%)",
                background: "#E6F7EB",
                backgroundImage: `url('/dotted_pattern_spread_out.png')`,
                border: "2px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "10%",
                opacity: "50%",
                // backdropFilter: "blur(2px)",
              }}
            />
          )}
        </div>
      </div>

      {/* Zoomed view container */}
      <div className="hidden md:block relative w-full aspect-square">
        {showZoom && (
          <div className="absolute inset-0 rounded-lg overflow-hidden bg-gray-100">
            <div
              className="absolute w-full h-full"
              style={{
                backgroundImage: `url('${imageSrc}')`,
                backgroundPosition: `${position.x}% ${position.y}%`,
                backgroundSize: `${zoomSize * 100}%`, // Use zoomSize to control magnification
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>
        )}
      </div>

      {/* Product thumbnails */}
      {thumbnails.length > 0 && (
        <div className="flex gap-2 mt-4">
          {thumbnails.map((thumb, i) => (
            <button
              key={i}
              className="w-16 h-16 rounded-lg overflow-hidden border-2 border-gray-200 hover:border-blue-500 transition-colors"
            >
              <img
                src={thumb}
                alt={`Product thumbnail ${i}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default HoverZoomEffect;
