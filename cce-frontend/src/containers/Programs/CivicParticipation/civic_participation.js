import React, { Component } from "react";
import { FaUserAlt } from "react-icons/fa";
import Civicparticipation from "./civic_participation.css";
import { connect } from "react-redux";
class civic_participation extends Component {
  //constructor(props) {
  //super(props);
  //this.state = {};
  //}
  state = {
    civicparticipatory: "Citizen Participatory Program",
    Conducttrainingonicitizen:
      "1 Conduct training on citizen participation and empower citizens",
    Conducttrainingongood:
      "2 Conduct training on good governance and civic education",
    Conducttrainingonenvironmental:
      "3 Conduct training on environmental conservation such as water quality monitoring, fires management and environmental assessment",
    SetUp: "4 Set up local community groups and facilitate their activities",
    Organise:
      " 5 Organise training on how to develop small projects for local community and support/promote projects",
    Setuplocalenvironmental:
      " 6 Set up local environmental group and provide training and guidance on how to monitor businesses that have an impact on environment",
    train: "7 Train and facilitate local youth",
    citizensfrom:
      "766 citizens from 10 provinces participated ion “Citizen Participation” project. As a result of the project, community movements have been established in 4 souls and 1 bag. Within the framework of NGO capacity building project, a regional training in Ulaanbaatar city and 21 provinces were organised and 3250 NGOs and staff were involved. ",
    civicparticipatory1: "Иргэдийн оролцооны хөтөлбөр",
    Conducttrainingonicitizen1: "1 Иргэдийн оролцооны хөтөлбөр",
    Conducttrainingongood1:
      "2 Сайн засаглал болон иргэний боловсролын сургалт зохион байгуулах",
    Conducttrainingonenvironmental1:
      "3 Байгаль орчныг хамгаалах гол усаа шинжлэх ойн менежмэнт байгаль орчны үнэлгээ хийх сургалт зохион байгуулах",
    SetUp1:
      "4 Орон нутгийн иргэдийн оролцооны байгууллага байгуулан ажиллахад туслан зөвлөгөө өгөх",
    Organise1:
      " 5 Орон нутгийн иргэдэд жижиг төсөл боловсруулах сургалт зөвлөгөө өгч дэмжих",
    Setuplocalenvironmental1:
      " 6 Орон нутгийн байгаль орчны бүлгийг орон нутгийн байгаль орчинд нөлөөтэй бизнесыг мониторинг хяналт тавих үйл ажиллагааг мэргэжлийн сургалт зөвлөгөөгөөр хангах",
    train1:
      "7 Орон нутгийн хүүхэд залуучуудад сургалт хийн үйл ажилгааг нь дэмжих",
    citizensfrom1:
      "Сурагчдын өөрийн удирдлага сургалтанд Улаанбаатар хот 11 аймгийн их дээд сургуулиудын болон ЕБС-ийн 5-аас 10-р ангийн 1187 сурагч оюутан 50 багш нар 200 гариу эцэг эх оролцсон.Иргэдийн оролцоо төслийн сургалтанд 10 аймгийн 766 иргэд хамрагдсан.Төслийн үр дүнд орон нутгийн 4 сум 1 багт иргэдийн хөдөлгөөн үүсгэн байгуулагдсан.ТББ-ыг чадавхжуулах төслийн хүрээнд Улаанбаатар хот болон 21 аймагт бүсчилсэн сургалт зохион байгуулж 3250 ТББ ын захирал ажилтнуудыг хамруулсан.Ерөнхий боловсролын сургуулийн түүх нийгмийн ухааны багш нарыг дэмжих төслөөр УБ хотын дүүргийн болон зарим аймаг сумдын нийт 482 нийгмийн ухааны багшид сургалт явуулсан.",
    civicparticipatorymon: "Иргэдийн оролцооны хөтөлбөр",
    Conducttrainingonicitizenmon: "1 Иргэдийн оролцооны хөтөлбөр",
    Conducttrainingongoodmon:
      "2 Сайн засаглал болон иргэний боловсролын сургалт зохион байгуулах",
    Conducttrainingonenvironmentalmon:
      "3 Байгаль орчныг хамгаалах гол усаа шинжлэх ойн менежмэнт байгаль орчны үнэлгээ хийх сургалт зохион байгуулах",
    SetUpmon:
      "4 Орон нутгийн иргэдийн оролцооны байгууллага байгуулан ажиллахад туслан зөвлөгөө өгөх",
    Organisemon:
      " 5 Орон нутгийн иргэдэд жижиг төсөл боловсруулах сургалт зөвлөгөө өгч дэмжих",
    Setuplocalenvironmentalmon:
      " 6 Орон нутгийн байгаль орчны бүлгийг орон нутгийн байгаль орчинд нөлөөтэй бизнесыг мониторинг хяналт тавих үйл ажиллагааг мэргэжлийн сургалт зөвлөгөөгөөр хангах",
    trainmon:
      "7 Орон нутгийн хүүхэд залуучуудад сургалт хийн үйл ажилгааг нь дэмжих",
    citizensfrommon:
      "Сурагчдын өөрийн удирдлага сургалтанд Улаанбаатар хот 11 аймгийн их дээд сургуулиудын болон ЕБС-ийн 5-аас 10-р ангийн 1187 сурагч оюутан 50 багш нар 200 гариу эцэг эх оролцсон.Иргэдийн оролцоо төслийн сургалтанд 10 аймгийн 766 иргэд хамрагдсан.Төслийн үр дүнд орон нутгийн 4 сум 1 багт иргэдийн хөдөлгөөн үүсгэн байгуулагдсан.ТББ-ыг чадавхжуулах төслийн хүрээнд Улаанбаатар хот болон 21 аймагт бүсчилсэн сургалт зохион байгуулж 3250 ТББ ын захирал ажилтнуудыг хамруулсан.Ерөнхий боловсролын сургуулийн түүх нийгмийн ухааны багш нарыг дэмжих төслөөр УБ хотын дүүргийн болон зарим аймаг сумдын нийт 482 нийгмийн ухааны багшид сургалт явуулсан.",
      
      civicparticipatory1: "Capacity Building Project for Local Community Participation (since 2000)",
      Conducttrainingonicitizen1: "",
      Conducttrainingongood1:
        "Project Objectives: To help local people to participate collectively in local government and decision-making process, to monitor government policy and activities, to cooperate with government organizations and to contribute to local development, to become responsible and informed citizens.",
      Conducttrainingonenvironmental1:
        "  UI Zensen Trade Union of Japan,  Local government authority, Governor's office",
      SetUp1:
        "Project activities: Provide training and advice local people on civic participation, NGO management, project writing, fundraising, financial and human resource capacity building, monitoring government policies and programs; mobilize community groups, provide methodological support; implement various activities and events to strengthen local citizen participatory organizations ; implementing  small projects.",
     
      citizensfrom1:
        "Project impacts: Local citizens' groups were established in 4 local soums and 1 bagg within the framework of the “Citizen Participation” project implemented by the Center for Citizenship Education NGO. In January 2004, citizens’ movement called “People's Envoy” was established by citizens’ initiative in Yoroo soum of Selenge aimag, as a result of a training for citizens, civil servants, and the elderly. The movement, which originally had 25 members, is now a well-known movement among locals. Currently, “People's Envoy” NGO is active operating in its own two-story training building. The training center offers a wide range of trainings for unemployed youth and citizens, who only finished their high school, such as increasing household income and life skills, and increasing the citizens participation of students' self-governing organization. “People's Envoy” NGO is active not only in conducting trainings but also in operating at local level. ",
     civicparticipatory1mon: "Орон нутгийн иргэдийн оролцооны байгууллагыг чадавхжуулах төсөл ( 2000 оноос    )",
      Conducttrainingonicitizen1mon: "Төслийн зорилго: Орон нутгийн иргэд хамтран нутгийн удирдлага, шийдвэр гаргах түвшинд оролцох, төрийн үйл ажиллагаанд хяналт тавих, төрийн байгууллагатай хамтран ажиллаж орон нутгийн хөгжилд хувь нэмрээ оруулах чадвартай, хариуцлагатай , мэдээлэлтэй иргэн болоход туслах",
      Conducttrainingongood1mon:
        "3 Төслийн Санхүүжүүлэгч: Японы “Ю АЙ Зэнсэн” Үйлдвэрчний Эвлэл, Хамтрагч байгууллага: Орон нутгийн нутгийн удирдлагын байгууллага, ЗДТГ",
      Conducttrainingonenvironmental1mon:
        "Төслийн үр нөлөө: Иргэний Боловсролын Төв ТББ-аас хэрэгжүүлж буй “Иргэдийн оролцоо” төслийн хүрээнд орон нутгийн 4 сум, 1 багт иргэдийн хөдөлгөөн үүссэн. 2004 оны 1 сард Сэлэнгэ аймгийн Ерөө суманд иргэд, төрийн албан хаагчид, өндөр настан нарын дунд  явуулсан сургалтын үр дүнд нутгийн иргэдийн өөрсдийн санаачлагаар “Ардын Элч” хэмээх нэртэй иргэдийн хөдөлгөөн байгуулагдсан юм. Уг хөдөлгөөн нь анх 25 гишүүнтэй байсан бол одоо орон нутгийн иргэдийн сайн мэддэг олон хүнийг хамарсан хөдөлгөөн болж чадсан. Одоо “Ардын Элч” хөдөлгөөн нь өөрийн сургалтын 2 давхар байртай идэвхитэй үйл ажиллагаа явуулж байна. Уг сургалтын төвдөө дунд сургууль төгсөөд ажил мэргэжилгүй байгаа залуучууд, иргэдэд зориулан өрхийн орлогыг нэмэгдүүлэх болон амьдрах арга ухаанд сургах, сурагчийн өөрийн удирдлагын байгууллагын, иргэдийн оролцоог нэмэгдүүлэх гэх мэт  гэсэн өргөн сэдэвтэй сургалт явуулж байна.  “Ардын Элч” хөдөлгөөн нь зөвхөн сургалт явуулаад зогсохгүй орон нутгийн хүрээнд идэвхитэй үйл ажиллагаа явуулдаг.",

      Organise1mon:"Сурагчдын өөрийн удирдлага сургалтанд Улаанбаатар хот 11 аймгийн их дээд сургуулиудын болон ЕБС-ийн 5-аас 10-р ангийн 1187 сурагч оюутан 50 багш нар 200 гариу эцэг эх оролцсон.Иргэдийн оролцоо төслийн сургалтанд 10 аймгийн 766 иргэд хамрагдсан.Төслийн үр дүнд орон нутгийн 4 сум 1 багт иргэдийн хөдөлгөөн үүсгэн байгуулагдсан.ТББ-ыг чадавхжуулах төслийн хүрээнд Улаанбаатар хот болон 21 аймагт бүсчилсэн сургалт зохион байгуулж 3250 ТББ ын захирал ажилтнуудыг хамруулсан.Ерөнхий боловсролын сургуулийн түүх нийгмийн ухааны багш нарыг дэмжих төслөөр УБ хотын дүүргийн болон зарим аймаг сумдын нийт 482 нийгмийн ухааны багшид сургалт явуулсан. ",
      
        civicparticipatory4mon: "Орон нутгийн иргэдийн оролцооны байгууллагыг чадавхжуулах төсөл ( 1996 оноос    )",
        Conducttrainingonicitizenmon: "",
        Conducttrainingongood4mon:
          "Төслийн зорилго:СӨУБ хөтөлбөр нь сурагчдын өөрийн удирдлагын байгууллагыг байгуулан, сургуулийн ажилд оролцох, асуудлаа шийдвэрлэх чадвартай болгох зорилготой аргачлал юм.Төслийн санхүүжүүлэгч, хамтрагчид:  Польшийн Ардчиллын төлөө сан, Монголын Оюутны Холбоо, Скаутын байгууллага, Хүүхдийг Ивээх сан, БСШУЯ",
        Conducttrainingonenvironmental4mon:
          "Төслийн үйл ажиллагаа: Польш улсын сургагч багш нар анх Монголд ирж багш нарт удаа дараагийн сургалт хийсний үр дүнд Иргэний Боловсролын Төвийн дэргэд уг хөтөлбөрийн сургагч багш нар бэлтгэгдэж, сурагчдын өөрийн удирдлагын байгууллагын ажиллах үйл ажиллагааны гарын авлагыг орчуулан 4 удаа хэвлүүлээд байна. Энэхүү сургалтаар СӨУБ-ыг хэрхэн үүсгэн байгуулах, бүтэц зохион байгуулалтаа хийх, дүрэм журам, ажлын төлөвлөгөө боловсруулах зэрэг өөрийн удирдлагад хэрэгцээтэй бүх зүйлийг энгийн, ойлгомжтой байдлаар тайлбарлан хүүхдүүдээр өөрсдөөр нь дадлага ажил хийлгэж ажиллуулдаг. Сурагчдын өөрийн удирдлага хөтөлбөрийн сургалтанд нийтдээ ЕБС-ийн 2000 гаруй сурагч, багш нар хамрагдсанаас гадна олон байгууллагатай хамтран энэ хөтөлбөрийг зорилтот бүлгүүдэд түгээн дэлгэрүүлж ирсэн.  Багш нарын зөвлөл, Эцэг, эхийн зөвлөл зэрэг сургалтын хөтөлбөр боловсруулсан бөгөөд эдгээр зөвлөлүүдийг СӨУБ-тай зэрэгцүүлэн сургууль дээр байгуулж ажиллахад илүү үр дүнд хүрдэг гэдэг нь амьдрал практик дээр харагдсан.",
        SetUp4mon:
          "Хамтрагчид: Ховд, Өвөрхангай, Дорнод, Булган, Дундговь, Хэнтий, Дорноговь, Дархан-УУл аймгийн Боловсролын Газар, Багшийн мэргэжил дээшлүүлэх институит Төслийн үр шимийг хүртэгчид: ЕБС-ийн сурагчид, багш нар .",
        Organise4mon:
          "    Төслийн үр нөлөө:  Сургууль дээрээ сурагчдын өөрийн удирдлагын байгууллагыг сурагчдын оролцооны байгууллага хэлбэрээр ажилуулсан сургуулийн туршлагаас харахад сурагчид ЕБС- д байхаасаа эхлэн оролцооны аргад суралцан, сургуулийн асуудалд оролцож, шийдвэр гаргахад нөлөөлж, сургуулийн засаглал илүү ардчилсан болно.  Эцэг эхийн оролцоо нэмэгдэж , сургуулийн үйл ажиллагаа ил тод, сурах орчин хүүхдэд ойр ээлтэй болох боломжтой. ",
          text1:"PROJECT CITIZEN (Since 1996)",
          text1mon:"Иргэн төсөл (1996 оноос)",
          text2:"Project Objectives:To provide high school students with the citizen participation skills, knowledge and attitudes that can solve their problems through identifying problems,presenting it at the local government and decision-making levels, influencing on policis, decisions and activities of government organizations and bringing change.",
          text2mon:"Төслийн зорилго: ЕБС-ийн сурагчид тулгамдаж буй асуудлаа тодорхойлон орон нутгийн  төрийн байгууллага, шийдвэр гаргах түвшинд асуудлаа танилцуулж, бодлого, шийдвэр, төрийн байгууллагын үйл ажиллагаанд нөлөөлөн өөрчлөлт гаргаж, өөрсдийн асуудлаа шийдвэрлүүлэх иргэдийн оролцооны чадвар,  асуудлыг шийдвэрлэх мэдлэг, хандлага эзэмшүүлэх  ",
          text3:"Supporting organisation: US Center for Civic Education, Open Society Institute, UNDP, The Asia Foundation, US Agency for International Development, Office of the President of Mongolia",
          text3mon:"Дэмжигчид: АНУ-ын Иргэний Боловсролын Төв, Нээлттэй Нийгэм Хүрээлэн, НҮБ-ын Хөгжлийн Хөтөлбөр, Азийн Сан, АНУ-ын Олон улсын хөгжлийн агентлаг, Монгол Улсын Ерөнхийлөгчийн Тамгын Газар, АНУ-ын Олон УЛсын Хөгжлийн Агентлаг",
          text4:"Partner organisation: Khovd, Uvurkhangai, Dornod, Bulgan, Dundgovi, Khentii, Dornogovi, Darkhan-Uul aimags’ Education Department, Teacher Training Institute Beneficiaries: High school students and teachers",
          text4mon:"Хамтрагчид: Ховд, Өвөрхангай, Дорнод, Булган, Дундговь, Хэнтий, Дорноговь, Дархан-УУл аймгийн Боловсролын Газар, Багшийн мэргэжил дээшлүүлэх институит Төслийн үр шимийг хүртэгчид: ЕБС-ийн сурагчид, багш нар",
          text5:"Teachers of history, social sciences and civic education are trained in “Project Citizen” facilitators’ training and gain methodology. The facilitator, together with his or her students, identifies the problem that is faced by the students and implements projects in teams, groups, and class throughout the school year to address the issues. In order to understand the problem, children need to study the problem, get acquainted with the law, and collect information from government agencies, officials, and professionals. Based on the information, a optional policy and work plan will be developed to address the issue. According to the plan, advocacy meetings, campaigns, discussions, demands and requests are sent to influence government policies and decisions in order to solve the problem. In the last term of the school year, we organize a public reporting event or a “Project Citizen” competition. The competition is held at the school, aimag, city, and national level, and teams selected from aimags and cities participate in the national competition, as a tradition. The “Project Citizen” competition has been organized in cooperation with the Office of the President of Mongolia for the last 4 years.",
          text5mon:"ЕБС-ийн түүх нийгмийн ухаан, иргэний боловсролын багш “Иргэн төсөл”-ийн багшийн сургалтад нар хамрагдан арга зүйд суралцана. Сургагч багш өөрийн  сурагчдын хамт сурагчдад тулгамдаж буй асуудлыг сонгон тухайн асуудлыг шийдвэрлүүлэхээр хичээлийн жилийн турш баг, бүлэг, ангиараа төсөл хэрэгжүүлнэ.  Хүүхдүүд асуудлаа ойлгохын тулд тухайн асуудлаа сайтар судалж, хууль дүрэмтэй танилцан, төрийн байгууллага, албан тушаалтан, мэргэжлийн хүмүүст хандан мэдээлэл цуглуулна. Цуглуулсан мэдээлэл дээр үндэслэн асуудлыг шийдвэрлэх бодлогын хувилбараа боловсруулан ажлын төлөвлөгөө боловсруулна. Төлөвлөгөөний дагуу нөлөөллийн уулзалт, кампанит ажил хэлэлцүүлэг, шаардлага, хүсэлт  хүргүүлэх зэргээр төрийн бодлого, шийдвэрт нөлөөлөн асуудлаа шийдвэрлүүлдэг.  Хичээлийн жилийн сүүлийн улиралд хийсэн ажлаа олны өмнө тайлагнах арга хэмжээ буюу “Иргэн төсөл”-ийн шалгаруулалтыг зохион байгуулдаг. Шалгаруулалт сургууль,  аймаг , хот, үндэсний хэмжээнд болох бөгөөд аймаг, хотоос шалгарсан багууд үндэсний шалгаруулалтад оролцдог уламжлалтай.  “Иргэн төсөл”-ийн шалгаруулалтыг сүүлийн 4 жилийн турш Монгол Улсын Ерөнхийлөгчийн Тамгын Газартай хамтран зохион байгуулж байна.",
          text6:"    4. Since 1996, more than 2,800 teachers participated in the “Project Citizen” facilitators’ training program and more than 30,000 high school students participated in the project. They have learned the skills and knowledge of a responsible, participatory, informed, and capable citizen of a democratic country, and they have made significant changes in their communities, schools, and classrooms through their own participation, and have solved many problems.",
          text6mon:"1996 оноос хойш “Иргэн төсөл”-ийн багшийн сургалтад 2800 гаруй багш, ЕБС-ийн 30.000 гаруй сурагч  төсөлд оролцон ардчилсан орны хариуцлагатай, оролцоотой, мэдээлэлтэй, чадварлаг иргэний мэдлэг чадварт суралцаж өөрийн орон нутаг, сургууль, ангидаа өөрсдийн оролцоогоор өөрчлөлт хийж,  олон тулгамдсан асуудлыг шийдвэрлээд байна."
         };
  render() {
    return (
      <div>
        <br />
        <br />
        <h1 className={Civicparticipation.CivicParticipationProgramPrimary}>
          <i className="fa fa-user" aria-hidden="true"></i>
          {this.props.language === 1
            ? this.state.civicparticipatorymon
            : this.state.civicparticipatory}
        </h1>
        <hr className={Civicparticipation.CivicParticipationProgramHr} />

        <div
          className={Civicparticipation.CivicParticipationProgramgridcontainer}
        >
          <div className={Civicparticipation.CivicParticipationProgramitem1}>
            <p className={Civicparticipation.CivicParticipationProgramitem1p}>
            {this.props.language === 1
            ? this.state.Conducttrainingonicitizenmon
            : this.state.Conducttrainingonicitizen}
            </p>
            <hr
              className={Civicparticipation.CivicParticipationProgramitem1Hr}
            />
          </div>
          <div className={Civicparticipation.CivicParticipationProgramitem2}>
            <p className={Civicparticipation.CivicParticipationProgramitem2p}>
              {this.props.language === 1
                ? this.state.Conducttrainingongoodmon
                : this.state.Conducttrainingongood}
            </p>
            <hr
              className={Civicparticipation.CivicParticipationProgramitem1Hr}
            />
          </div>
          <div className={Civicparticipation.CivicParticipationProgramitem3}>
            <p className={Civicparticipation.CivicParticipationProgramitem3p}>
              {this.props.language === 1
                ? this.state.Conducttrainingonenvironmentalmon
                : this.state.Conducttrainingonenvironmental}
            </p>
            <hr
              className={Civicparticipation.CivicParticipationProgramitem1Hr}
            />
          </div>
          <div className={Civicparticipation.CivicParticipationProgramitem4}>
            <p className={Civicparticipation.CivicParticipationProgramitem4p}>
              {this.props.language === 1
                ? this.state.SetUpmon
                : this.state.SetUp}
            </p>
            <hr
              className={Civicparticipation.CivicParticipationProgramitem1Hr}
            />
          </div>
          <div className={Civicparticipation.CivicParticipationProgramitem5}>
            <p className={Civicparticipation.CivicParticipationProgramitem5p}>
            {this.props.language === 1
                ? this.state.Organisemon
                : this.state.Organise}
            </p>
            <hr
              className={Civicparticipation.CivicParticipationProgramitem1Hr}
            />
          </div>
          <div className={Civicparticipation.CivicParticipationProgramitem6}>
            <p className={Civicparticipation.CivicParticipationProgramitem6p}>
              {this.props.language === 1
                ? this.state.Setuplocalenvironmentalmon
                : this.state.Setuplocalenvironmental}
            </p>
            <hr
              className={Civicparticipation.CivicParticipationProgramitem1Hr}
            />
          </div>
          <div className={Civicparticipation.CivicParticipationProgramitem7}>
            <p className={Civicparticipation.CivicParticipationProgramitem7p}>
            {this.props.language === 1
                ? this.state.trainmon
                : this.state.train}
            </p>
            <hr
              className={Civicparticipation.CivicParticipationProgramitem1Hr}
            />
          </div>
        </div>
        <div>
          <br />
          <div>
            <p
              className={Civicparticipation.Civicparticipationhvree}
              style={{ margin: "auto" }}
            >
              {this.props.language === 1
                ? this.state.citizensfrommon
                : this.state.citizensfrom}
            </p>
          </div>
          <br /> <br />
          
        </div>
        <div>
        <br />
        <br />
        <h1 className={Civicparticipation.CivicParticipationProgramPrimary}>
          <i className="fa fa-user" aria-hidden="true"></i>
          {this.props.language === 1
            ? this.state.civicparticipatory1mon
            : this.state.civicparticipatory1}
        </h1>
        <hr className={Civicparticipation.CivicParticipationProgramHr} />
        <div
          className={Civicparticipation.CivicParticipationProgramgridcontainer}
        >
          <div className={Civicparticipation.CivicParticipationProgramitem2}>
            <p className={Civicparticipation.CivicParticipationProgramitem2p}>
            {this.props.language === 1
            ? this.state.Conducttrainingonicitizen1mon
            : this.state.Conducttrainingonicitizen1}
            </p>
            <hr
              className={Civicparticipation.CivicParticipationProgramitem1Hr}
            />
          </div>
          <div className={Civicparticipation.CivicParticipationProgramitem2}>
            <p className={Civicparticipation.CivicParticipationProgramitem2p}>
              {this.props.language === 1
                ? this.state.Conducttrainingongood1mon
                : this.state.Conducttrainingongood1}
            </p>
            <hr
              className={Civicparticipation.CivicParticipationProgramitem1Hr}
            />
          </div>
          <div className={Civicparticipation.CivicParticipationProgramitem3}>
            <p className={Civicparticipation.CivicParticipationProgramitem3p}>
              {this.props.language === 1
                ? this.state.Conducttrainingonenvironmental1mon
                : this.state.Conducttrainingonenvironmental1}
            </p>
            <hr
              className={Civicparticipation.CivicParticipationProgramitem1Hr}
            />
          </div>
          <div className={Civicparticipation.CivicParticipationProgramitem4}>
            <p className={Civicparticipation.CivicParticipationProgramitem4p}>
              {this.props.language === 1
                ? this.state.SetUp1mon
                : this.state.SetUp1}
            </p>
          </div>
        </div>
        <div>
          <br />
         
          <br /> <br />
      
        </div>

        
          
      </div>
      <div>
        <br />
        <br />
        <h1 className={Civicparticipation.CivicParticipationProgramPrimary}>
          <i className="fa fa-user" aria-hidden="true"></i>
          {this.props.language === 1
            ? this.state.text1mon
            : this.state.text1}
        </h1>
        <hr className={Civicparticipation.CivicParticipationProgramHr} />
        <div
          className={Civicparticipation.CivicParticipationProgramgridcontainer}
        >
          <div className={Civicparticipation.CivicParticipationProgramitem2}>
            <p className={Civicparticipation.CivicParticipationProgramitem2p}>
            {this.props.language === 1
            ? this.state.text2mon
            : this.state.text2}
            </p>
            <hr
              className={Civicparticipation.CivicParticipationProgramitem1Hr}
            />
          </div>
          <div className={Civicparticipation.CivicParticipationProgramitem2}>
            <p className={Civicparticipation.CivicParticipationProgramitem2p}>
              {this.props.language === 1
                ? this.state.text3mon
                : this.state.text3}
            </p>
            <hr
              className={Civicparticipation.CivicParticipationProgramitem1Hr}
            />
          </div>
          <div className={Civicparticipation.CivicParticipationProgramitem3}>
            <p className={Civicparticipation.CivicParticipationProgramitem3p}>
              {this.props.language === 1
                ? this.state.text4mon
                : this.state.text4}
            </p>
            <hr
              className={Civicparticipation.CivicParticipationProgramitem1Hr}
            />
          </div>
          <div className={Civicparticipation.CivicParticipationProgramitem4}>
            <p className={Civicparticipation.CivicParticipationProgramitem4p}>
              {this.props.language === 1
                ? this.state.text5mon
                : this.state.text5}
            </p>
            <hr
              className={Civicparticipation.CivicParticipationProgramitem1Hr}
            />
          </div>
          <div className={Civicparticipation.CivicParticipationProgramitem4}>
            <p className={Civicparticipation.CivicParticipationProgramitem4p}>
              {this.props.language === 1
                ? this.state.text6mon
                : this.state.text6}
            </p>
            <hr
              className={Civicparticipation.CivicParticipationProgramitem1Hr}
            />
          </div>
        </div>
        <div>
          <br />
         
          <br /> <br />
      
        </div>

        
          
      </div>a
      </div>
      
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.language.language,
  };
};


export default connect(mapStateToProps) (civic_participation);
