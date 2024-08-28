import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./SocialAndCultural.module.css";
import { Facebook, Instagram, Youtube } from "lucide-react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

function SocialAndCultural() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <>
      <div className={`row ${styles["container"]}`}>
        <div className={`col-sm-8 ${styles["left"]}`}>
          <h2 className={`${styles["head1"]} ${styles["text"]}`}>
            Social & Cultural Activities
          </h2>
          <h5 className={`${styles["head2"]} ${styles["text"]}`}>
            Embrace, Engage and Enlighten :
          </h5>
          <p className={`${styles["para"]} ${styles["text"]}`}>
            Our Social and cultural activities encourage students to Embrace
            diversity, Engage in meaningful interactions and be Enlightened by
            new perspectives
          </p>
          <div className={`slider-container`}>
            <Slider {...settings}>
              <div className={`${styles["content"]}`}>
                <img src="/images/SocialActivities/1.png"></img>
              </div>
              <div className={`${styles["content"]}`}>
                <img src="/images/SocialActivities/2.png"></img>
              </div>
              <div className={`${styles["content"]}`}>
                <img src="/images/SocialActivities/3.png"></img>
              </div>
              <div className={`${styles["content"]}`}>
                <img src="/images/SocialActivities/4.png"></img>
              </div>
              <div className={`${styles["content"]}`}>
                <img src="/images/SocialActivities/5.png"></img>
              </div>
              <div className={`${styles["content"]}`}>
                <img src="/images/SocialActivities/6.png"></img>
              </div>
            </Slider>
          </div>
        </div>
        {/* <div className={`${styles["right"]}`}>
          <h4>Follow us on :</h4>
          <div className={`${styles["social_icons"]}`}>
            <a href="https://www.facebook.com/mbispatna/">
              <Facebook color="#fff" size={26} />
            </a>
            <a href="https://www.instagram.com/mbispatna/">
              <Instagram color="#fff" size={26} />
            </a>
            <a href="https://youtube.com/@manavabharatiinternational7231?si=1biBFSZ36ExG6FF6">
              <Youtube color="#fff" size={29} />
            </a>
          </div>
        </div> */}
        <div class="col-sm-4">
          <iframe
            height="100%"
            width="100%"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmbispatna%2F&tabs=timeline&width=600&height=5000&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default SocialAndCultural;
