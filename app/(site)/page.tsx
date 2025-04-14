import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Super Enterprises | Home",

  // other metadata
  description: "Super Enterprises in Secunderabad City, Secunderabad, Hyderabad is known to satisfactorily cater to the demands of its customer base. The business came into existence in 1989 and has, since then, been a known name in its field. It stands located at Door No 4-4-33, Hill Street, Opposite Lane to Mahakali Temple, Mahakali Street, Ranigunj, Secunderabad City-500003. Opposite Lane to Mahakali Temple is a prominent landmark in the area and this establishment is in close proximity to the same. It has earned 60 reviews and aspires to develop a loyal customer base. It has earned stamps like Jd Verified, Jd Trusted, Jd Escrow substantiating the credentials of the business.The business strives to make for a positive experience through its offerings. The accepted modes of payment such as Cash, JD Pay, BHIM, UPI, G Pay, PhonePe make every business transaction easy and seamless, contributing to making the entire process even more effective."
};

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Brands /> */}
      <Feature />
      <About />
      {/* <FeaturesTab /> */}
      <Blog />
      <FunFact />
      {/* <Integration /> */}
      <CTA />
      {/* <FAQ /> */}
      {/* <Testimonial /> */}
      {/* <Pricing /> */}
      <Contact />
    </main>
  );
}
