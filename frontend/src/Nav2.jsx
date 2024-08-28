import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import styles from "./Nav2.module.css";

function Nav2() {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-body-tertiary sticky-top ${styles["nav2"]}`}
      >
        <div className={`container-fluid ${styles["nav2_container"]}`}>
          <a class="navbar-brand" href="#">
            <img className={`${styles["brand"]}`} src="/images/brand.png"></img>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-lg-0">
              <li class="nav-item">
                <a className={`nav-link ${styles["link"]}`} href="#">
                  Home
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle ${styles["link"]}`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      The Inspiration
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      The School
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      The Team
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Our Faculties
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Vision & Mission
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Our Philosophy
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Unique Activities
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a className={`nav-link ${styles["link"]}`} href="#">
                  Mandatory Disclosure
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle ${styles["link"]}`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Acadamic
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Student Counsil
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Interact Club
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Sports
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Download Examination Policy
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Curriculum
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle ${styles["link"]}`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Admission
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Registration and Enquiry
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Invitation to visit
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Admission Procedure
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Prospectus
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle ${styles["link"]}`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Infrastructure
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Library & Resource Center
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      ELA / Maths & Science Lab
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Robotics & ICT Labs
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      PE, Yoga & Sports
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Garden / Play Area
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a className={`nav-link ${styles["link"]}`} href="#">
                  Junior Wing
                </a>
              </li>
              <li class="nav-item">
                <a className={`nav-link ${styles["link"]}`} href="#">
                  Carrer
                </a>
              </li>
            </ul>

            <button
              className={`btn btn-success ${styles["button"]}`}
              type="submit"
            >
              Online Payment
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav2;
