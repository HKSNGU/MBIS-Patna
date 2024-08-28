import styles from "./AboutTheSchool.module.css";
import { Parallax } from "react-parallax";
import Background from "/images/TheSchool/right.png";

function AboutTheSchool() {
  return (
    <>
      <div className={`${styles["container"]}`}>
        <div className={`${styles["card"]}`}>
          <div className={`${styles["row1"]}`}>
            <div className={`${styles["col1"]}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                width="30"
                viewBox="0 0 448 512"
                className={`${styles["icon"]}`}
              >
                <path
                  fill="#7f7f7f"
                  d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                />
              </svg>
              <div>
                <a className={`${styles["head"]}`} href="">
                  Our Publication
                </a>
                <p className={`${styles["para"]}`}>It's all in here</p>
              </div>
            </div>
            <div className={`${styles["col2"]}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                width="30"
                viewBox="0 0 384 512"
                className={`${styles["icon"]}`}
              >
                <path
                  fill="#7f7f7f"
                  d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"
                />
              </svg>
              <div>
                <a className={`${styles["head"]}`} href="">
                  Read Blog
                </a>
                <p className={`${styles["para"]}`}>Pen it down</p>
              </div>
            </div>
            <div className={`${styles["col3"]}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                width="35"
                viewBox="0 0 512 512"
                className={`${styles["icon"]}`}
              >
                <path
                  fill="#7f7f7f"
                  d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"
                />
              </svg>
              <div>
                <a className={`${styles["head"]}`} href="">
                  Image Gallery
                </a>
                <p className={`${styles["para"]}`}>Into the muse</p>
              </div>
            </div>
            <div className={`${styles["col4"]}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30.8"
                width="35"
                viewBox="0 0 576 512"
                className={`${styles["icon"]}`}
              >
                <path
                  fill="#7f7f7f"
                  d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"
                />
              </svg>
              <div>
                <a className={`${styles["head"]}`} href="">
                  Video Gallery
                </a>
                <p className={`${styles["para"]}`}>Creative Splash</p>
              </div>
            </div>
          </div>
          <div className={`${styles["row2"]}`}>
            <div className={`${styles["img_container"]}`}>
              <img src="/images/TheSchool/left.png"></img>
            </div>

            <div className={`${styles["content_container"]}`}>
              <Parallax strength={100} bgImage={Background} height={100}>
                <div className={`${styles["content"]}`}>
                  <div>
                    <h6>WELCOME TO</h6>
                    <h5>MANAVA BHARATI INTERNATIONAL SCHOOL</h5>
                  </div>
                  <p>
                    Manava Bharati International School is affiliated to CBSE
                    (Affiliation No. 330864) up to Senior Secondary Level.
                    Unique in its perspectives and approach, we practice
                    collaboration & participation in all spheres of life. This
                    ensures holistic development of the students. Our students
                    have demonstrated excellence in academics, sports, social &
                    scientific environments, empathy to connect with the
                    community and real life situations.
                  </p>
                  <button>Explore</button>
                </div>
              </Parallax>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutTheSchool;
