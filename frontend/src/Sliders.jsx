const Slider1 = "/images/Sliders/Slider1.png";
const Slider2 = "/images/Sliders/Slider2.png";
const Slider3 = "/images/Sliders/Slider3.png";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import styles from "./Sliders.module.css";

function Sliders() {
  return (
    <>
      <div id="carouselExample" class="carousel slide carousel-fade">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={Slider1}
              className={`d-block w-100 ${styles["image"]}`}
              alt="..."
            />
            <p className={`${styles["message"]}`}>The Best School in Patna</p>
            <h1 className={`${styles["title"]}`}>
              Manava Bharati <br />
              International School
            </h1>
          </div>
          <div class="carousel-item">
            <img
              src={Slider2}
              className={`d-block w-100 ${styles["image"]}`}
              class="d-block w-100"
              alt="..."
            />
            <p className={`${styles["message"]}`}>
              We Offer Enabling Environment To
            </p>
            <h1 className={`${styles["title"]}`}>
              Explore, Discover <br />
              and Excel
            </h1>
          </div>
          <div class="carousel-item">
            <img
              src={Slider3}
              className={`d-block w-100 ${styles["image"]}`}
              class="d-block w-100"
              alt="..."
            />
            <p className={`${styles["message"]}`}>
              Discover The Joy Of Learning At
            </p>
            <h1 className={`${styles["title"]}`}>
              Manava Bharati <br />
              International School
            </h1>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            class={`carousel-control-prev-icon ${styles["prev_icon"]}`}
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            class={`carousel-control-next-icon ${styles["next_icon"]}`}
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Sliders;
