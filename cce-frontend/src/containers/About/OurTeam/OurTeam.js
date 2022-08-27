import React, { Component } from "react";
import OurTeamCard from "../../../components/UI/Card/OurTeamCard/Card";
import MenuTitle from "../../../components/UI/MenuTitle/MenuTitle";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import renderHTML from "react-render-html";
import style from "./style.css";
import {
  ariunaa,
  azjargal,
  Battumur,
  chimed,
  enkhjargal,
  gantumur,
  narangerel,
  Odonchimeg,
  Sumya,
  Tungaa,
  Urtnasan,
  Uyangaa,
} from "../../../assets/images/AboutUs/OurTeam";

class OurTeam extends Component {
  // componentDidMount() {
  //   this.props.onFetchOurTeam();
  // }
  constructor(props) {
    super(props);
  }

  state = {
    members: [
      {
        id: "naraOurTeam",
        name: "DR. NARANGEREL RINCHIN",
        job: "EXECUTIVE DIRECTOR | CO-FOUNDER",
        img: narangerel,
        text:
          "2000 – current Executive Director of the Center for Citizenship Education 1996 – 2000 Member of the State Great Khural; Chairman of the Standing Committee on Public Policy at the State Great Khural (Parliament of Mongolia) 1992 – 1996 Secretary General of the Central Asian Development Foundation (later changed into Non-governmental organization the Center for Citizenship Education) 1990 – 1991 Secretary of the Social Democratic Movement 1986 – 1989 Ph.D. in Linguistics at the Moscow State Pedagogical University",
      },
      {
        id: "ariuOurTeam",
        name: "ARIUNTSETSEG BATMUNKH",
        job: "PROGRAM DIRECTOR",
        img: ariunaa,
        text:
          "Masters of Arts Degree in Russian, English Language Teacher Has a 20 year career in Education field, for the past 10 years has been with the Center of Citizenship education as Manager, Program Director.",
      },
      {
        id: "chimedOurTeam",
        name: "CHIMED OCHIRBAT",
        job: "ADMINISTRATIVE AND FINANCIAL OFFICER",
        img: chimed,
        text:
          "Bachelor of Science Degree in Accounting and Business Had a 30 year career at the Ministry of Economy and General Department of Taxation in managerial positions.Joined the Center for Citizenship Education in 2013.",
      },
      {
        id: "enkhOurTeam",
        name: "ENKHJARGAL BANZRAGCH",
        job: "PROGRAM OFFICER",
        img: enkhjargal,
        text:
          "She is Social worker and Human rights activist. Since 2007, when was a student she starting as a volunteer in civil society organizations. Her value is promote human rights, democracy and gender justice for youth. Joined the Center for Citizenship Education in 2013.",
      },
      {
        id: "azOurTeam",
        name: "AZJARGAL RENCHINDORJ",
        job: "TRAINING TEACHER",
        img: azjargal,
        text:
          "Teacher of Business Analysis at the Mongol Aspiration Laboratory School under the jurisdiction of the Ministry of Education and Science.Training Teacher for our Project Citizen and Democratic Memory Bank Project.",
      },
      {
        id: "tungOurTeam",
        name: "TUNGALAGBAYAR TSAGAANTSOOJ",
        job: "TRAINING TEACHER",
        img: Tungaa,
        text:
          "Teacher of History, Social Studies and Civic Education at the 6thSecondary School of Ulaanbaatar.Training teacher for theProject Citizen,the Self-Governed Student Organization (SSO) program and the Memory Bank Project.",
      },
      {
        id: "ganOurTeam",
        name: "GANTUMUR DAVAA",
        job: "TRAINING TEACHER",
        img: gantumur,
        text:
          "Teacher of Historyourteam, Social Studies.Senior training teacher of spreading Education of Democracy.Training teacher for the Project Citizen, the Self-Governed Student Organization (SSO) program",
      },
      {
        id: "uyangaOurTeam",
        name: "UYANGA SAINBAYAR",
        job: "TRAINING TEACHER",
        img: Uyangaa,
        text:
          "Teacher of History, Social Studies and Civic Education at the 6th Secondary School of Ulaanbaatar.Training teacher for the Project Citizen, the Self-Governed Student Organization (SSO) program and the Memory Bank Project.She is one of the contributing authors of Civic Education textbooks of General Educations Schools of Mongolia.",
      },
      {
        id: "sumOurTeam",
        name: "SUMYA NARANTUYA",
        job: "TRAINING TEACHER",
        img: Sumya,
        text:
          "Teacher of History, Social Studies and Civic Education at the 53rd Secondary School of the Bayanzurkh District of Ulaanbaatar.Training teacher for the Project Citizen, the Self-Governed Student Organization (SSO) program and the Memory Bank Project.",
      },
      {
        id: "urtnasaOurTeam",
        name: "URTNASAN SOVD",
        img: Urtnasan,
        job: "TRAINING TEACHER",
        text:
          "Instruction’s Manager at the 2nd Secondary School of Erdenet city of Orkhon Province. Training teacher for the Self-Governed Student Organization (SSO) program and the Memory Bank Project.",
      },
      {
        id: "battuOurTeam",
        name: "BATTUMUR PUREVSUREN",
        job: "TRAINING TEACHER",
        img: Battumur,
        text:
          "Teacher of History, Philosophy and Civic Education at the 13th Secondary School of the Bayangol District of Ulaanbaatar.Training teacher for the Project Citizen, the Self-Governed Student Organization (SSO) program.",
      },
      {
        id: "odonOurTeam",
        name: "ODONCHIMEG SESEER",
        img: Odonchimeg,
        job: "VOLUNTEER",
        text:
          "Odonchimeg Seseer started out her professional career with our organization. Currently she works at the Office of the President of Mongolia and volunteers at the Center for Citizenship Education.",
      },
    ],
    members1: [
      {
        id: "naraOurTeam",
        name: "Ринчингийн Нарангэрэл",
        job: "Гүйцэтгэх захирал | Санаачлагч",
        img: narangerel,
        text:
          "ИБТ-ийн захирал,хэл шинжлэлийн доктор,Монгол улсын гавьяат багш Махаан овогт Ринчингийн Нарангэрэл нь 1990 оноос Монголд ардчилалыг хөгжүүлэх үйлсэд гар бие оролцож явсан,МУЙС,Гадаад хэлний дээд сургуулийн багш,УИХ гишүүн,Нийгмийн бодлогын байнгын хорооны дарга асан 1992 оноос ардчилалын боловсролыг Монгол улсад түгээх үйлст зүтгэж яваа нэгэн юм.УИХ байхдаа Төрийн бус байгуулагуудын тухай хуулийг санаачилж ажлын хэсгийг ахлан батлуулсан.Одоо МУ ерөнхийлөгчийн орон тооны бус зөвлөхөөр ажиллаж байна.",
      },
      {
        id: "ariuOurTeam",
        name: "Батмөнхийн Ариунцэцэг",
        job: "Хөтөлбөрийн захирал",
        img: ariunaa,
        text:
          "Орос Англи хэлний багш Боловсорлын ухааны магистр,20 жил боловсролын салбарт ажиллаж байгаагаас сүүлийн 10 жил байгууллагын менежирт,төслийн удирддагчаар ажиллаж байна.",
      },
      {
        id: "azOurTeam",
        name: "Рэнчиндоржийн Азжаргал",
        job: "Сургагч багш",
        img: azjargal,
        text:
          "БШУЯамны харъяа Олон Улсын лаботатори Монгол Тэмүүлэл сургуулийн бизнес судлалын багш. Иргэн төслийн сургагч багш, шүүгч. Ардчиллын Дурсамжийн сан төслийн сургагч багш.",
      },
      {
        id: "tungOurTeam",
        name: "ЦАГААНЦООЖИЙН ТУНГАЛАГБАЯР",
        job: "Сургагч багш",
        img: Tungaa,
        text:
          "Нийслэлийн 6 дугаар дунд сургуулийн Түүх, Нийгмийн Ухаан, Иргэний боловсролын багш. Иргэн төсөл, Сурагчдын өөрийн Удирдлагын сургагч багш.Ардчиллын Дурсамжийн сан төслийн сургагч багш.",
      },
      {
        id: "ganOurTeam",
        name: "ДАВААГИЙН ГАНТӨМӨР",
        job: "Сургагч багш",
        img: gantumur,
        text:
          "Түүх нийгэм, эрх зүйч багш, Ардчиллын боловсролыг түгээх ахлах, сургагч багш. Иргэн төсөл, Сурагчдын өөрийн Удирдлагын сургагч багш",
      },
      {
        id: "uyangaOurTeam",
        name: "САЙНБАЯРЫН УЯНГА",
        job: "Сургагч багш",
        img: Uyangaa,
        text:
          "Нийслэлийн 6 дугаар дунд сургуулийн Түүх, Нийгмийн Ухаан, Иргэний боловсролын багш, Иргэн төсөл, Сурагчдын өөрийн Удирдлагын сургагч багш.6 - 9 ангийн Иргэний Боловсрол сурах бичгийн хамтран зохиогч. Ардчиллын Дурсамжийн сан төслийн сургагч багш..",
      },
      {
        id: "sumOurTeam",
        name: "НАРАНТУЯАГИЙН СУМЪЯА",
        job: "Сургагч багш",
        img: Sumya,
        text:
          "Нийслэлийн БЗДүүргийн 53 дугаар сургуулийн Түүх Нийгмийн Ухаан, Иргэни боловсролын багш. Иргэн төсөл, Сурагчдын өөрийн Удирдлагын сургагч багш.Ардчиллын Дурсамжийн сан төслийн сургагч багш.",
      },
      {
        id: "urtnasaOurTeam",
        name: "СОВДЫН УРТНАСАН",
        img: Urtnasan,
        job: "Сургагч багш",
        text:
          "Орхон аймгийн Эрдэнэт хотын 2 дугаар 10-н жилийн сургуулийн сургалтын менежер. Иргэн төсөл, Сурагчдын өөрийн Удирдлагын сургагч багш.Ардчиллын Дурсамжийн сан төслийн сургагч багш.",
      },
      {
        id: "battuOurTeam",
        name: "ПҮРЭВСҮРЭНГИЙН БАТТӨМӨР",
        job: "Сургагч багш",
        img: Battumur,
        text:
          "Нийслэлийн БГДүүргийн 13 дугаар дунд сургуулийн Түүх Философи, Иргэний боловсролын багш. Иргэн төсөл, Сурагчдын өөрийн Удирдлагын сургагч багш",
      },
      {
        id: "odonOurTeam",
        name: "СЭСЭЭРИЙН ОДОНЧИМЭГ",
        img: Odonchimeg,
        job: "САЙН ДУРЫН АЖИЛТАН",
        text:
          "Сэсээрийн Одончимэг нь хөдөлмөрийн гараагаа манай Иргэний Боловсролын Төвөөс ихэлсэн билээ. Одоогийн байдлаар Ерөнхийлөгчийн Тамгын газрын Ахлах Шинжээчээр ажиллангаа Иргэний Боловсролын Төвийн сайн дурын ажилчнаар ажиллаж байна.",
      },
    ],
  };
  render() {
    let ourTeams = <div>...</div>;
    if (!this.props.loading) {
      ourTeams = this.props.ourteam.map((member) => {
        return (
          <OurTeamCard
            imgsrc={member.img}
            name={member.name}
            job={member.job}
            imgsrc={member.image}
            text={member.text}
            key={member.id}
          ></OurTeamCard>
        );
      });
    }

    return (
      <div>
        <MenuTitle
          title={this.props.language === 1 ? "Манай баг" : "Our team"}
        />
        <div className={style.ourTeamContainer}>{ourTeams}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ourteam: state.ourteam.ourteamData,
    loading: state.ourteam.loading,
    language: state.language.language,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onFetchOurTeam: () => dispatch(actions.fetchOurTeam()),
//   };
// };

export default connect(mapStateToProps)(OurTeam);
