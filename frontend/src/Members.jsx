import "bootstrap/dist/css/bootstrap.min.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../node_modules/react-tabs/style/react-tabs.css";
import styles from "./Members.module.css";

function Members() {
  return (
    <>
      <div className={`${styles["container"]}`}>
        <Tabs>
          <TabList>
            <Tab>The Team</Tab>
            <Tab>The Founder</Tab>
            <Tab>The Mentor</Tab>
          </TabList>

          <TabPanel>
            <div className={`row ${styles["row1"]}`}>
              <div className={`col-5 ${styles["col2"]}`}>
                <img src="/images/Members/teams.jpg" />
              </div>
              <div className={`col-7 ${styles["col1"]}`}>
                <h4>The Team</h4>
                <p>
                  We are not focused only on academic grades -our vision is to
                  offer an enabling environment where the children are
                  encouraged and inspired to learn together to rediscover
                  themselves the essence that make them transformational and
                  empathetic -collaboration, reflection and exploration being
                  the Mantras. In today’s world creating this environment is not
                  that easy. We have, therefore, developed a team which is
                  committed to and capable of fostering the above.Our academic
                  team is led by a psychologist with proven record of mentoring
                  school and university students. We have members with exposure
                  to highest portals of learning in science and technology and
                  others who have long standing experience of teaching and
                  research in pedagogical science.Besides the teachers, we have
                  a panel of experts offering special inputs in different
                  areas-science technology, art and culture, policy and climate
                  sciences. The academic structure offers freedom to the
                  teachers to evolve suitable classes, programs and pedagogies.
                  We have divided specific verticals each led by a designated
                  teacher to pursue various subjects and themes.
                </p>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className={`row ${styles["row1"]}`}>
              <div className={`col-5 ${styles["col2"]}`}>
                <img src="/images/Members/founder.png" />
              </div>
              <div className={`col-7 ${styles["col1"]}`}>
                <h4>The Founder</h4>
                <p>
                  Mr. Pradeep Kumar Mishra, his wife Monika Dutt Mishra and Dr.
                  D.P. Pandey had great influence of Manava Bharati (in
                  Mussoorie & Dehradun). They were keen to have the approach
                  adopted and experimented with. Having resigned from a public
                  sector and MNC jobs, Pradeep Mishra wished to do something
                  meaningful and different from a comfortable routine job. The
                  couple decided to establish a public school in Khagaul (where
                  they lived) and Buxar, their native place. Foundation Schools
                  were established in Khagaul and Buxar -in the years (1997) and
                  (2008) respectively. The two schools cater to the needs of
                  local communities with the ideals of Manava Bharati at the
                  heart of the founders. Dr. D.P. Pandey and his child centric
                  approach kept reminding them consistently. Dr. Himanshu
                  Shekhar, a family friend of the couple and an educationist,
                  had already been pursuing D.P. Pandey’s ideals in schools, he
                  established at Dehradun and was always available for support
                  to the couple in their earnest bid to establish a center of
                  excellence in child centric education. Himanshu kept sharing
                  his learnings from Dr. D.P. Pandey and Manava Bharati and
                  encouraged them to try and pursue similar perspectives.
                </p>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className={`row ${styles["row1"]}`}>
              <div className={`col-5 ${styles["col2"]}`}>
                <img src="/images/Members/mentor.png" />
              </div>
              <div className={`col-7 ${styles["col1"]}`}>
                <h4>The Mentor</h4>
                <p>
                  First, I met Babu Ji (Dr. D.P. Pandey) during a chance visit
                  to Mussorie and Manava Bharati in early seventies. Was
                  hesitant to interact but soon found myself nearer to him –
                  don’t know how it all happened. Sensing my hesitation and lack
                  of words Babu ji encouraged education. None of my letters ever
                  went unanswered and there I realized the essesnce of greatness
                  and generousity in Babuji . He was showing interest in the
                  subjects I shared from the villages of Bihar where I worked
                  with. He started sharing issues on and invited me to the
                  prayers, discussions and walk throughs. The feeling, for me
                  was ecstatic and humbling. With a sense of great
                  accomplishment I returned back to Patna and kept communicating
                  with him touching upon various subjets centerd around
                  institution building and his thoughts on education as a
                  transformational intervention in building of an inclusive and
                  creative society. It was enchanting to hear from him his
                  experiences of Shanti Niketan and his time with Guru Ravidra
                  Nath Tagore. With no opportunity of any exposure to the
                  outside world, I felt better informed and accomplished.
                </p>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}

export default Members;
