"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";

const Feature = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "ABOUT US",
              subtitle: "Just a few words about us",
              description: `Super Enterprises in Secunderabad City, Secunderabad, Hyderabad is known to satisfactorily cater to the demands of its customer base. The business came into existence in 1989 and has, since then, been a known name in its field. It stands located at Door No 4-4-33, Hill Street, Opposite Lane to Mahakali Temple, Mahakali Street, Ranigunj, Secunderabad City-500003.
              Opposite Lane to Mahakali Temple is a prominent landmark in the area and this establishment is in close proximity to the same. It has earned 60 reviews and aspires to develop a loyal customer base. It has earned stamps like Jd Verified, Jd Trusted, Jd Escrow substantiating the credentials of the business.The business strives to make for a positive experience through its offerings. The accepted modes of payment such as Cash, JD Pay, BHIM, UPI, G Pay, PhonePe make every business transaction easy and seamless, contributing to making the entire process even more effective.`,
            }}
          />
          {/* <!-- Section Title End --> */}

          {/* <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5"> */}
            {/* <!-- Features item Start --> */}

            {/* {featuresData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))} */}
            {/* <!-- Features item End --> */}
          {/* </div> */}
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
