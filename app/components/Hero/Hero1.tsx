"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const slides = [
  {
    imageUrl:
      "https://staging-qcoom-user.s3-ap-southeast-1.amazonaws.com/static_image/2025-01-13T11:33:16.627_a4708fbf52fe72bd.webp",
  },
  {
    imageUrl:
      "https://staging-qcoom-user.s3-ap-southeast-1.amazonaws.com/static_image/2025-01-13T11:34:11.937_53dcf24ecc20bf27.webp",
  },
  {
    imageUrl:
      "https://staging-qcoom-user.s3-ap-southeast-1.amazonaws.com/static_image/2025-01-13T11:34:11.941_d9290fb51138d286.webp",
  },
  {
    imageUrl:
      "https://staging-qcoom-user.s3-ap-southeast-1.amazonaws.com/static_image/2025-01-13T11:34:11.960_7f3cde58a30f6024.webp",
  },
];

export default function Hero1() {
  return (
    <div className="relative w-full mb-8 bg-white">
      <style jsx global>{`
        .hero-slider .swiper-button-next,
        .hero-slider .swiper-button-prev {
          width: 42px !important;
          height: 90px !important;
          background: white !important;
          color: #666 !important;
          margin-top: -50px !important;
          z-index: 20 !important;
        }

        .hero-slider .swiper-button-prev {
          border-radius: 0 4px 4px 0 !important;
          left: 0 !important;
        }

        .hero-slider .swiper-button-next {
          border-radius: 4px 0 0 4px !important;
          right: 0 !important;
        }

        .hero-slider .swiper-button-next::after,
        .hero-slider .swiper-button-prev::after {
          font-size: 18px !important;
          font-weight: bold !important;
        }

        .hero-slider .swiper-pagination {
          position: absolute !important;
          bottom: 10px !important;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          width: 100% !important;
          gap: 6px !important;
        }

        .hero-slider .swiper-pagination-bullet {
          width: 15px !important;
          height: 4px !important;
          background: #e5e4e2 !important;
          border-radius: 2px !important;
          opacity: 1 !important;
          position: relative !important;
          margin: 0 !important;
          padding: 0 !important;
          overflow: hidden !important;
          transition: all 0.3s ease !important;
        }

        .hero-slider .swiper-pagination-bullet::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 0%;
          height: 100%;
          background: black;
          transform-origin: left;
        }

        .hero-slider .swiper-pagination-bullet.swiper-pagination-bullet-active {
          border-color: black !important;
          width: 60px !important;
          transition: width 0.3s ease !important;
        }

        .hero-slider
          .swiper-pagination-bullet.swiper-pagination-bullet-active::before {
          animation: progressiveFill 3.5s linear forwards;
        }

        @keyframes progressiveFill {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3500,
        }}
        loop={true}
        speed={800}
        className="w-full h-[280px] hero-slider"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[260px]">
              <Image
                src={slide.imageUrl}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="absolute inset-0"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
