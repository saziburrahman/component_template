import Hero1 from "@/app/components/Hero/Hero1";
import Hero10 from "@/app/components/Hero/Hero10";
import Hero11 from "@/app/components/Hero/Hero11";
import Hero12 from "@/app/components/Hero/Hero12";
import Hero13 from "@/app/components/Hero/Hero13";
import Hero14 from "@/app/components/Hero/Hero14";
import Hero15 from "@/app/components/Hero/Hero15";
import Hero16 from "@/app/components/Hero/Hero16";
import Hero2 from "@/app/components/Hero/Hero2";
import Hero3 from "@/app/components/Hero/Hero3";
import Hero4 from "@/app/components/Hero/Hero4";
import Hero5 from "@/app/components/Hero/Hero5";
import Hero6 from "@/app/components/Hero/Hero6";
import Hero7 from "@/app/components/Hero/Hero7";
import Hero8 from "@/app/components/Hero/Hero8";
import Hero9 from "@/app/components/Hero/Hero9";

const heroComponents = [
  { component: <Hero1 />, title: "1. Flipcart hero section" },
  { component: <Hero2 />, title: "2. Visual image with heading Hero Section" },
  { component: <Hero3 />, title: "3. Hero Section with navbar" },
  { component: <Hero4 />, title: "4. Plant Hero Section" },
  { component: <Hero5 />, title: "5. Full Image Hero Section" },
  { component: <Hero6 />, title: "6. Video Background Hero Section" },
  { component: <Hero7 />, title: "7. Video Background Hero Section" },
  { component: <Hero8 />, title: "8. Hero Section with Youtube Video" },
  { component: <Hero9 />, title: "9. Hero Section with Search Input" },
  { component: <Hero10 />, title: "10. Hero Section for business company" },
  { component: <Hero11 />, title: "11. Hero Section Typical sass" },
  { component: <Hero12 />, title: "12. Hero Section with Input search" },
  { component: <Hero13 />, title: "13. Hero Section with Product image" },
  { component: <Hero14 />, title: "14. Hero Section for Resume/Portfolio" },
  { component: <Hero15 />, title: "14. Hero Section for Yoga" },
  { component: <Hero16 />, title: "16. Default hero section" },
];

export default function Hero() {
  return (
    <section className="mt-6 space-y-5 mb-16">
      {heroComponents.map(({ component, title }, index) => (
        <div key={index}>
          <h1 className="font-bold text-xl text-green-500 container m-auto p-2 flex items-center">
            {title}
          </h1>
          <div className="p-5 border-2 container m-auto">{component}</div>
        </div>
      ))}
    </section>
  );
}
