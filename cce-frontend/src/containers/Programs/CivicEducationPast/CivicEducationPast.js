import React, { Component } from "react";
import { FaUserAlt } from "react-icons/fa";
import { BsBook } from "react-icons/bs";
import { GiTeacher } from "react-icons/gi";
import { FiUserCheck } from "react-icons/fi";
import civicEducation from "./CivicEducation.css";
import { connect } from "react-redux";

class CivicEducationPast extends Component {
  //constructor(props) {
  //super(props);
  //this.state = {};
  //}
  state = {
    headereng: "Bringing Democracy to Mongolian schools (1993-2000)",
    p1eng:
      "Project goals: To get acquainted with the democracy education in the United States, to retrain history and social sciences teacher, who were trained with the old curriculum of history of communism and the history of ideology between 1921 and 1990, providing with the knowledge they need to know on civic and democratic societies as well as to introduce new, student-centered teaching methods.",
    p2eng: "Project donor and partners: American Teachers Association",
    p3eng:
      "Project activities: Three CCE staff members traveled to the United States for a 21-day study tour, visiting governmental and non-governmental organizations and schools working in the field of civic education. For the first time in Mongolia, we organized democracy education training for secondary school teachers and history and social sciences specialists in cooperation with the trainers of American Teachers Association. Developed  and distributed democracy education textbook.",
    p4eng:
      "Project impacts: CCE staff learned about democracy education and how to disseminate it. Teachers and professionals who used to teach with old, ideological textbooks gained an initial understanding of civic / democracy education and began to develop new curricula for secondary schools.  “Democracy for all “ the first ever textbook on democracy education was translated and developed .",
    headereng2: "METHODS OF TEACHING DEMOCRACY AT SCHOOLS ( 1996-2008 )",
    p5eng:
      "Project goals: Improve and disseminate teaching of democracy education to history and social studies teachers trained in the old education curriculum in Mongolia, which recently won the democratic revolution",
    p6eng:
      "Project donor and partners: Foundation for Education for Democracy, Poland",
    p7eng:
      "Project activities:  With the help of Polish facilitators we organized series of training on democracy education and  methodology of teaching democracy education.",
    p8eng:
      "Project impacts: A total of 482 history and social studies teachers in Ulaanbaatar and some aimags improved their knowledge and teaching methods of democracy education. A group of 6 people including school teachers and CCE staff members visited Poland on study tour. ",
    headereng3: "MOSAIC PROJECT (2008-2010)",
    p9eng:
      "Project goals: Improving the teaching methods of history and social studies teachers and developing democratic school governance",
    p10eng:
      "Project donor and partners: State Department , USA, Russel Sage College",
    p11eng:
      "Project activities:   “Open school” training was delivered to urban and rural school administrators, teachers and parents.  6  high school teachers and an CCE staff member participated in a 14-day study tour to the United States. In addition, 4 teachers from secondary schools and the University of Education participated in the International Civic Education Training Seminar in Bulgaria",
    p12eng:
      "Project impacts: School teachers’ knowledge and teaching methodology increased significantly. More resources for teachers on democracy education has been developed. School governance has become more open and the participation of teachers, parents and students has increased. ",
    headereng4: "“MEMORY BANK OF DEMOCRACY ” (2010-2012он)",
    p13eng:
      "Project goals: Reserve the democracy oral stories of “foot soldiers “ who took part in 1990 democracy revolution by teaching school kids and teachers to search for the foot soldiers in their community and document the oral stories with them; develeop a book that reflects the historical events of the democratic revolution through the memories and facts of real participants.",
    p14eng:
      "Project donor and partners: American Teachers Association, Teachers Association of MongolianTrade Union",
    p15eng:
      "Project activities: Teachers of history and social sciences in Ulaanbaatar, Khentii, Selenge and Orkhon aimags were trained to guide their students in democratic values, basic knowledge and collecting oral stories form the local activists. Teachers organized trainings for students of their choice, and the trained kids searched for and interviewed the ordinary citizens who participated in the 1990 Democratic Revolution in their hometowns as well as documented oral stories for Memory bank of Democracy project. 6 high school teachers who participated in the project gained knowledge and experience by participating in the study tour to the United States.",
    p16eng:
      "Project impacts:  More than 550 interviews were conducted by school kids, recorded on CD and stored in the national archives of Mongolia and Academy of sciences.  Interviews with 10 selected individuals are available at www.civicvoices.org. Why Democracy?” documentary book on 1990 democratic revolution in Mongolia was written and disseminated to the State Central Library and other libraries of Mongolia. ",
    headereng5:
      "INTRODUCING DEMOCRACY EDUCATION CURRICULUM TO THE TEACHER TRAINING UNIVERSITIES (2014--2015он)",
    p17eng:
      "Project goals: The Governance and Transparency Program in Mongolia (STAGE) is a project implemented by The Asia Foundation to strengthen democratic governance through a more transparent and accountable regulatory and legislative environment. CCE collaborated with the project to develop and implement a democracy education curriculum that includes basic anti-corruption principles to the teacher training university curriculum.",
    p18eng: "Project donor and partners: The Asia Foundation",
    p19eng:
      "Project activities: Within the framework of the project, the draft Education Program for Democracy was developed and reviewed by scholars, university professors, and civil society representatives.  Mongolian State University of Education set a goal to reform the curriculum and established a Program Reform Team, which was in line with the purpose of our project, so we discussed the draft program with this team and received comments and requests from them to improve the program. The Project Program Team received feedback and developed a Democracy Education Curriculum for Teacher Training Universities and recommended it to universities. 2 professors did pilot test by teaching democracy education for the graduate course of School of Humanity and Social sciences, MSUE. ",
    p20eng:
      "Project impacts: A teachers’ handbook of democracy education was developed and published, and training was provided to more than 60 teachers. The main result of this project is the inclusion of the curriculum to the list the elective courses of the School of Humanities and Social Sciences of the Mongolian State University of Education. ",

    headermon: "“Ардчиллын боловсролыг Монголд авчирах нь” төсөл (1995-2000)",
    p1mon:
      "Төслийн зорилго: АНУ-ын ардчиллын боловсролын нөхцөл байдалтай танилцах, 1921-1990 оны хооронд дан ганц коммунизмын онол, үзэл суртлаар боловсрогдсон түүх, нийгмийн ухааны багш нарт Ардчиллын үнэт зүйлс, зарчим, ардчилсан нийгмийн бүтэц, зохион байгуулалт, хүний эрх зэрэг 1992 оны Үндсэн хуулиар тунхагласан хүмүүнлэг, иргэний, ардчилсан   нийгмийн иргэдэд зайлшгүй мэдэж байх шаардлагатай мэдлэг олгох, эдгээрийг сурагчиддаа заах шинэ, сурагч төвтэй сургалтын аргуудтай танилцуулах.",
    p2mon:
      "Төслийн санхүүжүүлэгч, хамтрагч: Америкийн Багш нарын Холбоо(АБнХ).",
    p3mon:
      "Төслийн үйл ажиллагаа: Иргэний Боловсролын Төвийн 3 ажилтан АНУ-д 21 хоногийн суралцах аялалд хамрагдаж иргэний боловсролын чиглэлээр ажилладаг төрийн болон төрийн бус байгууллага, сургуулиар зочилж туршлага судалсан.  АБХ-ны сургагч багш нартай хамтран Монголд анх удаа ЕБС-ийн багш, түүх нийгмийн ухааны мэргэжилтнүүдэд зориулсан ардчиллын боловсролын сургалт зохион байгуулж сургагч багш нарыг бэлтгэж эхэлсэн. ",
    p4mon:
      "Төслийн үр нөлөө: ИБТ-ийн ажилтнууд ардчиллын боловсрол, түүнийг хэрхэн түгээх талаар суралцсан. Хуучин, үзэл сурталжсан сурах бичгээр хичээл зааж байсан багш, мэргэжилтнүүд иргэний/ардчиллын боловсролын талаар анхны ойлголт авч , ЕБС-дад зориулсан шинэ сургалтын хөтөлбөр боловсруулж сурах бичгийн агуулгад тусгаж эхэлсэн.",
    headermon2: "“Сургуульд ардчиллыг заах аргууд” төсөл (1996-2008он)",
    p5mon:
      "Төслийн зорилго:Ардчилсан нийгэмд шилжээд  удаагүй байсан Монгол улсад хуучин боловсролын хөтөлбөрөөр бэлтгэгдсэн түүх нийгмийн ухааны багш нарт ардчиллын боловсролын мэдлэгийг түгээх, заах аргыг дээшлүүлэх.",
    p6mon: "Төслийн санхүүжүүлэгч: Польшийн Ардчиллын Боловсролын төлөө Сан",
    p7mon:
      "Үйл ажиллагаа: Польшийн сургагч багш нартай хамтран ЕБС-ийн түүх нийгмийн ухааны багш нарт заах аргын сургалтыг зохион байгуулсан.  Ардчиллын боловсролын сурах бичиг, гарын авлага, хичээлийн хэрэглэгдэхүүн боловсруулан түгээв. ",
    p8mon:
      "Төслийн үр нөлөө: Улаанбаатар хот, зарим аймаг хотын нийт 482 түүх нийгмийн ухааны багш нарын ардчиллын боловсролын мэдлэг, заах аргыг дээшлүүлсэн. Багш нар хичээлдээ хэрэглэх ном, гарын авлагатай болсон. ЕБС-ийн багш болон ИБТ-ийн ажилтан 6 хүн Польш улсад суралцах аялалд хамрагдсан.",
    headermon3: "“МОЗАИК” ТӨСӨЛ (2008-2010он)",
    p9mon:
      "Төслийн зорилго: Түүх нийгмийн ухааны багш нарын заах аргыг дээшлүүлэх , сургуулийн ардчилсан засаглалыг хөгжүүлэх.",
    p10mon:
      "Төслийн санхүүжүүлэгч: АНУ-ын  Төрийн Департамент, Рассэл Сэйж коллеж",
    p11mon:
      "Төслийн үйл ажиллагаа: Сурагч төвтэй заах аргыг багш нарт эзэмшүүлэх, сургуулийн засаглалыг илүү ардчилсан болгох “Нээлттэй сургууль” сургалт зохион байгуулсан. ЕБС-ийн 6 багш, ИБТ-ийн ажилтан АНУ-д туршлага судлах 14 хоногийн аялалд хамрагдсан. Мөн ЕБС-ийн болон Боловсролын Их сургуулийн багш 4 хүн Болгар улсад болсон Иргэний Боловсролын олон улсын сургалт семинарт оролцож мэргэжил дээшлүүлэв. ",
    p12mon:
      "Төслийн үр нөлөө: Багш нарын мэдлэг, заах арга, ур чадвар сайжирч сургалтанд хэрэглэх гарын авлага, хэрэглэгдэхүүн нэмэгдсэн. Сургуулийн засаглалд эцэг эх, багш, сурагчдийн оролцоо нээлттэй болсон. ",
    headermon4: "“Ардчиллын Дурсамжийн Сан” (2010-2012он)",
    p13mon:
      "Төслийн зорилго: Сурагчид,1990 оны ардчилсан хувьсгалд гар бие оролцож явсан энгийн иргэд-“явган цэргүүд”-ийг өөрийн оршин сууж буй орон нутагтаа эрэн сурвалжилж ардчиллын аман түүхийг бүтээх; Ардчилсан хувьсгалын үйл явцын цаглабарыг оролцож явсан гэрчүүдийн дурсамж, баримт сэлтээр баталгаажуулан ном болгон хэвлэх.",
    p14mon:
      "Төслийн санхүүжүүлэгч, хамтрагч: АНУ-ын Багш нарын холбоо, МҮЭ-ийн Багш нарын Холбоо",
    p15mon:
      "Төслийн үйл ажиллагаа: Улаанбаатар, Хэнтий, Сэлэнгэ, Орхон аймгийн түүх нийгмийн ухааны багш нарт ардчиллын үнэт зүйлс, иргэний хөдөлгөөний талаарх суурь мэдлэг, аман түүх бичихэд сурагчдаа хэрхэн чиглүүлэх тухай сургалт явуулсан. Багш нар өөрийн сонгож авсан ангийн сурагчдад сургалт зохион байгуулж,  1990 оны Ардчилсан хувьсгалд оролцож явсан жирийн иргэд - “Ардчиллын явган цэргүүд”- ийг эрэн сурвалжилж, ярилцлага хийн аман түүх бичиж хамтдаа Ардчиллын дурсамжийн сан бүтээсэн. Төсөлд оролцсон ЕБС-ийн  6 багш АНУ –д туршлага солилцох аялалд оролцон мэдлэг, туршлага хуримтлуулсан.",
    p16mon:
      "Төслийн үр нөлөө: 550 гаруй ярилцлага хийж, CD дээр бичиж хадгалан нэг нэг хувийг Монгол Улсын Төв архив, ШУА-ийн Түүхийн хүрээлэн, Үндэсний Түүхийн музейн сан хөмрөгт хадгалуулсан. Сонгогдсон 10 хүний ярилцлага www.civicvoices.orgсайт дээр тавигдсан. “Яагаад Ардчилал?” баримтат ном бүтээж хэвлүүлэн Улсын Төв номын сан, бусад номын сангуудад хадгалуулсан.",
    headermon5:
      "“Багш бэлтгэх сургуульд ардчиллын боловсролыг нэвтрүүлэх” төсөл (2014--2015он)",
    p17mon:
      "Төслийн зорилго: Монгол Улсад засаглал болон ил тод байдлыг бэхжүүлэх хөтөлбөр (STAGE) нь илүү ил тод ба хариуцлагатай зохицуулах болон хууль тогтоох орчинг бий болгох замаар  ардчилсан засаглалыг бэхжүүлэх зорилготой. Азийн сангийн хэрэгжүүлсэн төслийн хүрээнд Иргэний Боловсролын Төв Багш бэлтгэх үндэсний их дээд сургуулиудад ардчиллын боловсролыг нэвтрүүлэх, тэр дундаа авлигын эсрэг суурь зарчмыг багтаасан хөтөлбөр боловсруулан нэвтрүүлэх төсөлтэй хамтран ажилласан.",
    p18mon: "Санхүүжүүлэгч, хамтрагч: АНУ-ын Азийн Сан.",
    p19mon:
      "Төслийн хүрээнд Ардчиллын боловсролын хөтөлбөрийн төслийг боловсруулан эрдэмтэн судлаачид, их сургуулийн профессор багш нар,  иргэний нийгмийн төлөөлөл зэрэг мэргэжилтнүүдээр хянуулж гаргасан.  МУБИСсургалтын хөтөлбөрөө шинэчлэн өөрчлөх зорилт тавин Хөтөлбөрийн Шинэчлэлийн Баг байгуулан ажиллаж байсан нь манай төслийн зорилготой нийцэж  байсан учир бид энэ багаар хөтөлбөрийн төслөө хэлэлцүүлэн тэднээс хөтөлбөрийг засч сайжруулах санал шүүмж, хүсэлт хүлээн авсан юм. Төслийн Хөтөлбөрийн баг санал шүүмжийг хүлээн авч багш бэлтгэх их дээд сургуульд зориулсан Ардчиллын боловсрол сургалтын хөтөлбөрийг боловсруулж их дээд сургуулиудад санал болгосон. ",
    p20mon:
      "Төслийн үр нөлөө:Ардчиллын боловсрол хичээлийг хөтлөн явуулах багш нарт зориулсан гарын авлагыг боловсруулан хэвлэн гаргаж нийт 60 гаруй багш нарт сургалт зохион байгуулж түгээсэн.  МУБИС-ийн Хүмүүнлэг, нийгмийн ухааны сургуулийн оюутнуудын сонгон суралцах хичээлээр хөтөлбөрт суулгаж чадсан нь энэ төслийн гол үр дүн гэж үздэг.",
  };
  render() {
    return (
      <div>
        {/* 1 dugeer heseg */}
        <br />
        <br />
        <h1 className={civicEducation.CivicEducationPrimary}>
          <i class="fa fa-users" aria-hidden="true"></i>
          {this.props.language === 1
            ? this.state.headermon
            : this.state.headereng}
        </h1>
        <hr className={civicEducation.CivicEducationProgramHr} />
        <div className={civicEducation.CivicEducationProgramgridcontainer}>
          <div style={{ display: "flex" }}>
            <BsBook color="red" size="1.25rem" style={{ margin: "auto" }} />
            <p
              className={civicEducation.civicEducationProgramitem1}
              style={{ margin: "10px" }}
            >
              {this.props.language === 1 ? this.state.p1mon : this.state.p1eng}
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <GiTeacher color="red" size="1.25rem" style={{ margin: "auto" }} />
            <p
              className={civicEducation.civicEducationProgramitem1}
              style={{ margin: "10px" }}
            >
              {this.props.language === 1 ? this.state.p2mon : this.state.p2eng}
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <FaUserAlt color="red" size="1.25rem" style={{ margin: "auto" }} />
            <p
              className={civicEducation.civicEducationProgramitem1}
              style={{ margin: "10px" }}
            >
              {this.props.language === 1 ? this.state.p3mon : this.state.p3eng}
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
              {this.props.language === 1 ? this.state.p4mon : this.state.p4eng}
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
            : this.state.headereng2}
        </h1>
        <hr className={civicEducation.CivicEducationProgramHr} />
        <div className={civicEducation.CivicEducationProgramgridcontainer}>
          <div style={{ display: "flex" }}>
            <BsBook color="red" size="1.25rem" style={{ margin: "auto" }} />
            <p
              className={civicEducation.civicEducationProgramitem1}
              style={{ margin: "10px" }}
            >
              {this.props.language === 1 ? this.state.p5mon : this.state.p5eng}
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <GiTeacher color="red" size="1.25rem" style={{ margin: "auto" }} />
            <p
              className={civicEducation.civicEducationProgramitem1}
              style={{ margin: "10px" }}
            >
              {this.props.language === 1 ? this.state.p6mon : this.state.p6eng}
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <FaUserAlt color="red" size="1.25rem" style={{ margin: "auto" }} />
            <p
              className={civicEducation.civicEducationProgramitem1}
              style={{ margin: "10px" }}
            >
              {this.props.language === 1 ? this.state.p7mon : this.state.p7eng}
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
              {this.props.language === 1 ? this.state.p8mon : this.state.p8eng}
            </p>
          </div>
        </div>
        {/*3 dugeer heseg */}
        <br />
        <br />
        <h1 className={civicEducation.CivicEducationPrimary}>
          <i class="fa fa-users" aria-hidden="true"></i>
          {this.props.language === 1
            ? this.state.headermon3
            : this.state.headereng3}
        </h1>
        <hr className={civicEducation.CivicEducationProgramHr} />
        <div className={civicEducation.CivicEducationProgramgridcontainer}>
          <div style={{ display: "flex" }}>
            <BsBook color="red" size="1.25rem" style={{ margin: "auto" }} />
            <p
              className={civicEducation.civicEducationProgramitem1}
              style={{ margin: "10px" }}
            >
              {this.props.language === 1 ? this.state.p9mon : this.state.p9eng}
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <GiTeacher color="red" size="1.25rem" style={{ margin: "auto" }} />
            <p
              className={civicEducation.civicEducationProgramitem1}
              style={{ margin: "10px" }}
            >
              {this.props.language === 1 ? this.state.p10mon : this.state.p10eng}
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <FaUserAlt color="red" size="1.25rem" style={{ margin: "auto" }} />
            <p
              className={civicEducation.civicEducationProgramitem1}
              style={{ margin: "10px" }}
            >
              {this.props.language === 1 ? this.state.p11mon : this.state.p11eng}
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
              {this.props.language === 1 ? this.state.p12mon : this.state.p12eng}
            </p>
          </div>
        </div>
        {/*4 dugeer heseg */}
        <br />
        <br />
        <h1 className={civicEducation.CivicEducationPrimary}>
          <i class="fa fa-users" aria-hidden="true"></i>
          {this.props.language === 1
            ? this.state.headermon4
            : this.state.headereng4}
        </h1>
        <hr className={civicEducation.CivicEducationProgramHr} />
        <div className={civicEducation.CivicEducationProgramgridcontainer}>
          <div style={{ display: "flex" }}>
            <BsBook color="red" size="1.25rem" style={{ margin: "auto" }} />
            <p
              className={civicEducation.civicEducationProgramitem1}
              style={{ margin: "10px" }}
            >
              {this.props.language === 1 ? this.state.p13mon : this.state.p13eng}
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <GiTeacher color="red" size="1.25rem" style={{ margin: "auto" }} />
            <p
              className={civicEducation.civicEducationProgramitem1}
              style={{ margin: "10px" }}
            >
              {this.props.language === 1 ? this.state.p14mon : this.state.p14eng}
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <FaUserAlt color="red" size="1.25rem" style={{ margin: "auto" }} />
            <p
              className={civicEducation.civicEducationProgramitem1}
              style={{ margin: "10px" }}
            >
              {this.props.language === 1 ? this.state.p15mon : this.state.p15eng}
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
              {this.props.language === 1 ? this.state.p16mon : this.state.p16eng}
            </p>
          </div>
        </div>
        {/*5 dugeer heseg */}
        <br />
        <br />
        <h1 className={civicEducation.CivicEducationPrimary}>
          <i class="fa fa-users" aria-hidden="true"></i>
          {this.props.language === 1
            ? this.state.headermon5
            : this.state.headereng5}
        </h1>
        <hr className={civicEducation.CivicEducationProgramHr} />
        <div className={civicEducation.CivicEducationProgramgridcontainer}>
          <div style={{ display: "flex" }}>
            <BsBook color="red" size="1.25rem" style={{ margin: "auto" }} />
            <p
              className={civicEducation.civicEducationProgramitem1}
              style={{ margin: "10px" }}
            >
              {this.props.language === 1 ? this.state.p17mon : this.state.p17eng}
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <GiTeacher color="red" size="1.25rem" style={{ margin: "auto" }} />
            <p
              className={civicEducation.civicEducationProgramitem1}
              style={{ margin: "10px" }}
            >
              {this.props.language === 1 ? this.state.p18mon : this.state.p18eng}
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <FaUserAlt color="red" size="1.25rem" style={{ margin: "auto" }} />
            <p
              className={civicEducation.civicEducationProgramitem1}
              style={{ margin: "10px" }}
            >
              {this.props.language === 1 ? this.state.p19mon : this.state.p19eng}
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
              {this.props.language === 1 ? this.state.p20mon : this.state.p20eng}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.language.language,
  };
};

export default connect(mapStateToProps)(CivicEducationPast);
