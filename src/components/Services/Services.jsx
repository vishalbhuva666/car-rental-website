import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import RentImage from "../../assets/Rent.jpg";
import DriverImage from "../../assets/222.jpg";
import RentPDF from "../../assets/adesh _price_ist.pdf";
import { SlNote } from "react-icons/sl";

const skillsData = [
  {
    name: "Best Price",
    icon: (
      <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: RentImage,
    description: "Find The Perfect Car For Your Rent.",
    aosDelay: "0",
    btn: "Check Price List",
  },
  {
    name: "Fast and Safe",
    icon: (
      <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: RentPDF,
    description: "Car Wise Rent.",
    aosDelay: "500",
    btn: "Download PDF",
  },
  {
    name: "Experience Drivers",
    icon: (
      <SlNote className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: DriverImage,
    description: "Driver Information",
    aosDelay: "1000",
    btn: "Driver Image",
  },
];
const Services = () => {
  return (
    <>
      <span id="booking"></span>
      <div className="dark:bg-black dark:text-white py-4 sm:min-h-[400px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-4">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              Why Choose Us
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark  hover:bg-primary duration-300 text-white hover:text-black rounded-lg"
              >
                <div className="grid place-items-center">{skill.icon}</div>
                <h1 className="text-2xl font-bold">{skill.name}</h1>
                <p>{skill.description}</p>
                <a
                  href={skill?.link}
                  download="Rent.jpg"
                  style={{ cursor: 'pointer' }}
                  className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300"
                >
                  {skill?.btn}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;