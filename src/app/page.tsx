import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import MusicSchoolTestimonials from "@/components/MusicSchoolTestimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className=" min-h-screen bg-black/[0.96] antialiased ">
        <HeroSection />
        <FeaturedCourses />
        <WhyChooseUs />
        <MusicSchoolTestimonials />
        <UpcomingWebinars />
        <Instructors />
        
      </main>
    </>
  );
}
