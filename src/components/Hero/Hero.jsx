import React, { useEffect, useState } from "react";
import carPng from "../../assets/car.png";
import yellowCar from "../../assets/banner-car.png";
import AOS from "aos";

const Hero = ({ theme }) => {
  const today = new Date();
  const formatDate = (date) => {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [inputText, setInputText] = useState("");
  const [inputDate, setInputDate] = useState(formatDate(today));
  const [mobileNumber, setMobileNumber] = useState("");

  useEffect(() => {
    AOS.refresh();
  }, []);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleOk = () => {
    window.location.href = `https://wa.me/9724289021?text=${encodeURIComponent(`Name: ${inputText}\n Date: ${inputDate}\n MobileNumber: ${mobileNumber}`)}`;
    setModalVisible(false);
  };

  const handleCancel = () => {
    setMobileNumber('');
    setInputDate(null);
    setInputText('');
    setModalVisible(false);
  };

  return (
    <div className="dark:bg-black dark:text-white duration-300">
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
          <div className="space-y-5 order-2 sm:order-1 sm:pr-32">
            <p data-aos="fade-up" className="text-primary text-2xl font-serif">
              <span style={{ color: "#EB7D1E", fontSize: "48px" }}>A</span>
              ADESH
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-5xl lg:text-7xl font-semibold font-serif"
            >
              Car Rental
            </h1>
            <p data-aos="fade-up" data-aos-delay="1000">
              Welcome to Aadesh Car Rental. Whether you need a vehicle for
              everyday use or for a family holiday, we have a wide range of
              options to meet your needs.
            </p>
            <p data-aos="fade-up" data-aos-delay="1000">
              Start your Family Holiday or Book a corporate Tour with Aadesh Car
              Rental. We have trained and verified drivers. We sanitize our cars
              daily and on a trip basis. We operate in all major cities of North
              India like Ahmedabad, Surat, Indore, Jaipur, Mumbai, Pune, and more.
              We offer Outstation taxi bookings, One-way Cab hire services, and
              Corporate car rental services in Gujarat, India.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="1500"
              onClick={handleOpenModal}
              className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 sm:mb-2 px-6 text-black"
            >
              Book Car Now
            </button>
            {modalVisible && (
              <div id="myModal" className="modal">
                <div className="modal-content">
                  <span className="close" onClick={handleCloseModal}>
                    &times;
                  </span>
                  <div className="form-group">
                    <label htmlFor="inputText">Enter Your Name</label>
                    <input
                      type="text"
                      id="inputText"
                      placeholder="Enter Your Name"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputDate">Your Mobile No.</label>
                    <input
                      type="no"
                      id="no"
                      placeholder="Enter Mobile No."
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputDate">Choose a date:</label>
                    <input
                      type="date"
                      id="inputDate"
                      value={inputDate}
                      onChange={(e) => setInputDate(e.target.value)}
                    />
                  </div>
                  <div className="button-group">
                    <button onClick={handleCancel}>Cancel</button>
                    <button onClick={handleOk}>OK</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
