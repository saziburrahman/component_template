"use client";
import { ChangeEvent, MouseEvent, useState } from "react";

export default function MultiPriceRange() {
  // price
  const priceOptions: number[] = [
    50, 500, 5000, 20000, 35000, 50000, 100000, 200000, 1000000,
  ];

  const [minPrice, setMinPrice] = useState<number>(priceOptions[0]);
  const [maxPrice, setMaxPrice] = useState<number>(
    priceOptions[priceOptions.length - 1]
  );
  // const [hoverValue, setHoverValue] = useState<number | null>(null);
  const [priceRange, setPriceRange] = useState<{ min?: number; max?: number }>({
    min: undefined,
    max: undefined,
  });

  const leftPos =
    (priceOptions.indexOf(minPrice) / (priceOptions.length - 1)) * 100;
  const rightPos =
    (priceOptions.indexOf(maxPrice) / (priceOptions.length - 1)) * 100;

  const handleMinChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newMinVal = Number(e.target.value);
    const maxIndex = priceOptions.indexOf(maxPrice);
    const newMinIndex = priceOptions.indexOf(newMinVal);

    if (newMinIndex < maxIndex) {
      setMinPrice(newMinVal);
      setPriceRange({ min: newMinVal, max: maxPrice });
    }
  };

  const handleMaxChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newMaxVal = Number(e.target.value);
    const minIndex = priceOptions.indexOf(minPrice);
    const newMaxIndex = priceOptions.indexOf(newMaxVal);

    if (newMaxIndex > minIndex) {
      setMaxPrice(newMaxVal);
      setPriceRange({ min: minPrice, max: newMaxVal });
    }
  };

  const handleRangeChange = (
    e: ChangeEvent<HTMLInputElement>,
    isMin: boolean
  ) => {
    const index = parseInt(e.target.value);
    const selectedPrice = priceOptions[index];

    if (isMin) {
      const maxIndex = priceOptions.indexOf(maxPrice);
      if (index < maxIndex) {
        setMinPrice(selectedPrice);
        setPriceRange({ min: selectedPrice, max: maxPrice });
      }
    } else {
      const minIndex = priceOptions.indexOf(minPrice);
      if (index > minIndex) {
        setMaxPrice(selectedPrice);
        setPriceRange({ min: minPrice, max: selectedPrice });
      }
    }
  };

  // const handleTrackHover = (e: MouseEvent<HTMLDivElement>) => {
  //   const trackWidth = e.currentTarget.offsetWidth;
  //   const hoverPosition =
  //     e.clientX - e.currentTarget.getBoundingClientRect().left;
  //   const segmentWidth = trackWidth / (priceOptions.length - 1);
  //   const hoverSegment = Math.round(hoverPosition / segmentWidth);
  //   setHoverValue(
  //     priceOptions[Math.min(Math.max(0, hoverSegment), priceOptions.length - 1)]
  //   );
  // };

  const handleTrackClick = (e: MouseEvent<HTMLDivElement>) => {
    const trackWidth = e.currentTarget.offsetWidth;
    const clickPosition =
      e.clientX - e.currentTarget.getBoundingClientRect().left;
    const segmentWidth = trackWidth / (priceOptions.length - 1);
    const clickedSegment = Math.round(clickPosition / segmentWidth);
    const closestValue =
      priceOptions[
        Math.min(Math.max(0, clickedSegment), priceOptions.length - 1)
      ];

    const minDistance = Math.abs(clickPosition - (leftPos / 100) * trackWidth);
    const maxDistance = Math.abs(clickPosition - (rightPos / 100) * trackWidth);

    if (minDistance < maxDistance) {
      const maxIndex = priceOptions.indexOf(maxPrice);
      const newMinIndex = priceOptions.indexOf(closestValue);
      if (newMinIndex < maxIndex) {
        setMinPrice(closestValue);
        setPriceRange({ min: closestValue, max: maxPrice });
      }
    } else {
      const minIndex = priceOptions.indexOf(minPrice);
      const newMaxIndex = priceOptions.indexOf(closestValue);
      if (newMaxIndex > minIndex) {
        setMaxPrice(closestValue);
        setPriceRange({ min: minPrice, max: closestValue });
      }
    }
  };
  return (
    <section>
      {/* price */}
      <div className="flex flex-col p-4 bg-accent-0 rounded-sm shadow-sm mt-2">
        <div className="text-green-500 uppercase mb-2">
          <span className="font-serif text-md font-bold mr-2">&#2547;</span>
          Price
        </div>
        <hr />

        <div className="mt-6 px-4">
          <div
            className="relative mb-8 cursor-pointer"
            // onMouseMove={handleTrackHover}
            // onMouseLeave={() => setHoverValue(null)}
            onClick={handleTrackClick}
          >
            <div className="absolute w-full h-6 -top-2">
              {priceOptions.map((price, index) => (
                <div
                  key={price}
                  className="absolute w-1 h-3 bg-gray-300"
                  style={{
                    left: `${(index / (priceOptions.length - 1)) * 100}%`,
                    transform: "translateX(-50%)",
                  }}
                />
              ))}
            </div>

            <div className="absolute w-full -bottom-6 text-xs text-gray-500 mb-5">
              {priceOptions.map((price, index) => (
                <div
                  key={price}
                  className="absolute transform -translate-x-1/2 font-serif"
                  style={{
                    left: `${(index / (priceOptions.length - 1)) * 100}%`,
                  }}
                >
                  &#2547;{price}
                </div>
              ))}
            </div>

            <div className="relative h-2">
              <div className="absolute w-full h-2 bg-gray-300 rounded-full" />
              <div
                className="absolute h-2 bg-green-500 rounded-full"
                style={{
                  left: `${leftPos}%`,
                  right: `${100 - rightPos}%`,
                }}
              />

              <input
                type="range"
                min={0}
                max={priceOptions.length - 1}
                value={priceOptions.indexOf(minPrice)}
                onChange={(e) => handleRangeChange(e, true)}
                className="range-slider range-slider-min"
              />
              <input
                type="range"
                min={0}
                max={priceOptions.length - 1}
                value={priceOptions.indexOf(maxPrice)}
                onChange={(e) => handleRangeChange(e, false)}
                className="range-slider range-slider-max"
              />
            </div>

            <style>{`
    .range-slider {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      -webkit-appearance: none;
      pointer-events: none;
      background: transparent;
      z-index: 1;
    }

    .range-slider-min {
      z-index: 2;
    }

    .range-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      pointer-events: auto;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: white;
      border: 2px solid green;
      cursor: pointer;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .range-slider::-webkit-slider-runnable-track {
      -webkit-appearance: none;
      appearance: none;
      background: transparent;
      border: none;
    }

    .range-slider:focus {
      outline: none;
    }
  `}</style>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex-1 max-w-[120px]">
              <label htmlFor="min-price" className="text-sm text-gray-500">
                Min(<span className="font-serif">&#2547;</span>)
              </label>
              <select
                id="min-price"
                value={minPrice}
                onChange={handleMinChange}
                className="w-full px-3 py-2 border rounded-md"
              >
                {priceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1 max-w-[120px]">
              <label htmlFor="max-price" className="text-sm text-gray-500">
                Max(<span className="font-serif">&#2547;</span>)
              </label>
              <select
                id="max-price"
                value={maxPrice}
                onChange={handleMaxChange}
                className="w-full px-3 py-2 border rounded-md"
              >
                {priceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
