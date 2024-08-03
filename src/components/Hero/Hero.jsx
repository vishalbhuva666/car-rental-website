import React, { useEffect, useState } from "react";
import carPng from "../../assets/car.png";
import yellowCar from "../../assets/banner-car.png";
import AOS from "aos";

const Hero = ({ theme }) => {
  useEffect(() => {
    AOS.refresh();
  });
  return (
    <div className="dark:bg-black dark:text-white duration-300 ">
      <div className="container min-h-[620px] flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="false"
            className="order-1 sm:order-2"
          >
            <img
              src={theme === "dark" ? carPng : yellowCar}
              alt=""
              className="sm:scale-125 relative -z-10 max-h-[600px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div className="space-y-5 order-2 sm:order-1 sm:pr-32 ">
            <p data-aos="fade-up" className="text-primary text-2xl font-serif">
              <span style={{ color: '#EB7D1E', fontSize: '48px' }}>A</span>ADESH
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-5xl lg:text-7xl font-semibold font-serif"
            >
              Car Rental
            </h1>
            <p data-aos="fade-up" data-aos-delay="1000">
              Welcome to Aadesh Car Rental simply need a vehicle for everyday use, we have a wide range of options to meet your needs.
            </p>
            <p data-aos="fade-up" data-aos-delay="1000">
              Start your Family Holiday or Book corporate Tour with Aadesh Car Rental.
              We have trained and verified drivers.
              We are doing daily and trip basis cleaning of cars with proper sanitization.
              We are working with all major cities of north India like Ahmedabad, Surat, Indor, Jaipur, Mumbai, Pune, and more.
              We offer Outstation taxi bookings services, One way Cab hire services, and Corporate car rental services In Gujarat, India            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="1500"
              onClick={() => {
                AOS.refreshHard();
              }}
              className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black"
            >
              Book Car Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
