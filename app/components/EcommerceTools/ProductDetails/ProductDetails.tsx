import HoverZoomEffect from "./HoverZoomEffect";

export default function ProductDetails() {
  const productImage =
    "https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg";
  const thumbnails = [
    "https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg",
  ];
  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Image */}
          <div className="md:w-1/2">
            <div className="h-[500px] rounded-lg overflow-hidden shadow-lg bg-gray-300 dark:bg-gray-700">
              <HoverZoomEffect
                imageSrc={productImage}
                thumbnails={thumbnails}
                zoomSize={5}
                cursorSize={150}
              />
              {/* <img
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg"
                alt="Product Image"
              /> */}
            </div>
          </div>

          {/* Product Details */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Product Name
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              ante justo. Integer euismod libero id mauris malesuada tincidunt.
            </p>

            {/* Price & Availability */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-lg font-semibold text-gray-800 dark:text-gray-300">
                  Price:
                </span>{" "}
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  $29.99
                </span>
              </div>
              <div>
                <span className="text-lg font-semibold text-gray-800 dark:text-gray-300">
                  Availability:
                </span>{" "}
                <span className="text-green-600 dark:text-green-400 font-bold">
                  In Stock
                </span>
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <span className="block font-semibold text-gray-800 dark:text-gray-300 mb-2">
                Select Color:
              </span>
              <div className="flex space-x-3">
                <button className="w-8 h-8 rounded-full bg-gray-800 hover:scale-110 transition-transform dark:bg-gray-200" />
                <button className="w-8 h-8 rounded-full bg-red-500 hover:scale-110 transition-transform dark:bg-red-700" />
                <button className="w-8 h-8 rounded-full bg-blue-500 hover:scale-110 transition-transform dark:bg-blue-700" />
                <button className="w-8 h-8 rounded-full bg-yellow-500 hover:scale-110 transition-transform dark:bg-yellow-700" />
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <span className="block font-semibold text-gray-800 dark:text-gray-300 mb-2">
                Select Size:
              </span>
              <div className="flex space-x-3">
                {["S", "M", "L", "XL", "XXL"].map((size) => (
                  <button
                    key={size}
                    className="px-4 py-2 rounded-full bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white font-semibold hover:bg-gray-400 dark:hover:bg-gray-600 transition"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <span className="block font-semibold text-gray-800 dark:text-gray-300 mb-2">
                Product Description:
              </span>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                ante justo. Integer euismod libero id mauris malesuada
                tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet. Duis
                dapibus augue vel ipsum pretium, et venenatis sem blandit.
                Quisque ut erat vitae nisi ultrices placerat non eget velit.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex space-x-4">
              <button className="flex-1 py-3 bg-blue-600 text-white rounded-lg shadow-lg font-bold text-lg hover:bg-blue-700 transition">
                Add to Cart
              </button>
              <button className="flex-1 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg shadow-lg font-bold text-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
