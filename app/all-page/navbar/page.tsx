import Navbar1 from "@/app/components/Navbar/Navbar1";
import Navbar2 from "@/app/components/Navbar/Navbar2";
import Navbar3 from "@/app/components/Navbar/Navbar3";
import Navbar4 from "@/app/components/Navbar/Navbar4";
import Navbar5 from "@/app/components/Navbar/Navbar5";
import Navbar6 from "@/app/components/Navbar/Navbar6";
import Navbar7 from "@/app/components/Navbar/Navbar7";
import Navbar8 from "@/app/components/Navbar/Navbar8";
import Navbar9 from "@/app/components/Navbar/Navbar9";

export default function Navbar() {
  return (
    <section className="mt-6 space-y-5 mb-16">
      <h1 className="font-bold text-xl text-green-500 container m-auto">1.</h1>
      <div className="p-5 border-2 container m-auto">
        <Navbar1 />
      </div>
      <h1 className="font-bold text-xl text-green-500 container m-auto">2.</h1>
      <div className="p-5 border-2 container m-auto">
        <Navbar2 />
      </div>
      <h1 className="font-bold text-xl text-green-500 container m-auto">3.</h1>

      <div className="p-5 border-2 container m-auto">
        <Navbar3 />
      </div>
      <h1 className="font-bold text-xl text-green-500 container m-auto">4.</h1>

      <div className="p-5 border-2 container m-auto">
        <Navbar4 />
      </div>
      <h1 className="font-bold text-xl text-green-500 container m-auto">5.</h1>

      <div className="p-5 border-2 container m-auto">
        <Navbar5 />
      </div>
      <h1 className="font-bold text-xl text-green-500 container m-auto">6.</h1>

      <div className="p-5 border-2 container m-auto">
        <Navbar6 />
      </div>
      <h1 className="font-bold text-xl text-green-500 container m-auto">7.</h1>

      <div className="p-5 border-2 container m-auto">
        <Navbar7 />
      </div>
      <h1 className="font-bold text-xl text-green-500 container m-auto">8.</h1>

      <div className="p-5 border-2 container m-auto">
        <Navbar8 />
      </div>
      <h1 className="font-bold text-xl text-green-500 container m-auto">9.</h1>

      <div className="p-5 border-2 container m-auto">
        <Navbar9 />
      </div>
    </section>
  );
}
