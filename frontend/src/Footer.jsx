import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Footer.module.css";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <>
      <div className={`text-white ${styles["container"]}`}>
        <footer class="row">
          <div class={`col-3 mb-3 ${styles["address"]}`}>
            <img src="/images/logo-white.png" />
            <p className="text-secondary">
              <IoCall size={18} /> +91-8826273838, +91-8102450507
            </p>
            <p className="text-secondary">
              <MdEmail size={20} /> Info@mbispata.org
            </p>
          </div>

          <div class="col-2 mb-3 item ">
            <h5>Quick Links</h5>
            <hr></hr>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-secondary">
                  Mandatory Disclosure
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-secondary">
                  Career
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-secondary">
                  Privacy Policy
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-secondary">
                  Unique Activities
                </a>
              </li>
            </ul>
          </div>

          <div class="col-2 mb-3 item">
            <h5>About MBIS</h5>
            <hr className="text-success"></hr>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-secondary">
                  The Inspiration
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-secondary">
                  The School
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-secondary">
                  The Team
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-secondary">
                  Mission & vision
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-secondary">
                  Our Philosphy
                </a>
              </li>
            </ul>
          </div>
          <div class={`col-5 mb-3 ${styles["map"]}`}>
            <h6 className="">
              {" "}
              Near AIIMS, NH-139 , Nawada More, Gosai Math,P.O. Mubarakpur,
              Patna-801505
            </h6>
            <div className="responsive-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.1514229890136!2d85.04230897437388!3d25.566628516640222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59b5276c4aab%3A0xd4da0b5ae2c6db0e!2sManava%20Bharati%20International%20School!5e0!3m2!1sen!2sin!4v1720178361876!5m2!1sen!2sin"
                width="98%"
                height="300"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </footer>
        <hr></hr>
      </div>
      <div className={`${styles["copyright"]}`}>
        <span>
          Copyright ©2024{" "}
          <span className={`${styles["school"]}`}>
            Manava Bharati International School.{" "}
          </span>{" "}
          All Rights Reserved
        </span>
        <a href="https://intenext.in/">
          Developed & Hosted by{" "}
          <span className={`${styles["one"]}`}>Intenext </span>
          <span className={`${styles["two"]}`}>Solutions</span> Pvt. Ltd.
        </a>
      </div>
    </>
  );
}

export default Footer;
