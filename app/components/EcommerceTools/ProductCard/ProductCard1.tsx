"use client";
import { useState } from "react";
import { CiHeart, CiStar } from "react-icons/ci";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface ProductColor {
  name: string;
  bgColor: string;
}

interface ProductCardProps {
  title: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  assured: boolean;
  colors: ProductColor[];
  images: string[];
}

export default function ProductCard({
  title,
  price,
  originalPrice,
  discount,
  rating,
  reviews,
  assured,
  colors,
  images,
}: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);

  const handleMouseEnter = () => {
    if (swiperRef && swiperRef.autoplay) {
      swiperRef.autoplay.start();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef && swiperRef.autoplay) {
      swiperRef.autoplay.stop();
      // Return to first slide when hover ends
      swiperRef.slideTo(0, 300); // 300ms transition duration
    }
  };

  // Custom styles for pagination
  const paginationStyles = `
    .swiper-pagination {
      top: 10px !important;
      left: 10px !important;
      bottom: auto !important;
      width: auto !important;
    }
    .swiper-pagination-bullet {
      width: 6px;
      height: 6px;
      background: rgba(255, 255, 255, 0.9);
      opacity: 0.6;
    }
    .swiper-pagination-bullet-active {
      background: #ffffff;
      opacity: 1;
    }
  `;

  return (
    <div
      className="w-full max-w-xs bg-white rounded-lg shadow-sm p-4 hover:shadow-lg transition-shadow duration-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Custom Pagination Styles */}
      <style>{paginationStyles}</style>

      {/* Product Image Slider Container */}
      <div className="relative">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          slidesPerView={1}
          onSwiper={setSwiperRef}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            stopOnLastSlide: false,
            pauseOnMouseEnter: false,
          }}
          loop={true}
          className="w-full h-48 group"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`${title} - View ${index + 1}`}
                className="w-full h-48 object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-2 right-2 p-1 z-10 bg-white/50 rounded-full"
        >
          <CiHeart
            className={`w-5 h-5 ${
              isWishlisted ? "fill-red-500 text-red-500" : "text-gray-400"
            }`}
          />
        </button>
      </div>

      {/* Sponsored Tag */}
      <div className="text-xs text-gray-500 mb-2 mt-4">Sponsored</div>

      {/* Product Title */}
      <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2">
        {title}
      </h3>

      {/* Rating and Reviews */}
      <div className="flex items-center gap-2 mb-2">
        <div className="flex items-center gap-1 bg-green-700 text-white px-2 py-0.5 rounded text-sm">
          <span>{rating}</span>
          <CiStar className="w-3 h-3 fill-white" />
        </div>
        <span className="text-gray-500 text-sm">
          ({reviews.toLocaleString()})
        </span>
        {assured && (
          <img
            src="/api/placeholder/20/20"
            alt="Assured"
            className="h-4 object-contain"
          />
        )}
      </div>

      {/* Price Information */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-lg font-semibold">₹{price.toLocaleString()}</span>
        <span className="text-gray-500 line-through text-sm">
          ₹{originalPrice.toLocaleString()}
        </span>
        <span className="text-green-600 text-sm">{discount}% off</span>
      </div>

      {/* Bank Offer */}
      <div className="text-green-600 text-sm mb-3">Bank Offer</div>

      {/* Color Variants */}
      <div className="mt-4">
        <Swiper slidesPerView={5} spaceBetween={8} className="w-full">
          {colors.map((color, index) => (
            <SwiperSlide key={index}>
              <button
                className={`w-8 h-8 rounded-full border-2 border-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-gray-500`}
                style={{ backgroundColor: color.bgColor }}
                title={color.name}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Compare Checkbox */}
      <div className="flex items-center gap-2 mt-4">
        <input
          type="checkbox"
          id="compare"
          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
        <label htmlFor="compare" className="text-sm text-gray-600">
          Add to Compare
        </label>
      </div>
    </div>
  );
}
