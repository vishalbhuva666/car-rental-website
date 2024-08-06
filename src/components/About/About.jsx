import React from "react";
import CarPng from "../../assets/car-with-sanjay.jpg";

const About = () => {
  return (
    <div id='about' className="dark:bg-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
      <div className="container">
        <div style={{ marginTop: '24px' }} className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={CarPng}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-8 pb-4">
              <h1 data-aos="fade-up" style={{ marginTop: '24px' }} className="text-3xl sm:text-4xl font-bold font-serif">About us</h1>
              <p data-aos="fade-up" className="leading-8 tracking-wide">We are a professional rajkot base taxi company</p>
              <p data-aos="fade-up">We are operating in all major cities across India.</p>
              <div className="dark:bg-black text-white dark:text-white py-3">
                <div className="grid grid-cols-1 sm:grid-cols-6 md:grid-cols-2 gap-4">
                  {/* first col */}
                  <div className="bg-dark/50 p-4 grid place-items-center">
                    <div className="text-center space-y-3">
                      <h1 className="text-5xl font-bold">12</h1>
                      <p className="text-xl font-semibold">Years Experience</p>
                    </div>
                  </div>
                  <div className="text-center p-6 bg-dark">
                    <h1 className="text-3xl font-bold">60+</h1>
                    <p>Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
