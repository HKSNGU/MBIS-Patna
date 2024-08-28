import styles from "./Tour.module.css";
import { Parallax } from "react-parallax";
import Slider from "/images/video-pre.png";
import { PiPlayCircleThin } from "react-icons/pi";

function Tour() {
  return (
    <>
      <div className={`${styles["Tour"]}`}>
        <Parallax strength={100} bgImage={Slider}>
          <div className={`${styles["content"]}`}>
            <a href="https://www.youtube.com/embed/Bfyi91uENYc?autoplay=1">
              <PiPlayCircleThin color="#fff" size={100} />
            </a>

            <div className={`${styles["head"]}`}>
              <h2>Video Tour To</h2>
              <h2>MANAVA BHARATI INTERNATIONAL SCHOOL</h2>
            </div>
            <p>Discover every corner of our campus in just 2 minutes.</p>
          </div>
        </Parallax>
      </div>
    </>
  );
}

export default Tour;
