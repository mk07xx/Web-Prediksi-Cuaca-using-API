import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <h2>About WeatherApp</h2>
      <div className="about-content">
        <p>
          <strong>WeatherApp</strong> adalah portal cuaca sederhana yang dirancang untuk memberikan informasi cuaca terkini dan prakiraan cuaca selama beberapa hari ke depan.
        </p>
        <p>
          Dengan antarmuka yang sederhana dan responsif, WeatherApp membantu Anda mengetahui suhu, kondisi cuaca, kelembapan, serta kecepatan angin di berbagai kota dengan cepat dan akurat.
        </p>
      </div>
      <div className="about-footer">
        <p>
          <em>WeatherApp - Your reliable weather companion 🌦️</em>
        </p>
      </div>
    </div>
  );
};

export default About;
