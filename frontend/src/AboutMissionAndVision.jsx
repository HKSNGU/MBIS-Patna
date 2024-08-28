import styles from "./AboutMissionAndVision.module.css";

function AboutMissionAndVision() {
  return (
    <>
      <div className={`${styles["row1"]}`}>
        <div className={`${styles["col1"]}`}>
          <h3>Our Mission</h3>
          <p>
            Our mission is to ensure all round development of the child by
            providing quality education, with a scientific temper, adaptive to
            the changing needs of time. Encourage active participation in extra
            and co-curricular activities.
          </p>
          <a href="#">Read more &gt;</a>
        </div>
        <div className={`${styles["col2"]}`}>
          <h3>Our Vision</h3>
          <p>
            As envisioned by our founder, we strive to provide a dynamic
            learning environment to enable the child’s physical, cognitive,
            emotional, social and spiritual growth. ‘Manava Bharati’
            encapsulates the aforesaid vision – ‘Manava’ being a man with an
            awakened consciousness and ‘Bharati’ meaning wisdom and learning
          </p>
          <a href="#">Read more &gt;</a>
        </div>
      </div>
    </>
  );
}

export default AboutMissionAndVision;
