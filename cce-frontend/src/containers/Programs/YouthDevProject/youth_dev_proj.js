import React, { Component } from "react";
import youth from "./youthdevproj.css";
import { connect } from "react-redux";

class youth_dev_proj extends Component {
  state = {
    Youth: "Youth Development Program",
    Target: "Target Group",
    Youthbetween: "Youth between the ages of 15 to 34 years",
    Scope: "Scope",
    Ulaanbaatar:
      "Ulaanbaatar city, Darkhan-Uul, Orkhon, Bayan-Ulgii, Uvs, Khowd, Zackan, Gobi-Altai, Bayankhongor, Umnu-Gobi, Dornogobi, Dornod-province",
    Project: "Project",
    Goal:
      "Goal Enhance youth participation in the policy making process and youth development program, run influencing activities on youth issues, and empower youth organisations",
    Parthners: "Partners",
    ParthnersP:
      "Partners Implementing agency of the Government of Mongolia - Authority of Family, Child and Youth development, Youth Development Agency, Centres for Youth Development, Youth clubs, Interest groups, Mongolian Youth Council and other youth organisations",
    Supporters: "Supporters",
    UNFPA:
      " UNFPA, Government of Mongolia, Ministry of Labour and Social Protection, Swiss Agency for Development and Cooperation, Government of Luxembourg",
    ptext:
      "Activities underaken within this project: Conducted 33 trainings for members of Youth development centres and youth NGOs, which involved 1312 youth and over 230 youth organisations. Organized and supported over 30 events, such as, Social Good summit Mongolia, TEDx Ulaanbaatar, StartUp Weekend, Hackathon, Youth Civil Society Forum, Supported youth organisations initiatives and implemented 86 small initiatives and monitoring projects. Our impact over the years includes: In 2014, direct beneficiaries-1545/indirect beneficiaries-49973. In 2015, direct beneficiaries-1856/indirect beneficiaries-557654. In 2016, direct beneficiaries-6161/indirect beneficiaries-406602. There were 23000 youth who benefitted from the project directly and 1014229 indirect beneficiaries.",

      Youtheng: "Project name: All for Youth, Youth for All",
      Targeteng: "Implementation period: January 1, 2020 - December 31, 2023 (4 years)",
      Youthbetweeneng: "Funding: European Union Co-implementers: Caritas Czech Republic Civic Education Center, Mongolian Youth Consul",
      Scopeeng: "Ulaanbaatar, Khentii, Bayankhongor, Selenge and Dornogovi aimags, youth NGO",
      Ulaanbaatareng:
        " Ulaanbaatar, Khentii, Bayankhongor, Selenge and Dornogovi aimags, youth NGO",
      Projecteng: "General objectives of the project",
      Goaleng:
        "To strengthen civil society organizations through capacity building, networking, advocacy and research to support governance and development in Mongolia.Objective: To strengthen the capacity of non-governmental organizations to increase the social participation of young people.3. Project main activities:Capacity building of NGOs Organize trainings for youth-oriented NGOs Establish an NGO network",
      Parthnerseng: "Organize meetings to share experiences Youth unemployment Organize a counseling program Organize a field trip to learn from European best practices on how to increase youth employment",
      ParthnersPeng:
        "Organize a counseling program Organize a field trip to learn from European best practices on how to increase youth employmen Organize network creation and expansion activities Youth social participation Organize a campaign calling for active participation in elections Involve policy negotiators with local governments Share successful stories and experiences of youth social participation",
      Supporterseng: "Organize network creation and expansion activities Youth social participation Organize a campaign calling for active participation in elections Involve policy negotiators with local governments Share successful stories and experiences of youth social participation",
      UNFPAeng:
        "",
      ptexteng:
        "Volunteer work Create a volunteer program Involve volunteers in project activities Organize training on volunteer involvement in NGOs 4. Project impact: Targeted local youth and youth organizations will be empowered to increase youth participation in the community, and young people will be able to have a voice and influence on decision-making issues.",
      Youthmon:"Залуучууд хөгжлийн хөтөлбөр",
      Targetmon:"Зорилтот бүлэг",
      Youthbetweenmon:"15-34 насны залуучууд",
      Scopemon:"Хамрах хүрээ",
      Ulaanbaatarmon:"Улаанбаатар,Дархан-уул,Орхон,Баян-Өлгий,Увс,Ховд,Завхан,Говь-Алтай,Баянхонгор,Өмнө-говь,Дорно-говь,Дорнод аймгууд",
      Projectmon: "Төслийн зорилт",
      Goalmon:"Залуучуудын асуудлаар баримтлах төрийн бодлого хөтөлбөр батлуулах үйл явцад залуучуудын оролцоог хангах залуучуудад тулгамдсан асуудлаар ухуулга нөлөөлөл хийх,залуучуудын байгууллагуудыг чадавхжуулах юм.",
      Parthnersmon:"Хамтрагчид",
      ParthnersPmon:"Засгийн газрын хэрэгжүүлэгч агентлаг гэр бүл хүүхэд залуучуудын хөгжлийн газар залуучуудын хөгжлийн төвүүд,залуучуудын клуб,сонирхлын бүлгүүд,Монголын залуучуудын эвсэл болон бусад залуучуудын байгууллагууд",
      Supportersmon:"Дэмжигч байгууллагууд",
      UNFPAmon:"НҮБ - ын хүн амын сан Монгол улсын засгийн газар хөдөлмөр нийгмийн хамгааллын яам,Швейцарийн хөгжлийн агентлаг,Лексембургийн засгийн газар",
      ptextmon:"Төслийн хүрээнд хийгдсэн үйл ажиллагаанууд.Залуучууд хөгжлийн төвийн гишүүд залуучуудын ТББ - д зориулсан нийт 21 удаагийн сургалтанд 966 залуучууд давхардсан тоогоор 140 гаруй залуучуудын байгууллагыг хамруулсан.Mon Social Good Summit Mongolia,TEDx Ulaanbaatar,StartUp Weekend,Хакатан,Залуучуудын иргэний нийгмийн чуулган гэх мэт 20 гаруй арга хэмжээг зохион байгуулж дэмжин ажилласан.Залуучуудын байгууллагын санаачлагыг дэмжин,налоолол болон мониторингийн 45 жижиг төслийг дэмжин хэрэгжүүлсэн.2014 онд шууд -1,545 шууд бус -49,973 2015 онд шууд - 1856 шууд бус - 49,973 2015 онд шууд -1856 шууд бус -557654 2016 онд шууд -6161 шууд бус - 406602 Нийт шууд - 9562 залуучуудад үүд хүрч,шууд бусаар 1,014,229 хүнд хүрсэн байна",
      Youth1mon:"Төслийн нэр: Бүгд Залуусын Төлөө, Залуус Бүгдийн төлөө",
      Target1mon:"Хэрэгжүүлэх хугацаа: 2020 оны 1 сарын 1 – 2023 оны 12 сарын 31 (4 жил)",
      Scope1mon:"Хамрах хүрээ: Улаанбаатар, Хэнтий, Баянхонгор, Сэлэнгэ, Дорноговь аймгийн залуучууд, залуучуудын ТББ",
      Ulaanbaatar1mon:"Төслийн ерөнхий зорилго: Монгол улсын засаглал, хөгжлийн үйл явцыг дэмжихийн тулд чадавхийг бэхжүүлэх, сүлжээ бий болгох, нөлөөлөл, судалгаа хийх замаар Иргэний нийгмийн байгууллагуудыг чадваржуулна. Зорилт: Залуусын нийгмийн оролцоог нэмэгдүүлэхийн тулд Төрийн бус байгууллагуудын чадавхийг сайжруулна.",
      Goal1mon:"Залуучуудын асуудлаар баримтлах төрийн бодлого хөтөлбөр батлуулах үйл явцад залуучуудын оролцоог хангах залуучуудад тулгамдсан асуудлаар ухуулга нөлөөлөл хийх,залуучуудын байгууллагуудыг чадавхжуулах юм.",
      Parthners1mon:"Залуусын нийгмийн оролцоо Сонгуульд идэвхтэй оролцохыг уриалсан компанит ажил зохион байгуулах Орон нутгийн засаг захиргаатай бодлого тодорхойлох хэлэлцээрттатан оролцуулах Залуусын нийгмийн оролцооны талаарх амжилттай түүх, туршлагыг хуваалцах",
      ParthnersP1mon:"Сайн дурын ажил Сайн дурын ажлын хөтөлбөр бий болгохТөслийн үйл ажиллагаанд сайн дурын ажилтнуудыг татан оролцуулах ТББ-д Сайн дурын ажилтанг татан оролцуулах талаарх сургалт зохион байгуулах",
      UNFPA1mon:"Төслийн үр нөлөө: Зорилтот орон нутгийн залуучууд болон залуучуудын байгууллага чадавхжин орон нутагт залуучуудын оролцоо нэмэгдэж, залуучууд шийдвэр гаргах түвшинд өөрсдийн асуудлаар дуу хоолойгоо хүргэдэг, нөлөөлдөг чадвартай  болно.",
      ptext1mon:" 3. Үйл ажиллагааны үндсэн чиглэл:ТББ – уудыг чадавхижуулах Залууст чиглэн үйл ажиллагаа явуулж буй ТББ-дад сургалт зохион байгуулах ТББ-ийн сүлжээг бий болгох Туршлага солилцох уулзалт зохион байгуулах Залуусын ажилгүйдэл Зөвлөн зааварчлах хөтөлбөр зохион байгуулах Залуусын хөдөлмөр эрхлэлтийг хэрхэн нэмэгдүүлэх талаар Европын сайн туршлагыг судлах аяллын хөтөлбөр зохион байгуулах Сүлжээ үүсгэх, нэмэгдүүлэх үйл ажиллагаа зохион байгуулах"
  };
  render() {
    return (
      <div>
        <br />
        <br />
        <h1 className={youth.youthdevprojGarchig}>
          <i className="fa fa-hand-peace-o" aria-hidden="true"></i>
          {this.props.language === 1
            ? this.state.Youthmon
            : this.state.Youth}
        </h1>
        <hr className={youth.youthdevprojzuraas} />
        <div className={youth.youthdevprojmain}>
          <div style={{ width: "50%" }}>
            <div
              style={{
                boxShadow: "9px 10px 13px -4px rgba(0,0,0,0.75)",
                backgroundColor: "#f5dd48",
                margin: "10px",
                height: "auto",
                padding: "10px",
              }}
            >
              <h1 className={youth.youthdevprojheads}>
              {this.props.language === 1
            ? this.state.Targetmon
            : this.state.Target}
                
                </h1>
              <p className={youth.youthdevprojtexts}>
              {this.props.language === 1
            ? this.state.Youthbetweenmon
            : this.state.Youthbetween}
              </p>
            </div>
            <div
              style={{
                boxShadow: "9px 10px 13px -4px rgba(0,0,0,0.75)",
                backgroundColor: "#f5dd48",
                margin: "10px",
                height: "auto",
                padding: "10px",
              }}
            >
              <h1 className={youth.youthdevprojheads}>
              {this.props.language === 1
            ? this.state.Scopemon
            : this.state.Scope}
               </h1>
              <p className={youth.youthdevprojtexts}>
                {" "}
                {this.props.language === 1
            ? this.state.Ulaanbaatarmon
            : this.state.Ulaanbaatar}
              </p>
            </div>
            <div
              style={{
                boxShadow: "9px 10px 13px -4px rgba(0,0,0,0.75)",
                backgroundColor: "#f6cb44",
                margin: "10px",
                height: "auto",
                padding: "10px",
              }}
            >
              <h2 className={youth.youthdevprojheads}>
              {this.props.language === 1
            ? this.state.Projectmon
            : this.state.Project}
                </h2>
              <p className={youth.youthdevprojtexts}>
              {this.props.language === 1
            ? this.state.Goalmon
            : this.state.Goal}
               </p>
            </div>
          </div>
          <div style={{ width: "50%" }}>
            <div
              style={{
                boxShadow: "9px 10px 13px -4px rgba(0,0,0,0.75)",
                backgroundColor: "#f7b53f",
                margin: "10px",
                height: "auto",
                padding: "10px",
              }}
            >
              <h3 className={youth.youthdevprojheads}>
              {this.props.language === 1
            ? this.state.Parthnersmon
            : this.state.Parthners}
              </h3>
              <p className={youth.youthdevprojtexts}>
                
              {this.props.language === 1
            ? this.state.ParthnersPmon
            : this.state.ParthnersP}
                </p>
            </div>
            <div
              style={{
                boxShadow: "9px 10px 13px -4px rgba(0,0,0,0.75)",
                backgroundColor: "#f6cb44",
                margin: "10px",
                height: "auto",
                padding: "6px",
              }}
            >
              <h5 className={youth.youthdevprojheads}>
              {this.props.language === 1
            ? this.state.Supportersmon
            : this.state.Supporters}
              </h5>
              <p className={youth.youthdevprojtexts}> 
               {this.props.language === 1
            ? this.state.UNFPAmon
            : this.state.UNFPA}
              </p>
            </div>
          </div>
        </div>
        <div style={{ margin: "26px" }}>
          <div>
            <p className={youth.youthdevprojitems} style={{}}>
            {this.props.language === 1
            ? this.state.ptextmon
            : this.state.ptext}
            </p>
          </div>
        </div>
        <br />
        <br />
        <h1 className={youth.youthdevprojGarchig}>
          <i className="fa fa-hand-peace-o" aria-hidden="true"></i>
          {this.props.language === 1
            ? this.state.Youth1mon
            : this.state.Youtheng}
        </h1>
        <hr className={youth.youthdevprojzuraas} />
        <div className={youth.youthdevprojmain}>
          <div style={{ width: "50%" }}>
            <div
              style={{
                boxShadow: "9px 10px 13px -4px rgba(0,0,0,0.75)",
                backgroundColor: "#f5dd48",
                margin: "10px",
                height: "auto",
                padding: "10px",
              }}
            >
              <h1 className={youth.youthdevprojheads}>
              {this.props.language === 1
            ? this.state.Target1mon
            : this.state.Targeteng}
                
                </h1>
              <p className={youth.youthdevprojtexts}>
              {this.props.language === 1
            ? this.state.Youthbetween1mon
            : this.state.Youthbetweeneng}
              </p>
            </div>
            <div
              style={{
                boxShadow: "9px 10px 13px -4px rgba(0,0,0,0.75)",
                backgroundColor: "#f5dd48",
                margin: "10px",
                height: "auto",
                padding: "10px",
              }}
            >
              <h1 className={youth.youthdevprojheads}>
              {this.props.language === 1
            ? this.state.Scope1mon
            : this.state.Scopeeng}
               </h1>
              <p className={youth.youthdevprojtexts}>
                {" "}
                {this.props.language === 1
            ? this.state.Ulaanbaatar1mon
            : this.state.Ulaanbaatareng}
              </p>
            </div>
            <div
              style={{
                boxShadow: "9px 10px 13px -4px rgba(0,0,0,0.75)",
                backgroundColor: "#f6cb44",
                margin: "10px",
                height: "auto",
                padding: "10px",
              }}
            >
              <h2 className={youth.youthdevprojheads}>
              {this.props.language === 1
            ? this.state.Project1mon
            : this.state.Projecteng}
                </h2>
              <p className={youth.youthdevprojtexts}>
              {this.props.language === 1
            ? this.state.Goal1mon
            : this.state.Goaleng}
               </p>
            </div>
          </div>
          <div style={{ width: "50%" }}>
            <div
              style={{
                boxShadow: "9px 10px 13px -4px rgba(0,0,0,0.75)",
                backgroundColor: "#f7b53f",
                margin: "10px",
                height: "auto",
                padding: "10px",
              }}
            >
              <h3 className={youth.youthdevprojheads}>
              {this.props.language === 1
            ? this.state.Parthners1mon
            : this.state.Parthnerseng}
              </h3>
              <p className={youth.youthdevprojtexts}>
                
              {this.props.language === 1
            ? this.state.ParthnersP1mon
            : this.state.ParthnersPeng}
                </p>
            </div>
            <div
              style={{
                boxShadow: "9px 10px 13px -4px rgba(0,0,0,0.75)",
                backgroundColor: "#f6cb44",
                margin: "10px",
                height: "auto",
                padding: "6px",
              }}
            >
              <h5 className={youth.youthdevprojheads}>
              {this.props.language === 1
            ? this.state.Supporters1mon
            : this.state.Supporterseng}
              </h5>
              <p className={youth.youthdevprojtexts}> 
               {this.props.language === 1
            ? this.state.UNFPA1mon
            : this.state.UNFPAeng}
              </p>
            </div>
          </div>
        </div>
        <div style={{ margin: "26px" }}>
          <div>
            <p className={youth.youthdevprojitems} style={{}}>
            {this.props.language === 1
            ? this.state.ptext1mon
            : this.state.ptexteng}
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

export default connect(mapStateToProps) (youth_dev_proj);
