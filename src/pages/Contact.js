import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <div className="contact-content">
        <p>
          Jika Anda memiliki pertanyaan atau membutuhkan bantuan, jangan ragu untuk menghubungi kami!
        </p>
        <div className="contact-info">
          <h3>Informasi Kontak</h3>
          <ul>
            <li><strong>Phone:</strong> 0895397889665</li>
            <li><strong>Email:</strong> mikaelteubun@gmail.com</li>
            <li><strong>Address:</strong> RE. Martadinata, Tanjung Priok, Jakarta Utara</li>
          </ul>
        </div>
      </div>
      <div className="contact-footer">
        <p>
          <em>WeatherApp - Kami selalu siap membantu Anda ☀️</em>
        </p>
      </div>
    </div>
  );
};

export default Contact;
