import MultiPriceRange from "@/app/components/EcommerceTools/PriceRangeBar/MultiPriceRange";
import ProductCard1 from "@/app/components/EcommerceTools/ProductCard/ProductCard1";
import HoverZoomEffect from "@/app/components/EcommerceTools/ProductDetails/HoverZoomEffect";
import ProductDetails from "@/app/components/EcommerceTools/ProductDetails/ProductDetails";
import ProductGrid1 from "@/app/components/EcommerceTools/ProductGrid/ProductGrid1";
import ProductGrid2 from "@/app/components/EcommerceTools/ProductGrid/ProductGrid2";

export default function ECommerceTools() {
  const productImage =
    "https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg";
  const thumbnails = [
    "https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg",
  ];
  const productData = {
    title: "TRIGGR Ultrabuds N1 Neo with ENC, 40Hr Playback, 13mm D...",
    price: 599,
    originalPrice: 2999,
    discount: 80,
    rating: 4,
    reviews: 36707,
    assured: true,
    images: [
      "/productImages/1.jpg",
      "/productImages/2.jpg",
      "/productImages/3.jpg",
    ],
    colors: [
      { name: "Jungle Green", bgColor: "#064e3b" },
      { name: "Black", bgColor: "#000000" },
      { name: "White", bgColor: "#ffffff" },
      { name: "Blue", bgColor: "#1e40af" },
      { name: "Red", bgColor: "#dc2626" },
    ],
  };
  const productData1 = {
    title:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil debitis incidunt magni, ullam recusandae, facilis ut consectetur ratione non rerum vitae ipsa, et repellendus unde est? Placeat quibusdam soluta quae?",
    price: 599,
    originalPrice: 2999,
    discount: 80,
    rating: 4,
    reviews: 36707,
    assured: true,
    images: [
      "/productImages/1.jpg",
      "/productImages/2.jpg",
      "/productImages/3.jpg",
    ],
    colors: [
      { name: "Jungle Green", bgColor: "#064e3b" },
      { name: "Black", bgColor: "#000000" },
      { name: "White", bgColor: "#ffffff" },
      { name: "Blue", bgColor: "#1e40af" },
      { name: "Red", bgColor: "#dc2626" },
      { name: "Jolpai", bgColor: "#485401" },
      { name: "Yellow", bgColor: "#e0ff33" },
      { name: "gray", bgColor: "#c9c9c9" },
    ],
  };
  return (
    <section className="mt-6 space-y-5 mb-16">
      <h1 className="font-bold text-xl text-green-500 container m-auto">
        1. Multi Price Range
      </h1>
      <div className="p-5 border-2 container m-auto">
        <MultiPriceRange />
      </div>

      <h1 className="font-bold text-xl text-green-500 container m-auto">
        2. Product Details
      </h1>
      <div className="p-5 border-2 container m-auto">
        <ProductDetails />
      </div>

      <h1 className="font-bold text-xl text-green-500 container m-auto">
        3. Product Card
      </h1>
      <div className="p-5 border-2 container m-auto">
        <div className="grid grid-cols-3 gap-2">
          <ProductCard1 {...productData} />
          <ProductCard1 {...productData1} />
          <ProductCard1 {...productData} />
        </div>
      </div>

      <h1 className="font-bold text-xl text-green-500 container m-auto">
        4. Product Show Grid
      </h1>
      <div className="p-5 border-2 container m-auto">
        <ProductGrid1 />
      </div>

      <h1 className="font-bold text-xl text-green-500 container m-auto">
        5. Product Show Grid
      </h1>
      <div className="p-5 border-2 container m-auto">
        <ProductGrid2 />
      </div>

      <h1 className="font-bold text-xl text-green-500 container m-auto">
        6. Product Zoom Image
      </h1>
      <div className="p-5 border-2 container m-auto">
        <HoverZoomEffect
          imageSrc={productImage}
          thumbnails={thumbnails}
          zoomSize={5}
          cursorSize={150}
        />
      </div>
    </section>
  );
}
