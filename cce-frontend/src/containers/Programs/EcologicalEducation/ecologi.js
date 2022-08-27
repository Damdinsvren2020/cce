import React, { Component } from "react";
import Ecologi from "./ecologi.css";
import {
  FaSchool,
  FaBook,
  FaChalkboardTeacher,
  FaChild,
  FaHandsHelping,
} from "react-icons/fa";
import { GiVillage, GiEarthAsiaOceania } from "react-icons/gi";
import { connect } from "react-redux";

class ecologi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header:" Ecological Education Program",
      text1:
        "Develop ecological education curriculum for Eco schools and camps and introduce into the Mongolian education system",
      text2:
        "Develop, publish, and disseminate ecological educational materials, textbooks and manuals",
      text3: "Train school teachers and environmentalists",
      text4:
        " Conduct training for local people and community environmental groups",
      text5:
        " Run an ecological summer camp for children and provide children with environmental education ",
      text6:
        " Support and promote environmental projection actions and initiatives of comminity",
      text7: "Coordinate international environmental exchange programs",
      headermon:"Экологийн боловсролын хөтөлбөр",
      text1mon:"Экологийн боловсролын хөтөлбөр орчуулан боловсруулж Монгол улсын боловсролын системд нэвтрүүлэх",
      text2mon:"Экологийн боловсролын ном сурах бичиг,гарын авлага боловсруулан хэвлэн нийтлэх,түгээх",
      text3mon:"ЕБС - ийн багш нар болон байгаль орчны мэргэжилтнүүдэд сургалт явуулах",
      text4mon:"Орон нутгийн иргэд болон байгаль орчны бүлгийн хүмүүст сургалт явуулах",
      text5mon:"Хүүхдүүдэд зориулсан экологийн боловсролын зуслан ажилуулах",
      text6mon:"Орон нутгийн иргэдийн байгаль орчинг хамгаалах санаачлага үйл ажиллагааг дэмжих",
      text7mon:"Байгаль орчны олон улсын солилцооны хөтөлбөрийг зохион байгуулах",
      header8:"Environmental Education Program K-8 Ecological Education Program (since 2011)",
      text12:
        "Project goal: To introduce ecological education program for eco-schools and summer camps in Mongolia",
      text13:
        "Project Supporters and Partners: US Department of Forestry, Department of Environment and Green Development, Environmental Protection Fund, Ministry of Education, Culture, Science and Sport. ",
      text14: "    3. The program provides ecological education to secondary school teachers of geography, biology, and eco-clubs, as well as to rangers, NGO staff, and summer camp teachers. With the support of the Ministry of Nature, Environment and Green Development and the Nature Conservation Fund, we have translated the K-8 program for ecological education and published a handbook on “Interesting eco-lessons” and a handbook for “Eco-schools and summer camps”. Project impact: The project has a training manual and curriculum. In total, more than 210 secondary school teachers and about 100 environmental and NGO activists were trained and provided with textbooks.",
      text15:
        "Project impact: The project has a training manual and curriculum. In total, more than 210 secondary school teachers and about 100 environmental and NGO activists were trained and provided with textbooks.",
      header16:
        "Ecoland summer camp (since 2012) ",
      text17:
        "Project objectives: To teach local people, especially children and youth, to study local environmental issues on their own, to solve problems, to learn how to influence public policy, and to have the knowledge and skills to be independent owners in the future.",
      text18: "Supporters: Japan International Cooperation Agency (JICA), US Department of Forestry, Yoroo soum governor's office, Citizens' Representative Meeting, Yeroo soum secondary school, volunteers",
      text19:"For the last 8 years, our organization has been implementing “LET'S PROTECT OUR LAND GAINING ECOLOGICAL EDUCATION” project in Selenge aimag Yoroo soum. Yoroo soum is located in the northern region of our country and forests cover more than 70% of its territory. It is rich in wildlife, birds, insects, various trees, fruits and plants. In recent years, there is no comprehensive measures have  been taken to study and protect forests, wildlife and plants, but the environment has been seriously damaged due to over-exploitation of natural resources. Therefore, we established a summer camp for ecological education in a beautiful natural place called Bayangol in Yeruu soum. In addition to children from Yoroo, Bugant, Javkhlant and Khuder soums, Ulaanbaatar and Darkhan, as well as from the United States and Russian children come to our summer camp.  It can accommodate up to 45 children per shift.",
      text20:"Foundation of ecological and democratic education was provided to more than 300 children and young people in summer camp. More than 100 local people have learned to test water quality. We have a training program for summer camps.",
      header8mon:"Экологийн Боловсрол Олгох К-8 хөтөлбөр ( 2011 оноос )",
      text12mon:"Төслийн зорилго: Эко сургууль, зусланд зориулсан экологийн боловсролын хөтөлбөрийг Монгол улсад нэвтрүүлэх нь ",
      text13mon:"Төслийн дэмжигч, хамтрагчид: АНУ-ын  Ойн Газар,  Байгаль Орчин Ногоон Хөгжлийн Яам, Байгаль хамгаалах сан,  БСШУЯ",
      text14mon:"Хөтөлбөрийн хүрээнд экологийн боловсролын сургалтыг ЕБС-ийн газар зүй, биологи, эко клубын багш нар болон байгалийн тусгай хамгаалалттай газрын байгаль хамгаалагч, төрийн бус байгууллагын ажилтнууд,  зуслангийн багш нарт сургалт явуулдаг. Байгаль Орчин Ногоон Хөгжлийн Яам, Байгал Хамгаалах Сангийн дэмжлэгээр Экологийн боловсролын К-8 хөтөлбөрийг орчуулан боловсруулж “Сонирхолтой эко хичээлүүд” гарын авлага, “Эко сургууль, зусланд зориулсан гарын авлага” боловсруулсан хэвлэсэн хөтөлбөр гарын авлагатай.",
      text15mon:"Төслийн үр нөлөө: Төслийн хүрээнд сургалтын гарын авлага, хөтөлбөртэй болсон. Нийтдээ ЕБС-ийн 210 гаруй  багш,  100 шахам байгаль орчны болон ТББ-ын идэвхтнүүд сургалтад хамрагдаж хичээлийн арга зүйд суралцан ном сурах бичгээр хангагдсан.",
      header16mon:"Эколэнд зуслан  (2012 оноос)",
      text17mon:"Төслийн зорилго: Орон нутгийн иргэд, ялангуяа хүүхэд залуучуудад орон нутгийнхаа байгаль хамгааллын асуудлыг өөрсдөө судлан мэдэж, тулгамдсан асуудлыг шийдвэрлэх, төрийн бодлогод нөлөөлөх арга барил эзэмшүүлж, цаашид бие даан тогтвортой үйл ажиллагаа явуулж орон нутгийнхаа эзэд байх мэдлэг, чадвартай болгох",
      text18mon:"Дэмжигчид:  Японы Жайка Олон улсын байгууллага, АНУ-ын Ойн Газар, Ерөө сумын Засаг даргын тамгын газар, Иргэдийн Төлөөлөгчдийн Хурал, Ерөө сумын ЕБС, сайн дурын ажилтнууд",
      text19mon:"Сүүлийн 8 жилийн турш манай байгууллага “ЭКОЛОГИЙН БОЛОВСРОЛООР ЗЭВСЭГЛЭН ЭХ НУТГАА ХАМГААЛЪЯ” төсөл Сэлэнгэ аймгийн Ерөө суманд хэрэгжүүлж байна. Сэлэнгэ аймгийн Ерөө сум нь манай орны хойд бүсэд оршдог, нийт нутаг дэвсгэрийнх нь 70 гаруй хувийг ой эзэлдэг. Зэрлэг ан амьтан, шувуу, шавьж хорхой, төрөл бүрийн мод, жимс, ургамалаар баялаг тансаг сайхан байгальтай. Сүүлийн жилүүдэд ой, зэрлэг амьтан, ургамал судлах, хамгаалах нэгдсэн арга хэмжээ явагдаагүй, харин байгалийн баялаг ашиглах үйл ажиллагаа хэт эрчимтэй явагдсан тул байгаль орчин ихээр сүйтгэгдсэн. Иймээс Ерөө сумын Баянгол хэмээх байгалийн үзэсгэлэнт газарт Экологийн боловсролын зуны зуслан байгуулж зорилготой ажиллаж байна. Манай зусланд Сэлэнгэ аймгийн Ерөө, Бугант, Жавхлант, Хүдэр зэрэг сумд болон Улаанбаатар, Дархан хотоос хүүхдүүдээс гадна АНУ, ОХУ-аас хүүхдүүд амрахаар ирдэг. Нэг ээлжиндээ 45 хүртэл хүүхэд амрах багтаамжтай.",
      text20mon:"300 гаруй хүүхэд залуус зусланд амарч, экологийн болон ардчиллын боловсролын суурь тавигдсан. Орон нутгийн 100 гаруй иргэд усны чанар шалгах тест хийж сурсан. Зусланд зориулсан сургалтын хөтөлбөртэй болсон.",

    };
  }
  render() {
    return (
      <div>
        <br />
        <br />
        <h1 className={Ecologi.ecoGarchig}>
          <i class="fa fa-hand-peace-o" aria-hidden="true"></i>
          {this.props.language === 1
            ? this.state.headermon
            : this.state.header}
        </h1>
        <hr className={Ecologi.ecozuraas} />
        <br />
        <br />
        <div className={Ecologi.ecorow1}>
          <div className={Ecologi.ECO}>
            {" "}
            <FaSchool className={Ecologi.ecoicon} />
            <p> 
              {this.props.language === 1
            ? this.state.text1mon
            : this.state.text1}
              </p>{" "}
          </div>
          <div className={Ecologi.ECO}>
            {" "}
            <FaBook className={Ecologi.ecoicon} />
            <p> 
            {this.props.language === 1
            ? this.state.text2mon
            : this.state.text2}
              </p>{" "}
          </div>
          <div className={Ecologi.ECO}>
            {" "}
            <FaChalkboardTeacher className={Ecologi.ecoicon} />
            <p> 
            {this.props.language === 1
            ? this.state.text3mon
            : this.state.text3}
             </p>{" "}
          </div>
        </div>
        <div className={Ecologi.ecorow2}>
          <div className={Ecologi.ECO}>
            {" "}
            <GiVillage className={Ecologi.ecoicon} />
            <p> 
            {this.props.language === 1
            ? this.state.text4mon
            : this.state.text4}
              </p>{" "}
          </div>
          <div className={Ecologi.ECO}>
            {" "}
            <FaChild className={Ecologi.ecoicon} />
            <p>
            {this.props.language === 1
            ? this.state.text5mon
            : this.state.text5}
              </p>{" "}
          </div>
          <div className={Ecologi.ECO}>
            {" "}
            <FaHandsHelping className={Ecologi.ecoicon} />
            <p>
            {this.props.language === 1
            ? this.state.text6mon
            : this.state.text6}
               </p>{" "}
          </div>
          <div className={Ecologi.ECO}>
            {" "}
            <GiEarthAsiaOceania className={Ecologi.ecoicon} />
            <p> 
            {this.props.language === 1
            ? this.state.text7mon
            : this.state.text7}
              </p>{" "}
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <h1 className={Ecologi.ecoGarchig}>
          <i class="fa fa-hand-peace-o" aria-hidden="true"></i>
          {this.props.language === 1
            ? this.state.header8mon
            : this.state.header8}
        </h1>
        <hr className={Ecologi.ecozuraas} />
        <br />
        <br />
        <div className={Ecologi.ecorow1}>
        </div>
        <div className={Ecologi.ecorow2}>
          <div className={Ecologi.ECO}>
            {" "}
            <GiVillage className={Ecologi.ecoicon} />
            <p> 
            {this.props.language === 1
            ? this.state.text12mon
            : this.state.text12}
              </p>{" "}
          </div>
          <div className={Ecologi.ECO}>
            {" "}
            <FaChild className={Ecologi.ecoicon} />
            <p>
            {this.props.language === 1
            ? this.state.text13mon
            : this.state.text13}
              </p>{" "}
          </div>
          <div className={Ecologi.ECO}>
            {" "}
            <FaHandsHelping className={Ecologi.ecoicon} />
            <p>
            {this.props.language === 1
            ? this.state.text14mon
            : this.state.text14}
               </p>{" "}
          </div>
          <div className={Ecologi.ECO}>
            {" "}
            <GiEarthAsiaOceania className={Ecologi.ecoicon} />
            <p> 
            {this.props.language === 1
            ? this.state.text15mon
            : this.state.text15}
              </p>{" "}
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <h1 className={Ecologi.ecoGarchig}>
          <i class="fa fa-hand-peace-o" aria-hidden="true"></i>
          {this.props.language === 1
            ? this.state.header16mon
            : this.state.header16}
        </h1>
        <hr className={Ecologi.ecozuraas} />
        <br />
        <br />
        <div className={Ecologi.ecorow1}>
        </div>
        <div className={Ecologi.ecorow2}>
          <div className={Ecologi.ECO}>
            {" "}
            <GiVillage className={Ecologi.ecoicon} />
            <p> 
            {this.props.language === 1
            ? this.state.text17mon
            : this.state.text17}
              </p>{" "}
          </div>
          <div className={Ecologi.ECO}>
            {" "}
            <FaChild className={Ecologi.ecoicon} />
            <p>
            {this.props.language === 1
            ? this.state.text18mon
            : this.state.text18}
              </p>{" "}
          </div>
          <div className={Ecologi.ECO}>
            {" "}
            <FaHandsHelping className={Ecologi.ecoicon} />
            <p>
            {this.props.language === 1
            ? this.state.text19mon
            : this.state.text19}
               </p>{" "}
          </div>
          <div className={Ecologi.ECO}>
            {" "}
            <GiEarthAsiaOceania className={Ecologi.ecoicon} />
            <p> 
            {this.props.language === 1
            ? this.state.text20mon
            : this.state.text20}
              </p>{" "}
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    language: state.language.language,
  };
};

export default connect(mapStateToProps) (ecologi);
