import React from "react";
import CarPng from "../../assets/car-with-sanjay.jpg";
import CarPng1 from "../../assets/111.jpg";
import CarPng2 from "../../assets/222.jpg";
import CarPng3 from "../../assets/333.jpg";
import CarPng5 from "../../assets/555.jpg";

const testimonialData = [
  {
    name: "Sabir",
    image: CarPng,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "1000",
  },
  {
    name: "Dilshad",
    image: CarPng5,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "0",
  },
  {
    name: "Satya",
    image: CarPng1,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "300",
  },
  {
    name: "Sabir",
    image: CarPng2,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "1000",
  },
  {
    name: "Sabir",
    image: CarPng3,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "1000",
  },
];
const Testimonial = () => {
  return (
    <>
      <span id="gallery"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
        <div className="container">
          {/* Header */}
          <div className="space-y-4 pb-12">
            <p data-aos="fade-up" className="text-3xl font-semibold text-center sm:text-4xl font-serif" > Gallery</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black dark:text-white">
            {testimonialData.map((skill) => (
              <div
                style={{ padding: '0px' }}
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300 rounded-lg"
              >
                <img
                  src={skill?.image}
                  alt=""
                  className="drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
