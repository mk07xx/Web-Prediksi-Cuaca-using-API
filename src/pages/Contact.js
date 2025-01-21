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
          <div className="contact-buttons">
            <a href="https://wa.me/62895397889665" target="_blank" rel="noopener noreferrer">
              <button>WhatsApp</button>
            </a>
            <a href="mailto:mikaelteubun@gmail.com">
              <button>Email</button>
            </a>
            <a href="https://www.google.com/maps/search/?api=1&query=RE.+Martadinata,+Tanjung+Priok,+Jakarta+Utara" target="_blank" rel="noopener noreferrer">
              <button>Lokasi</button>
            </a>
          </div>
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
