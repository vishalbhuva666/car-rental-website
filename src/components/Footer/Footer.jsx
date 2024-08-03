import React from "react";
import { FaFacebook, FaInstagram, FaLocationArrow, FaMobileAlt, } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
      <section className="container">
        <div className=" grid md:grid-cols-3 py-5">
          {/* company Details */}
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif">
              Aadesh Car Rental
            </h1>
            <p className="text-sm">
              Mavadi Chowkdi, 150ft Ring Road Rajkot, Gujrat-360004
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Rajkot, Gujrat</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+91 73830 34600</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>
          {/* Links */}
          <div className="grid md:pl-10 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3703.417199704107!2d71.30178577505542!3d21.84143768001917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39588d541de00f0b%3A0x29afa89113b82710!2sAmardeep%20Mandap%20Service!5e0!3m2!1sen!2sin!4v1722668261756!5m2!1sen!2sin"
              width="800"
              height="275"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
