import React, { Component } from "react";
import Civicparticipation from "./civic_participation.css";
import { connect } from "react-redux";
class civic_participation extends Component {
  state = {
    headereng: "ECOLOGICAL EDUCATION SUMMER CAMP PROJECT (2009-2011)",
    p1eng:
      "Project goals: Increase ecological education of local children and youth, where mining industry is vastly developed, and provide them with the understanding, skills and attitudes to love the home land and protect the environment. ",
    p2eng:
      "Project donor and partners: Japan International Cooperation Agency JICA, Governor’s office, Yoroo soum, Selenge province, Yoroo soum School and teachers, volunteers",
    p3eng:
      "Project activities: A children's summer camp was established in Bayangol, Yeruu soum, Selenge aimag, near the Bold Tumur Yeruu river iron mine. The summer camp has developed an ecological and civic education program to change children's attitudes and provide basic knowledge of civic participation in solving local problems. Teachers from Yeruu soum and Bugant village were involved in ecological education training. ",
    p4eng:
      "Project impacts: Established an ecological education camp where local children and children from Ulaanbaatar, Darkhan and Selenge can go in summer and increase their knowledge on environment protection.",
    headereng2:
      "Introducing Ecological education curriculum K-8 to Mongolian educational institute ( 2011-2013 )",
    p5eng:
      "Project goals: Introduce the US K-8 Ecological Education Program to Mongolian schools and improve the ecological education and training methodology for secondary school teachers and rangers.",
    p6eng:
      "Project donor and partners: US Department of Forestry, Ministry of Environment and Green Development, Conservation Fund, Mongolia",
    p7eng:
      "Project activities: During the project, ecological education training was provided to the teachers of geography and biology of secondary schools in Ulaanbaatar, Mungunmorit, Tuv aimag, Yeruu soum, Selenge aimag, and Bugant village, as well as rangers and NGO staff. With the support of the Ministry of Nature, Environment and Green Development and the Environmental Protection Fund, the K-8 Ecological Education Program was translated and a textbook was published. In 2013, a retraining of the trainers was conducted in Ulaanbaatar, and the program was introduced to 50 primary school teachers in 25 schools in Ulaanbaatar.",
    p8eng:
      "Project impacts: “Interesting eco-lessons” textbook was developed,  ecological education programs  for summer camps were developed, as well as trainers were trained.",
    headereng3:
      "A small project “Implementing environmental education in summer camps” (2014)",
    p9eng:
      "Project goal: To teach children basics of ecological education and attitudes to learn and protect the homeland and environment based on summer camps curriculum",
    p10eng:
      "Project donor and partners: International development cooperation, Czech Republic ",
    p11eng:
      "Project activities: Handbook for eco schools, and eco clubs was developed and published.  The training was delivered to the teachers and students of 5 soums of Khovd, Govi-Altai, provinces  and the handbooks were distributed. Moreover, the rangers of Gobi National park B and local activists were involved in ecological training.  30 instructors of summer camps near Ulaanbaatar were trained.",
    p12eng:
      "Project impacts: Developed a training manual for summer camps and eco-clubs. Ecological training was provided to 50 teachers, 15 rangers and specialists on order to improve their knowledge and skills. ",
    headereng4:
      "ENVIRONMENTAL EXCHANGE PROGRAM BETWEEN THE UNITED STATES, RUSSIA AND MONGOLIA (2007-2019)",
    p13eng:
      "Project objectives: The purpose of this exchange is to share knowledge and experience with Russian and Mongolian and American partners and colleagues in three countries regarding environmental and cultural impacts of resource development and management of ecological conditions at mining and energy sites.  Participants gain first-hand experience about mining techniques and environmental monitoring, pollution control and waste management technologies and visit full-scale renewable energy production sites.  The exchange provides participants with tools to address mining, energy and water protection concerns at home more effectively. ",
    p14eng:
      "Project donors and partners;  Trust for Mutual Understanding of New York, Southwest Research and Information Center, NM, USA",
    p15eng:
      "Project activities:  The exchange program provided a well-designed and unique program focused on concerns of community leaders and specialists from the transnational Lake Baikal Watershed in Russia and Mongolia. In the part of the US Program participants travelled through the Southwest US and observe operating and reclaimed mines, hydropower and flood control dams, renewable energy sites and communities affected by mining and renewable energy, and community–based cultural activities. In summer, participants travel through Mongolia and Russia a week in each country.",
    p16eng:
      "Project impacts: The exchange program lasted for 12 years and was attended by 2-3 environmental activists from each country each year. A total of more than 50 people from Mongolia participated in the exchange and gained knowledge and information on the US and Russian environmental, mining, renewable energy and conservation practices. Network of environmental activists has been established.",

    headermon: "“Экологийн боловсролын зуслан байгуулах” төсөл (2009-2011он)",
    p1mon:
      "Төслийн зорилго: Уул уурхай ихээр эрхэлж буй орон нутгийн хүүхэд залуучууд, иргэдийн экологийн боловсролыг нэмэгдүүлсэнээр нутаг орноо хайрлах, байгаль орчноо танин мэдэж хамгаалах ойлголт, чадвар, хандлагыг суулгах.",
    p2mon:
      "Төслийн санхүүжүүлэгч, дэмжигчид: Японы Жайка олон улсын байгуулллага , Ерөө сумын ЗДТГ, ЕБС, сайн дурын ажилтнууд, иргэд.",
    p3mon:
      "Төслийн үйл ажиллагаа: Сэлэнгэ амйгийн Ерөө сумын Баянгол хэмээх газарт Болд Төмөр Ерөө гол төмрийн уурхайн ойролцоо хүүхдийн зуслан байгуулсан. Зуслан экологийн болон иргэний боловсролын хөтөлбөртэй болж хүүхдийн хандлагыг өөрчлөх , орон нутгийн асуудлыг шийдвэрлэхэд оролцох иргэний оролцооны суурь мэдлэгийг олгож эхэлсэн. Ерөө сум, Бугант тосгоны багш нарыг экологийн боловсролын сургалтад хамруулсан. ",
    p4mon:
      "Төслийн үр нөлөө: Орон нутгийн болон Улаанбаатар, дархан, Сэлэнгийн хүүхдүүд байгалын сайханд амрахын зэрэгцээ  мэдлэг мэдээллээ дээшлүүлэх боломжтой эколлогийн боловсролын зуслантай болсон ",
    headermon2:
      "“АНУ-ын Экологийн Боловсрол Олгох К-8 хөтөлбөрийг Монголд нэвтрүүлэх нь” төсөл (2011-2013 ондхэрэгжүүлсэн)",
    p5mon:
      "Төслийн зорилго: АНУ-ын Экологийн боловсролын Е-8 хөтөлбөрийг Монгол улсын сургуулиудад танилцуулан нэвтрүүлэх, ЕБС-ийн багш нар, байгаль хамгаалагчдын экологийн боловсрол, сургалтын арга зүйг дээшлүүлэх.",
    p6mon:
      "Төслийн санхүүжүүлэгч, хамтрагч: АНУ-ын Ойн газар, Байгаль Орчин Ногоон Хөгжлийн Яам, Байгал Хамгаалах Сан.",
    p7mon:
      "Төслийн үйл ажиллагаа: Төслийн хугацаанд Улаанбаатар, Төв аймгийн Мөнгөнморьт, Сэлэнгэ аймгийн Ерөө сум, Бугант тосгоны ЕБС-ийн Газарзүй, Биологийн багш нар болон байгалийн тусгай хамгаалалттай газар нутгийн хамгаалагч, төрийн бус байгууллагын ажилтнуудад экологийн боловсролын сургалтыг зохион байгуулсан. Байгаль Орчин Ногоон Хөгжлийн Яам, Байгал Хамгаалах Сангийн дэмжлэгээр Экологийн боловсролын К-8 хөтөлбөрийг орчуулан боловсруулж гарын авлага хэвлэн түгээв. 2013 онд Улаанбаатар хотод сургагч багшийн давтан сургалт, Улаанбаатар хотын 25 сургуулийн бага ангийн 50 багшид хөтөлбөр танилцуулах сургалт явуулсан. ",
    p8mon:
      "Төслийн үр нөлөө: “Сонирхолтой эко хичээлүүд” сурах бичиг боловсруулж, экологийн боловсролын хөтөлбөртэй болж, сургагч багш нар бэлтгэгдсэн.",
    headermon3:
      "“Экологийн боловсролыг зуны зусланд хэрэгжүүлэх нь”төсөл (2014)",
    p9mon:
      "Төслийн зорилго: Зуны зусланг түшиглэн хүүхдүүдэд экологийн боловсрол олгох замаар  байгаль орчноо танин мэдэж, хамгаалах мэдлэг, хандлагыг төлөвшүүлэх.",
    p10mon:
      "Төслийн санхүүжүүлэгч: Бүгд Найрамдах Чех улсын Олон Улсын Хамтын Ажиллагааны Нийгэмлэг.",
    p11mon:
      "Төслийн үйл ажиллагаа: “Эко сургууль, зусланд зориулсан гарын авлага”  боловсруулан , Ховд, Говь-Алтай аймгийн 5 сумын сургуулийн эко клуб болон багш нарт сургалт хийж түгээсэн. Мөн Говийн Б бүсийн дархан цаазат газрын хамгаалалтын ажилтан, байгаль хамгаалагч нарт сургалт зохион байгуулан хамтран ажилласан. ",
    p12mon:
      "Төслийн үр нөлөө: Зуслан, эко клубт зориулсан сургалтын гарын авлага боловсруулсан.  50 багш, 15 байгаль хамгаалагч, мэрэгжилтнүүдэд сургалт зохиог байгуулж арга зүйгээр хангасан. ",
    headermon4:
      "АНУ, ОХУ, МОНГОЛ ГУРВАН УЛСЫН БАЙГАЛЬ ОРЧНЫ СОЛИЛЦООНЫ ХӨТӨЛБӨР (2007-2019)",
    p13mon:
      "Төслийн зорилго: АНУ, Монгол, Оросын Холбооны улсын байгаль хамгаалах мэргэжлийн хүмүүс болон төрийн бус байгууллагын төлөөлөгчид, орон нутгийн идэвхтнүүд улс орнуудын байгаль орчин, уул уурхай, нөхөн сэргээлт, сэргээгдэх эрчим хүчний салбарын сайн болон муу жишээ, туршлагатай танилцан харилцан бие биенээс суралцан, муу туршлагыг давтахгүй байх, сайн туршлагыг хэрэгжүүлэх боломж олгодог давуу талтай.",
    p14mon:
      "Төслийн санхүүжүүлэгч, хамтрагч: Trust for Mutual Understanding of New York, АНУ-ын Нью Мексико муж дахь Баруун Өмнөд Эргийн Судалгаа Шинжилгээний Төв ТББ.",
    p15mon:
      "Төслийн үйл ажиллагаа: Хөтөлбөрийн хүрээнд гурван орны оролцогчид  АНУ -ын Нью Мексик, Аризона, Юута, Невада, Калифорни зэрэг 5  мужаар аялан уул уурхайн нөхөн сэргээлт, байгаль орчны хамгаалалт, сэргээгдэх эрчим хүчний байгууламжууд, байгалийн үзэсгэлэнт газрууд, аялал жуулчлалын цогцолбор газрыг үзэж суралцахаас гадна АНУ-ын соёл түүхтэй танилцах ховорхон боломжийг олгодог өвөрмөц хөтөлбөр юм. Зун нь оролцогчид ОХУ-ын Сибирь орчмоор аялан мөн байгаль орчин, уул уурхайн асуудал нөхөн сэргээлттэй танилцдаг.Дараа нь Монголоор аялан уул уурхайн нөхөн сэргээлт, байгаль орчны асуудалтай танилцахын зэрэгцээ оролцогчид Монгол орны түүх соёлыг мэдэх боломжтой юм.Хөтөлбөрийн хүрээнд байгаль орчны төрийн болон төрийн бус байгууллага, яам, агентлагуудтай уулзалт хэлэлцүүлэг хийн санал бодлоо солилцдог уламжлалтай.",
    p16mon:
      "Төслийн үр нөлөө: Солилцооны хөтөлбөр 12 жил үргэлжилж жил бүр 2-3 байгаль орчны идэвхтэн мэргэжилтнүүд оролцож,  Монголоос нийтдээ 50 гаруй хүн   АНУ, Оросын Холбооны улсын байгаль орчин, уул уурхайн нөхөн сэргээлт, сэргээгдэх эрчим хүч, байгаль хамгааллын туршлагатай танилцаж, харилцан мэдээлэл солилцож хамтын ажиллагаа үүссэн.",
  };
  render() {
    return (
      // 1 dugeer heseg
      <div>
        <br />
        <br />
        <h1 className={Civicparticipation.CivicParticipationProgramPrimary}>
          <i className="fa fa-user" aria-hidden="true"></i>
          {this.props.language === 1
            ? this.state.headermon
            : this.state.headereng}
        </h1>
        <hr className={Civicparticipation.CivicParticipationProgramHr} />
        <div
          className={Civicparticipation.CivicParticipationProgramgridcontainer}
        >
          <div className={Civicparticipation.CivicParticipationProgramitem2}>
            <p className={Civicparticipation.CivicParticipationProgramitem2p}>
              {this.props.language === 1 ? this.state.p1mon : this.state.p1eng}
            </p>
            <hr
              className={Civicparticipation.CivicParticipationProgramitem1Hr}
            />
          </div>
          <div className={Civicparticipation.CivicParticipationProgramitem2}>
            <p className={Civicparticipation.CivicParticipationProgramitem2p}>
              {this.props.language === 1 ? this.state.p2mon : this.state.p2eng}
            </p>
            <hr
              className={Civicparticipation.CivicParticipationProgramitem1Hr}
            />
          </div>
          <div className={Civicparticipation.CivicParticipationProgramitem3}>
            <p className={Civicparticipation.CivicParticipationProgramitem3p}>
              {this.props.language === 1 ? this.state.p3mon : this.state.p3eng}
            </p>
            <hr
              className={Civicparticipation.CivicParticipationProgramitem1Hr}
            />
          </div>
          <div className={Civicparticipation.CivicParticipationProgramitem4}>
            <p className={Civicparticipation.CivicParticipationProgramitem4p}>
              {this.props.language === 1 ? this.state.p4mon : this.state.p4eng}
            </p>
          </div>
        </div>
        <div>
          <br />
          <br /> <br />
        </div>
        {/* 2 dugaar heseg */}
        <br />
        <br />
        <h1 className={Civicparticipation.CivicParticipationProgramPrimary}>
          <i className="fa fa-user" aria-hidden="true"></i>
          {this.props.language === 1
            ? this.state.headermon2
            : this.state.headereng2}
        </h1>
        <hr className={Civicparticipation.CivicParticipationProgramHr} />
        <div
          className={Civicparticipation.CivicParticipationProgramgridcontainer}
        >
          <div className={Civicparticipation.CivicParticipationProgramitem2}>
            <p className={Civicparticipation.CivicParticipationProgramitem2p}>
              {this.props.language === 1 ? this.state.p5mon : this.state.p5eng}
            </p>
            <hr
              className={Civicparticipation.CivicParticipationProgramitem1Hr}
            />
          </div>
          <div className={Civicparticipation.CivicParticipationProgramitem2}>
            <p className={Civicparticipation.CivicParticipationProgramitem2p}>
              {this.props.language === 1 ? this.state.p6mon : this.state.p6eng}
            </p>
            <hr
              className={Civicparticipation.CivicParticipationProgramitem1Hr}
            />
          </div>
          <div className={Civicparticipation.CivicParticipationProgramitem3}>
            <p className={Civicparticipation.CivicParticipationProgramitem3p}>
              {this.props.language === 1 ? this.state.p7mon : this.state.p7eng}
            </p>
            <hr
              className={Civicparticipation.CivicParticipationProgramitem1Hr}
            />
          </div>
          <div className={Civicparticipation.CivicParticipationProgramitem4}>
            <p className={Civicparticipation.CivicParticipationProgramitem4p}>
              {this.props.language === 1 ? this.state.p8mon : this.state.p8eng}
            </p>
          </div>
        </div>
        <div>
          <br />
          <br /> <br />
        </div>
        {/* 3 dugaar heseg */}
        <br />
        <br />
        <h1 className={Civicparticipation.CivicParticipationProgramPrimary}>
          <i className="fa fa-user" aria-hidden="true"></i>
          {this.props.language === 1
            ? this.state.headermon3
            : this.state.headereng3}
        </h1>
        <hr className={Civicparticipation.CivicParticipationProgramHr} />
        <div
          className={Civicparticipation.CivicParticipationProgramgridcontainer}
        >
          <div className={Civicparticipation.CivicParticipationProgramitem2}>
            <p className={Civicparticipation.CivicParticipationProgramitem2p}>
              {this.props.language === 1 ? this.state.p9mon : this.state.p9eng}
            </p>
            <hr
              className={Civicparticipation.CivicParticipationProgramitem1Hr}
            />
          </div>
          <div className={Civicparticipation.CivicParticipationProgramitem2}>
            <p className={Civicparticipation.CivicParticipationProgramitem2p}>
              {this.props.language === 1
                ? this.state.p10mon
                : this.state.p10eng}
            </p>
            <hr
              className={Civicparticipation.CivicParticipationProgramitem1Hr}
            />
          </div>
          <div className={Civicparticipation.CivicParticipationProgramitem3}>
            <p className={Civicparticipation.CivicParticipationProgramitem3p}>
              {this.props.language === 1
                ? this.state.p11mon
                : this.state.p11eng}
            </p>
            <hr
              className={Civicparticipation.CivicParticipationProgramitem1Hr}
            />
          </div>
          <div className={Civicparticipation.CivicParticipationProgramitem4}>
            <p className={Civicparticipation.CivicParticipationProgramitem4p}>
              {this.props.language === 1
                ? this.state.p12mon
                : this.state.p12eng}
            </p>
          </div>
        </div>
        <div>
          <br />
          <br /> <br />
        </div>
        {/* 4 dugeer heseg */}
        <br />
        <br />
        <h1 className={Civicparticipation.CivicParticipationProgramPrimary}>
          <i className="fa fa-user" aria-hidden="true"></i>
          {this.props.language === 1
            ? this.state.headermon4
            : this.state.headereng4}
        </h1>
        <hr className={Civicparticipation.CivicParticipationProgramHr} />
        <div
          className={Civicparticipation.CivicParticipationProgramgridcontainer}
        >
          <div className={Civicparticipation.CivicParticipationProgramitem2}>
            <p className={Civicparticipation.CivicParticipationProgramitem2p}>
              {this.props.language === 1
                ? this.state.p13mon
                : this.state.p13eng}
            </p>
            <hr
              className={Civicparticipation.CivicParticipationProgramitem1Hr}
            />
          </div>
          <div className={Civicparticipation.CivicParticipationProgramitem2}>
            <p className={Civicparticipation.CivicParticipationProgramitem2p}>
              {this.props.language === 1
                ? this.state.p14mon
                : this.state.p14eng}
            </p>
            <hr
              className={Civicparticipation.CivicParticipationProgramitem1Hr}
            />
          </div>
          <div className={Civicparticipation.CivicParticipationProgramitem3}>
            <p className={Civicparticipation.CivicParticipationProgramitem3p}>
              {this.props.language === 1
                ? this.state.p15mon
                : this.state.p15eng}
            </p>
            <hr
              className={Civicparticipation.CivicParticipationProgramitem1Hr}
            />
          </div>
          <div className={Civicparticipation.CivicParticipationProgramitem4}>
            <p className={Civicparticipation.CivicParticipationProgramitem4p}>
              {this.props.language === 1
                ? this.state.p16mon
                : this.state.p16eng}
            </p>
          </div>
        </div>
        <div>
          <br />
          <br /> <br />
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

export default connect(mapStateToProps)(civic_participation);
