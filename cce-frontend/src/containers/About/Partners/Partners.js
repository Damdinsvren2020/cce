import React, { Component } from "react";
import style from "./Partners.css";
import PartnersCard from "../../../components/UI/Card/Partners/CardUI";
import MenuTitle from "../../../components/UI/MenuTitle/MenuTitle";

import nvb from "../../../assets/images/Partner/cce-logo_1.png";
import hugjil from "../../../assets/images/Partner/hugjil.svg";
import neelttei from "../../../assets/images/Partner/logo_osf.gif";
import civitas from "../../../assets/images/Partner/civitas.jpg";
import bolowsrol from "../../../assets/images/Partner/bolowsrolsoyol.png";
import ardchilal from "../../../assets/images/Partner/unfpa_5.jpg";
import Polish from "../../../assets/images/Partner/Polish.png";
import Americ from "../../../assets/images/Partner/Americ.jpg";
import Baigal from "../../../assets/images/Partner/baigal.jpg";
import Baruun from "../../../assets/images/Partner/baruun.jpg";
import Asia from "../../../assets/images/Partner/zurag/1.png";
import Usaid from "../../../assets/images/Partner/zurag/2.png";
import Baigalorchin from "../../../assets/images/Partner/zurag/3.png";
import Forestservice from "../../../assets/images/Partner/zurag/4.png";
import Pltcalifornia from "../../../assets/images/Partner/zurag/5.png";
import wet from "../../../assets/images/Partner/zurag/6.jpg";
import baigalorchinhamgaalah from "../../../assets/images/Partner/zurag/7.jpg";
import baigalorchinhamgaalahsan from "../../../assets/images/Partner/zurag/8.jpg";
import cheh from "../../../assets/images/Partner/zurag/9.gif";
import mongolzaluuewsel from "../../../assets/images/Partner/zurag/10.jpg";
import worldlearning from "../../../assets/images/Partner/zurag/11.jpg";
import ardiinelch from "../../../assets/images/Partner/zurag/12.png";
import minj from "../../../assets/images/Partner/zurag/13.jpg";
import demo from "../../../assets/images/Partner/zurag/14.jpg";
import uurchlult from "../../../assets/images/Partner/zurag/15.jpg";
import zaluusewlel from "../../../assets/images/Partner/zurag/16.jpg";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
class Partners extends Component {
  componentDidMount() {
    this.props.onFetchPartners();
  }
  state = {
    data: [
      {
        link: "https://new.civiced.org/home",
        img: nvb,
        text: "Иргэний боловсролын төв",
      },
      {
        link: "http://www.undp.mn/",
        img: hugjil,
        text: "Нүб хөгжлийн хөтөлбөр",
      },
      {
        link: "http://forum.mn/",
        img: neelttei,
        text: "Нээлттэй эхийн форум",
      },
      {
        link: "http://new.civiced.org/programs/civitas",
        img: civitas,
        text: "Civictas International",
      },
      {
        link: "http://www.meds.gov.mn/frontpage",
        img: bolowsrol,
        text: "Боловсрол соёл шинжлэх ухааны яам",
      },
      {
        link: "http://www.meds.gov.mn/frontpage",
        img: ardchilal,
        text: "НҮБ-ын Хүн амын сан",
      },
      {
        link: "http://edudemo.org.pl/",
        img: Polish,
        text: "Ардчилалын төлөө боловсрол сан Польш ",
      },
      {
        link: "http://countryoffice.unfpa.org/mongolia/",
        img: Americ,
        text: "АНУ-ын Багш нарын холбоо АНУ",
      },
      {
        link: "http://www.tahoebaikal.org/",
        img: Baigal,
        text: "Тахо БАйгаль нуурын хүрээлэн АНУ",
      },
      {
        link: "http://www.sric.org/index.php",
        img: Baruun,
        text: "Баруун Өмнөд эргийн судалгааны төв,Шинэ Мексико Ану",
      },
      {
        link: "http://www.asiafoundation.org/",
        img: Asia,
        text: "Азийн сан",
      },
      {
        link: "https://mongolia.usaid.gov/",
        img: Usaid,
        text: "АНУ-ын олон улсын хөгжлийн агентлаг",
      },
      {
        link: "http://mne.mn/v3/",
        img: Baigalorchin,
        text: "Байгаль орчин ногоон хөгжлийн яам",
      },
      {
        link: "http://mne.mn/v3/",
        img: Forestservice,
        text: "АНУ-ын ойн газар",
      },
      {
        link: "https://www.plt.org/",
        img: Pltcalifornia,
        text: "АНУ-ын ойн боловсролын сан",
      },
      {
        link: "https://www.projectwet.org/",
        img: wet,
        text: "АНУ-ын усны боловсролын сан",
      },
      {
        link: "http://www.mne.mn/",
        img: baigalorchinhamgaalah,
        text: "Байгаль орчин ногоон хөгжлийн яам",
      },
      {
        link: "http://www.ncf.mn/",
        img: baigalorchinhamgaalahsan,
        text: "Байгаль хамгаалах сан",
      },
      {
        link: "http://www.ncf.mn/",
        img: cheh,
        text: "Чехийн хөгжлийн хамтын ажиллагаа",
      },
      {
        link: "https://www.facebook.com/MongolianYouthCouncil",
        img: mongolzaluuewsel,
        text: "Монголын залуучуудын эвсэл",
      },
      {
        link: "https://www.facebook.com/MongolianYouthCouncil",
        img: mongolzaluuewsel,
        text: "Монголын залуучуудын эвсэл",
      },
      {
        link: "https://www.facebook.com/MongolianYouthCouncil",
        img: worldlearning,
        text: "World Learning",
      },
    ],
    data1: [
      {
        link: "http://cce.mn/irgediin_oroltsoo/",
        img: ardiinelch,
        text: "Ардын элч орон нутгийн иргэдийн байгууллага",
      },
      {
        link: "http://cce.mn/irgediin_oroltsoo/",
        img: minj,
        text: "Минжийн хангай орон нутгийн иргэдийн бүлэг",
      },
      {
        link: "http://cce.mn/irgediin_oroltsoo/",
        img: demo,
        text: "ДемоКрэйзи залуусын төв",
      },
      {
        link: "http://cce.mn/irgediin_oroltsoo/",
        img: uurchlult,
        text: "Өөрчлөлтийн салхи залуусын бүлэг",
      },
      {
        link: "http://cce.mn/irgediin_oroltsoo/",
        img: zaluusewlel,
        text: "Монголын Залуучуудын эвлэл",
      },
    ],
  };

  render() {
    let partners = <div>...</div>;
    if (!this.props.loading) {
      console.log("partnersdata", this.props.partners);
      partners = (
        <div className={style.partnersContainer}>
          {this.props.partners.map((partner) => {
            return (
              <PartnersCard
                key={partner.id}
                imgsrc={partner.image}
                text={partner.text}
                title={partner.title}
              />
            );
          })}
        </div>
      );
    }

    //let saindur = null;
    //saindur = (
    //<div className={style.partnersContainer}>
    //{this.state.data1.map((partner) => {
    //return (
    //<PartnersCard
    //imgsrc={partner.img}
    //text={partner.text}
    //link={partner.link}
    //>
    //);
    //})}
    //</div>
    //);
    let test = null;
    if (!this.props.loading) {
      test = "jiji";
    }

    return (
      <div>
        <MenuTitle
          title={
            this.props.language === 1 ? "Хамтрагч байгууллагууд" : "Partners"
          }
        />
        {partners}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    language: state.language.language,
    partners: state.partners.partnersData,
    loading: state.partners.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchPartners: () => dispatch(actions.fetchPartners()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Partners);
