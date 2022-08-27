import React, { Component } from "react";
import { FaBeer, FaUserAlt } from "react-icons/fa";
import { BsBook } from "react-icons/bs";
import { GiTeacher } from "react-icons/gi";
import { faUserAlt } from "react-icons/fa";
import { FiUserCheck } from "react-icons/fi";
import { FaBuilding } from "react-icons/fa";
import { FaUserTimes } from "react-icons/fa";
import civicEducation from "./CivicEducation.css";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/";
import book from "./nom1.jpg";

class CivicEducation extends Component {
  //constructor(props) {
  //super(props);
  //this.state = {};
  //}
  state = {
    header: "CIVIC EDUCATION CURRICULUM",
    p1:
      "Objectives: Improve civic education curriculum, develop teaching materials, and improve civic education knowledge and methodology of secondary school and university teachers",
    p2:
      "Project donors and partners: Minister of Education, Culture, Science and Sport, UNDP, The Asia Foundation",
    p3:
      "Project Activities: Since 2013, with the support of the Ministry of Education, Culture and Science of  Mongolia and international development organizations, we have been disseminating democratic education in Mongolia, developing civic education curricula, and developing textbooks and manuals for teachers. Developed a civic education program for secondary schools and submitted it to the Ministry of Education, Culture and Science submitted. Applied for the textbook development tender announced by the Ministry of Education, Culture and Science and jointly developed civic education textbooks for grades 1-12 in 2011-2013. Since 1995, the school has been teaching history, social sciences and civics to teachers. Developed a Democracy Education Program for Teacher Training Universities and published a Teacher&#39;s Guide. The program provides training for university teachers.",
    p4:
      "Project Impacts: Contributed to the inclusion of civic education, new content in the Mongolian education system, in the curriculum. Many civic education teachers training, retraining, and professional development projects are being implemented.",
    header2: "Leaders Advancing Democracy (LEAD) – Lead Mongolia",
    p5:
      "Project donor: USAID , Co-implementers: World learning, International Republican Institute",
    p6:
      "Project objectives: To prepare a new young generation to strengthen democracy in Mongolia Objective 3: To develop and disseminate civic education curriculum for high school students in Mongolia, to organize trainings for teachers, and to implement the “Project Citizen”",
    p7:
      "Project activities: CCE has been implementing 2 maim activities. Developed and distributed additional textbooks and video lessons on civics and social studies for high school students, organize trainings for teachers, organize debates among high school students. Foundation of Democracy an intensive four section civic education textbook designed specifically for the Mongolian high school student were introduced and published 2600 copies of the textbook distributing them to Mongolian schools. Implement “Citizen Project” an interactive methodology used in 60 countries worldwide . It offers young students an opoortunity to engage in local issues by encouraging the, to identify a community- based challenges they would like to see changed and take proactive steps achieving those changes. CCE selected 110 high schools of Mongolia to take part in project Citizen during 3 academic years.",
    p8:
      "Project impact: 2,600 copies of Foundations of Democracy have been printed. 615 history, social sciences teachers were trained in the Foundations of Democracy curriculum, and the Foundations of Democracy textbooks were distributed to 525 schools. CCE implemented Project Citizen in 108 schools of Ulaanbaatar and 13 aimags of Mongolia by trained 328 teachers, and influenced 3385 students on civic participation knowledge.",
    header3:
      "Strengthening Student self-governing organization (SSO) since 1997",
    p9:
      "Project objectives: Purpose of the project: Strengthening Student Self-Governance program is a method that aims to enable students to establish their own governing system, participate in school work and solve problems.",
    p10:
      "Project sponsors and partners: Foundation for Education for Democracy Poland, Mongolian Student Union, Scouting, Save the Children, Ministry of Education, Culture and Science",
    p11:
      "Project activities: As a result of Polish trainers coming to Mongolia to train teachers, the program&#39;strainers have been trained at the CCE, and the students&#39; self-governing manual has been translated and published four times. In this training, children are given a simple and clear explanation of everything they need to know, such as how to set up a SSO, how to structure it, how to develop rules and work plans, and how to practice it on their own. In total, more than 2,000 high school students and teachers participated in the SSO program, and in cooperation with many organizations, the program has been disseminated to target groups. Curricula such as the Teachers &#39;Council and the Parents&#39; Council have been developed, and it has been shown in practice that these councils are more effective when established in linking with the SSO.",
    p12:
      "Project impact: The school&#39;s experience of running its own student self-governing organization as a student participation organization shows that students learn participatory methods, participate in school issues, and influence decision-making, and school governance becomes more democratic. Increasing parental involvement can be school activities can be friendly transparent learning environment for children.",

    headermon: "Иргэний боловсролын хөтөлбөр",
    p1mon:
      "Төслийн зорилго: Иргэний боловсролын хөтөлбөрийг сайжруулах, сургалтын хэрэглэгдхүүн боловсруулах, ЕБС, их дээд сургуулийн багш нарын иргэний боловсролын мэдлэг, арга зүйг дээшлүүлэх",
    p2mon:
      "Төслийн санхүүжүүлэгч, хамтрагчид: БСШУЯ, НҮБ-ын Хөгжлийн Хөтөлбөр, Азийн Сан,",
    p3mon:
      "Төслийн үйл ажиллагаа: 1993 оноос эхлэн Монгол улсын БСШУЯ, болон олон улсын хөгжлийн байгууллагуудын дэмжлэгээр Ардчиллын боловсролыг Монгол улсад түгээх, ЕБС –ийн иргэний боловсролын хөтөлбөрийг боловсруулах, сурах бичиг гарын авлага боловсруулан багш нарт зориулсан заах аргын сургалтууд зохион байгуулж ирсэн. ЕБС-ийн иргэний боловсролын хөтөлбөрийг боловсруулан БСШУЯ-д санал болгон хүргүүлсэн. БСШУЯ-ны зарласан сурах бичиг боловсруулах тендэрт оролцон 2011-2013 оны хооронд 1-12 ангийн иргэний боловсролын сурах бичгийг хамтран боловсруулсан. Багш бэлтгэх их дээд сургуульд зориулсан Ардчиллын боловсролын хөтөлбөрийг боловсруулан Багшийн гарын авлагыг хэвлэв. Уг хөтөлбөрөөр их дээд сургуулийн багш нарт сургалт зохион байгуулдаг.",
    p4mon:
      "Төслийн үр нөлөө: Монгол улсын боловсролын системд шинэ агуулга болох иргэний боловсролын хичээлийг ЕБС-д оруулах талаар нөлөөлөн хөтөлбөрт суулгахад хувь нэмрээ оруулсан. Иргэний боловсролын багш бэлтгэх, багш нарыг дахин сургах, мэргэшүүлэх олон төсөл хэрэгжүүлж байна.",
    headermon2:
      "“Залуу манлайлагчид ардчилалд хувь нэмрээ оруулна” - LEAD Mongolia төсөл (2017 оноос)",
    p5mon:
      "Санхүүжүүлэгч. АНУ-ын Олон Улсын Хөгжлийн Агентлаг Хамтран хэрэгжүүлэгч: World learning, Бүгд Найрамдахчуудын Хүрээлэн",
    p6mon:
      "Төслийн зорилго: Монгол улсад ардчиллыг бэхжүүлэгч шинэ залуу үеийг бэлдэх Зорилт 3 : Монгол улсын Ерөнхий боловсролын сургуулийн ахлах ангид зориулсан иргэний боловсролын сургалтын хэрэглэгдхүүн боловсруулан түгээн дэлгэрүүлэх, багш нарт зориулсан сургалтууд зохион байгуулах, “Иргэн төсөл”-ийг хэрэгжүүлэх",
    p7mon:
      "Төслийн үйл ажиллагаа: АНУ-ын Олон Улсын Хөгжлийн Агентлагийн санхүүжилтээр World Learning, Иргэний Боловсролын Төв, Бүгд Найрамдахчуудын Хүрээлэн хамтран хэрэгжүүлж буй “Залуучууд Ардчилалд хувь нэмрээ оруулна” (LEAD Mongolia) хөтөлбөрийн 3-р бүрэлдэхүүн хэсгийг Иргэний Боловсролын Төв 2016 оноос хэрэгжүүлж байна. ЕБС-ийн ахлах ангийн иргэний боловсрол, нийгмийн ухааны хичээлийн нэмэлт сурах бичиг, видео хичээл боловсруулан түгээх, багш нарт заах аргын сургалт зохион байгуулах, ахлах ангийн сурагчдын дунд мэтгэлцээн зохион байгуулах, “Иргэн төсөл” хэрэгжүүлэх, ахлах ангийн сурагчдыг иргэний оролцооны ур чадварт сурган , иргэний боловсролыг нэмэгдүүлж байна.",
    p8mon:
      "Төслийн үр нөлөө: “Ардчиллын үндэс” ахлах ангийн иргэний боловсролын сурах бичгийг боловсруулан 2500 хувь хэвлэв. 615 түүх нийгмийн ухааны багш нарыг Ардчиллын үндэс хөтөлбөрийн заах аргын сургалтад хамруулан, 525 сургуульд Ардчиллын үндэс сурах бичгийг түгээсэн. “Иргэн төсөл”-ийг Улаанбаатар хотын болон 13 аймгийн 108 сургууль дээр хэрэгжүүлж 328 багш, 3385 сурагчийг иргэний оролцооны мэдлэг, чадвартай болоход нөлөө үзүүллээ. Мөн “Иргэн төсөл”-ийн шалгаруулалтыг 2 удаа 2 шаттайгаар зохион байгуулж, Үндэсний шалгаруулалтыг Ерөнхийлөгчийн дэргэдэх Иргэний танхимд зохион байгуулж аймаг, Нийслэлийн 24 сургуулийн баг оролцож харилцан бие биеэсээ суралцаад байна.",
  };
  render() {
    return (
      <div>
        {/* 1 dugeer heseg */}
        <br />
        <br />
        <h1 className={civicEducation.CivicEducationPrimary}>
          <i class="fa fa-users" aria-hidden="true"></i>
          {this.props.language === 1 ? this.state.headermon : this.state.header}
        </h1>
        <hr className={civicEducation.CivicEducationProgramHr} />
        <div className={civicEducation.CivicEducationProgramgridcontainer}>
          <div style={{ display: "flex" }}>
            <BsBook color="red" size="1.25rem" style={{ margin: "auto" }} />
            <p
              className={civicEducation.civicEducationProgramitem1}
              style={{ margin: "10px" }}
            >
              {this.props.language === 1 ? this.state.p1mon : this.state.p1}
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <GiTeacher color="red" size="1.25rem" style={{ margin: "auto" }} />
            <p
              className={civicEducation.civicEducationProgramitem1}
              style={{ margin: "10px" }}
            >
              {this.props.language === 1 ? this.state.p2mon : this.state.p2}
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <FaUserAlt color="red" size="1.25rem" style={{ margin: "auto" }} />
            <p
              className={civicEducation.civicEducationProgramitem1}
              style={{ margin: "10px" }}
            >
              {this.props.language === 1 ? this.state.p3mon : this.state.p3}
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <FiUserCheck
              color="red"
              size="1.25rem"
              style={{ margin: "auto" }}
            />
            <p
              className={civicEducation.civicEducationProgramitem1}
              style={{ margin: "10px" }}
            >
              {this.props.language === 1 ? this.state.p4mon : this.state.p4}
            </p>
          </div>
        </div>
        {/* 2 dugeer heseg */}
        <br />
        <br />
        <h1 className={civicEducation.CivicEducationPrimary}>
          <i class="fa fa-users" aria-hidden="true"></i>
          {this.props.language === 1
            ? this.state.headermon2
            : this.state.header2}
        </h1>
        <hr className={civicEducation.CivicEducationProgramHr} />
        <div className={civicEducation.CivicEducationProgramgridcontainer}>
          <div style={{ display: "flex" }}>
            <BsBook color="red" size="1.25rem" style={{ margin: "auto" }} />
            <p
              className={civicEducation.civicEducationProgramitem1}
              style={{ margin: "10px" }}
            >
              {this.props.language === 1 ? this.state.p5mon : this.state.p5}
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <GiTeacher color="red" size="1.25rem" style={{ margin: "auto" }} />
            <p
              className={civicEducation.civicEducationProgramitem1}
              style={{ margin: "10px" }}
            >
              {this.props.language === 1 ? this.state.p6mon : this.state.p6}
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <FaUserAlt color="red" size="1.25rem" style={{ margin: "auto" }} />
            <p
              className={civicEducation.civicEducationProgramitem1}
              style={{ margin: "10px" }}
            >
              {this.props.language === 1 ? this.state.p7mon : this.state.p7}
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <FiUserCheck
              color="red"
              size="1.25rem"
              style={{ margin: "auto" }}
            />
            <p
              className={civicEducation.civicEducationProgramitem1}
              style={{ margin: "10px" }}
            >
              {this.props.language === 1 ? this.state.p8mon : this.state.p8}
            </p>
          </div>
        </div>
        {/*3 dugeer heseg */}
        {this.props.language === 1 ? null : (
          <div>
            <br />
            <br />
            <h1 className={civicEducation.CivicEducationPrimary}>
              <i class="fa fa-users" aria-hidden="true"></i>
              {this.state.header3}
            </h1>
            <hr className={civicEducation.CivicEducationProgramHr} />
            <div className={civicEducation.CivicEducationProgramgridcontainer}>
              <div style={{ display: "flex" }}>
                <BsBook color="red" size="1.25rem" style={{ margin: "auto" }} />
                <p
                  className={civicEducation.civicEducationProgramitem1}
                  style={{ margin: "10px" }}
                >
                  {this.state.p9}
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <GiTeacher
                  color="red"
                  size="1.25rem"
                  style={{ margin: "auto" }}
                />
                <p
                  className={civicEducation.civicEducationProgramitem1}
                  style={{ margin: "10px" }}
                >
                  {this.state.p10}
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <FaUserAlt
                  color="red"
                  size="1.25rem"
                  style={{ margin: "auto" }}
                />
                <p
                  className={civicEducation.civicEducationProgramitem1}
                  style={{ margin: "10px" }}
                >
                  {this.state.p11}
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <FiUserCheck
                  color="red"
                  size="1.25rem"
                  style={{ margin: "auto" }}
                />
                <p
                  className={civicEducation.civicEducationProgramitem1}
                  style={{ margin: "10px" }}
                >
                  {this.state.p12}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.language.language,
  };
};

export default connect(mapStateToProps)(CivicEducation);
