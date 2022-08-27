import React, { Component } from "react";
import classes from "./index.css";
import { connect } from "react-redux";
import Table from "react-bootstrap/Table";
import { thisExpression } from "babel-types";

class Chronicle extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  render() {
    return (
      <div>
        <br />
        <h1 className={classes.AboutChronicles}>
          {this.props.language === 1 ? "Түүхэн товчоо" : "Chronicles"}
        </h1>
        <div className={classes.ChroniclesGrid}>
          <Table borderless>
            <tbody>
              <tr>
                <td className={classes.Chroniclesinfoleft}>
                  {" "}
                  <b>
                    {" "}
                    {this.props.language === 1
                      ? "1992 оны 8 сарын 12-нд"
                      : "August 12 1992"}{" "}
                  </b>{" "}
                  <br />{" "}
                  {this.props.language === 1
                    ? "Төв Азийн Хөгжлийн Сан нэрээр байгуулагдаж албан ёсоор бүртгүүлсэн."
                    : "Founded and officially registered under the name Central Asian Development Foundation"}
                </td>
                <td
                  className={classes.Chroniclesyears}
                  style={{ backgroundColor: "#20387D" }}
                >
                  {" "}
                  1992{" "}
                </td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td
                  className={classes.Chroniclesyears}
                  style={{ backgroundColor: "#1F407B" }}
                >
                  {" "}
                  1993{" "}
                </td>
                <td className={classes.Chroniclesinforight}>
                  {" "}
                  <b>
                    {this.props.language === 1
                      ? "1993 оноос"
                      : "September 1993"}{" "}
                  </b>{" "}
                  <br />{" "}
                  {this.props.language === 1
                    ? "“Ардчиллын боловсрол” төсөл боловсруулжан түгээж эхэлсэн билээ."
                    : "Training on Government budgeting inviting US and Canadian experts under the project supported by The Asia Foundation for the government officers of all provinces."}
                </td>
              </tr>
              <tr>
                <td className={classes.Chroniclesinfoleft}>
                  {" "}
                  <b>
                    {this.props.language === 1
                      ? "1994 оны 10-р сард"
                      : "October 1994"}{" "}
                  </b>{" "}
                  <br />{" "}
                  {this.props.language === 1
                    ? "10-р сард Америкийн Багш нарын Холбооны урилгаар АНУ-д 21 хоногийн танилцах аялалд оролцсон."
                    : "The first 21 day -study tour of Democracy Educationproject’s team to the USA in cooperation with the AmericanFederation of Teachers."}
                </td>
                <td
                  className={classes.Chroniclesyears}
                  style={{ backgroundColor: "#1E4879" }}
                >
                  {" "}
                  1994{" "}
                </td>
                <td></td>
              </tr>
              <tr>
                <td className={classes.Chroniclesinfoleft}></td>
                <td
                  className={classes.Chroniclesyears}
                  style={{ backgroundColor: "#1E5178" }}
                >
                  {" "}
                  1995{" "}
                </td>
                <td className={classes.Chroniclesinforight}>
                  {" "}
                  <b>
                    {this.props.language === 1
                      ? "1995 оны 9-р сард"
                      : "September 1995"}{" "}
                  </b>{" "}
                  <br />
                  {this.props.language === 1
                    ? "“Ардчиллыг Монголын сургуулиудад түгээх нь“ анхны сургалтыг монголын багш нарт зориулан зохион байгуулсан"
                    : "Started project “Bringing democracy to Mongolian schools” supported by the American Federation of Teachers."}
                </td>
              </tr>
              <tr>
                <td className={classes.Chroniclesinfoleft}>
                  {" "}
                  <b> 1996 </b> <br />{" "}
                  {this.props.language === 1
                    ? "“Иргэний Боловсролын Төв” нэртэй болж шинээр бүртгүүлэв. Шавь төвтэй сургалтын арга зүйг танилцуулансургагч багш нарыг бэлтгэх цуврал семинарыг явуулсан. одоог хүртэл Монгол улсын ерөнхий боловсролын сургуулиудад “Иргэн Төсөл”-ийг хэрэгжүүлж байна."
                    : "Renewed registration according to thenewly approved NGO law changing name into the Center for Citizenship Education. Started “Training for trainers” program on student centered teaching Started implementing Project Citizen at Mongolian schools, a school based project learning method developed by Center for Civic Education, California,USA."}{" "}
                </td>
                <td
                  className={classes.Chroniclesyears}
                  style={{ backgroundColor: "#1D5976" }}
                >
                  {" "}
                  1996{" "}
                </td>
                <td className={classes.Chroniclesinforight}></td>
              </tr>
              <tr>
                <td className={classes.Chroniclesinfoleft}></td>
                <td
                  className={classes.Chroniclesyears}
                  style={{ backgroundColor: "#1D6175" }}
                >
                  {" "}
                  1997{" "}
                </td>
                <td className={classes.Chroniclesinforight}>
                  <b> 1997 Project </b> <br />{" "}
                  {this.props.language === 1
                    ? "“Сурагчдын Өөрийн удирдлага” төслийг эхлүүлсэн."
                    : "“Strengthening NGO sector” in Mongolia. Introduced “Student’s self -governance organization” program to Mongolian schools"}
                </td>
              </tr>
              <tr>
                <td className={classes.Chroniclesinfoleft}>
                  <b> {this.props.language === 1 ? "" : "1998"} </b> <br />{" "}
                  {this.props.language === 1
                    ? ""
                    : "Textbook “Democracy for All” was translated and published in Mongolian"}
                </td>
                <td
                  className={classes.Chroniclesyears}
                  style={{ backgroundColor: "#1B7271" }}
                >
                  {" "}
                  1998{" "}
                </td>
                <td className={classes.Chroniclesinforight}></td>
              </tr>
              <tr>
                <td className={classes.Chroniclesinfoleft}></td>
                <td
                  className={classes.Chroniclesyears}
                  style={{ backgroundColor: "#1B7A70" }}
                >
                  {" "}
                  1999{" "}
                </td>
                <td className={classes.Chroniclesinforight}></td>
              </tr>
              <tr>
                <td className={classes.Chroniclesinfoleft}></td>
                <td
                  className={classes.Chroniclesyears}
                  style={{ backgroundColor: "#1A836E" }}
                >
                  {" "}
                  2000{" "}
                </td>
                <td className={classes.Chroniclesinforight}>
                  <b> 2000-2002 </b> <br />{" "}
                  {this.props.language === 1
                    ? "“ Төрийн бус байгууллагын менежмент” сургалтанд Улаанбаатар хотын болон 21 аймгийн ТББ-ыг хамруулсан."
                    : "Training on NGO management was conducted at all 21 provinces and Ulaanbaatar"}
                </td>
              </tr>
              <tr>
                <td className={classes.Chroniclesinfoleft}></td>
                <td
                  className={classes.Chroniclesyears}
                  style={{ backgroundColor: "#1A8B6D" }}
                >
                  {" "}
                  2001{" "}
                </td>
                <td className={classes.Chroniclesinforight}></td>
              </tr>
              <tr>
                <td className={classes.Chroniclesinfoleft}></td>
                <td
                  className={classes.Chroniclesyears}
                  style={{ backgroundColor: "#19936B" }}
                >
                  {" "}
                  2002{" "}
                </td>
                <td className={classes.Chroniclesinforight}></td>
              </tr>
              <tr>
                <td className={classes.Chroniclesinfoleft}>
                  <b> 2003 </b> <br />{" "}
                  {this.props.language === 1
                    ? "“Иргэдийн оролцоо” төсөл Говь-Сүмбэр, Говь-Алтай, Сэлэнгэ, Дундговь аймаг, Эрдэнэт хотод хэрэгжиж орон нутгийн иргэдийн сайн дурын байгууллагууд байгуулагдсан."
                    : "Started “Education towards civil action” project funded by Public Affairs office, US Embassy, conducting series of training on Civic participation, which followed establishing community citizens’ groups and organizations in Govisumber, Govi-Altai, Selenge, Dundgovi aimags and Erdenet."}
                </td>
                <td
                  className={classes.Chroniclesyears}
                  style={{ backgroundColor: "#199C6A" }}
                >
                  {" "}
                  2003{" "}
                </td>
                <td className={classes.Chroniclesinforight}></td>
              </tr>
              <tr>
                <td className={classes.Chroniclesinfoleft}></td>
                <td
                  className={classes.Chroniclesyears}
                  style={{ backgroundColor: "#2EA367" }}
                >
                  {" "}
                  2004{" "}
                </td>
                <td className={classes.Chroniclesinforight}></td>
              </tr>
              <tr>
                <td className={classes.Chroniclesinfoleft}></td>
                <td
                  className={classes.Chroniclesyears}
                  style={{ backgroundColor: "#43AA65" }}
                >
                  {" "}
                  2005{" "}
                </td>
                <td className={classes.Chroniclesinforight}>
                  <b> 2005-2011 </b> <br /> “Community development through
                  citizenship education” project funded by UI- Zensen-Japanese
                  Trade Union of Textile Workers, under which, Ardiin Elch
                  Community citizen center in Yoroo soum, Selenge province was
                  established.
                </td>
              </tr>
              <tr>
                <td className={classes.Chroniclesinfoleft}></td>
                <td
                  className={classes.Chroniclesyears}
                  style={{ backgroundColor: "#58B162" }}
                >
                  {" "}
                  2006{" "}
                </td>
                <td className={classes.Chroniclesinforight}></td>
              </tr>
              <tr>
                <td className={classes.Chroniclesinfoleft}></td>
                <td
                  className={classes.Chroniclesyears}
                  style={{ backgroundColor: "#6DB960" }}
                >
                  {" "}
                  2007{" "}
                </td>
                <td className={classes.Chroniclesinforight}></td>
              </tr>
              <tr>
                <td className={classes.Chroniclesinfoleft}>
                  <b> 2008 </b> <br />{" "}
                  {this.props.language === 1
                    ? "АНУ-ын Зүүн Өмнөд эргийн Судалгааны Төвтэй хамтран Монгол, Америк, Оросын байгаль орчны мэргэжилтнүүд, иргэний нийгмийн төлөөллийг хамруулах Байгаль орчны солилцооны хөтөлбөрийг 9 удаа зохион байгуулаад байна."
                    : "Started Environmental and cultural exchange program in cooperation with Southwest Research and Information Center, New Mexico, USA, that lasted 10 years ongoing involving 71 Mongolian, Russian and American environmentalists and activists."}
                </td>
                <td
                  className={classes.Chroniclesyears}
                  style={{ backgroundColor: "#82C05D" }}
                >
                  {" "}
                  2008{" "}
                </td>
                <td className={classes.Chroniclesinforight}>
                  <b> 2008-2010 </b> <br /> Mongolian partner of “Civic Voices,
                  Mosaic II” – an international civic education project,
                  implemented by the Citizenship Council, Russell Sage College,
                  USA.
                </td>
              </tr>
              <tr>
                <td className={classes.Chroniclesinfoleft}></td>
                <td
                  className={classes.Chroniclesyears}
                  style={{ backgroundColor: "#97C75B" }}
                >
                  {" "}
                  2009{" "}
                </td>
                <td className={classes.Chroniclesinforight}></td>
              </tr>
              <tr>
                <td className={classes.Chroniclesinfoleft}>
                  <b> 2010-2012 </b> <br />{" "}
                  {this.props.language === 1
                    ? "“Ардчиллын Дурсамжийн Сан” төсөл хэрэгжиж “Яагаад Ардчилал гэж...?” ном хэвлэгдэв"
                    : "“Democracy Memory Bank “– an international project, administered by the American Federation of Teachers under which Why democracy? memory book was published."}
                </td>
                <td
                  className={classes.Chroniclesyears}
                  style={{ backgroundColor: "#ACCF58" }}
                >
                  {" "}
                  2010{" "}
                </td>
                <td className={classes.Chroniclesinforight}></td>
              </tr>
              <tr>
                <td className={classes.Chroniclesinfoleft}></td>
                <td
                  className={classes.Chroniclesyears}
                  style={{ backgroundColor: "#C1D656" }}
                >
                  {" "}
                  2011{" "}
                </td>
                <td className={classes.Chroniclesinforight}>
                  <b> 2011-2014 </b> <br />{" "}
                  {this.props.language === 1
                    ? "“Иргэний Боловсрол” хичээлийн 1-12 ангийн сурах бичгийг БСШУЯ –ны захиалгаар хамтран боловсруулав"
                    : "Led a team to develop Civic education textbook for elementary, secondary and high schools of Mongolia in cooperation with the Ministry Education, Science and Culture, Mongolia."}
                </td>
              </tr>
              <tr>
                <td className={classes.Chroniclesinfoleft}>
                  <b> {this.props.language === 1 ? "2012-2014" : "2012"} </b>{" "}
                  <br />{" "}
                  {this.props.language === 1
                    ? "НҮБ-ын хөгжлийн Хөтөлбөрийн санхүүжилтээр “Иргэний боловсролоор залуучуудыг чадавхжуулах нь” төсөл хэрэгжиж бага, дунд ангийн “Ардчиллын Үндэс” сурах бичгүүд хэвлэгдэн гарав."
                    : "Started 2 year project “Youth Empowerment through Civic Education” funded by UNDP under which the “Foundation of Democracy” program started developing textbooks for elementary and secondary school students and teachers."}
                </td>
                <td
                  className={classes.Chroniclesyears}
                  style={{ backgroundColor: "#D6DC53" }}
                >
                  {" "}
                  2012{" "}
                </td>
                <td className={classes.Chroniclesinforight}></td>
              </tr>
              <tr>
                <td className={classes.Chroniclesinfoleft}></td>
                <td
                  className={classes.Chroniclesyears}
                  style={{ backgroundColor: "#E9E250" }}
                >
                  {" "}
                  2013{" "}
                </td>
                <td className={classes.Chroniclesinforight}>
                  <b> 2013 </b> <br /> Developed ecology education curriculum
                  activities funded by the Ministry of Environment’s Green
                  Development Fund of Mongolia. Introduced Integrated
                  anti-corruption education curriculum into National University
                  of Education of Mongolia funded by The Asia Foundation
                </td>
              </tr>
              <tr>
                <td className={classes.Chroniclesinfoleft}>
                  <b> {this.props.language === 1 ? "2014" : "2014-2017"} </b>{" "}
                  <br />{" "}
                  {this.props.language === 1
                    ? "Монгол Улсын Засгийн Газар болон НҮБ-ын Хүн Амын Сангийн хамтран хэрэгжүүлж буй “Залуучуудын хөгжлийн хөтөлбөр” ийн хэрэгжүүлэгч байгууллагаар сонгогдон Монгол улсын 11 аймаг, Улаанбаатар хотод 15-34 насны залуучууд, залуучуудын байгууллагыг чадавхжуулах, тэдний дуу хоологй шийдвэр гаргах түвшинд хүргэх, залуучуудын хөгжил оролцооны асуудлаар нөлөөллийн ажил хийн олон мянган залуучуудтай хамтран ажиллаж байна."
                    : "Implementing partner on “Youth development project” implemented and supported by UNFPA Mongolia and Mongolian Government."}
                </td>
                <td
                  className={classes.Chroniclesyears}
                  style={{ backgroundColor: "#EAD65E" }}
                >
                  {" "}
                  2014{" "}
                </td>
                <td className={classes.Chroniclesinforight}></td>
              </tr>
              <tr>
                <td className={classes.Chroniclesinfoleft}></td>
                <td
                  className={classes.Chroniclesyears}
                  style={{ backgroundColor: "#E9C86C" }}
                >
                  {" "}
                  2015{" "}
                </td>
                <td className={classes.Chroniclesinforight}></td>
              </tr>
              <tr>
                <td className={classes.Chroniclesinfoleft}></td>
                <td
                  className={classes.Chroniclesyears}
                  style={{ backgroundColor: "#E8B97A" }}
                >
                  {" "}
                  2016{" "}
                </td>
                <td className={classes.Chroniclesinforight}>
                  <b> 2016 </b> <br />{" "}
                  {this.props.language === 1
                    ? "АНУ-ын Олон улсын Хөгжлийн агентлагын санхүүжилтээр World Learning, Бүгд Найрамдахчуудын Олон Улсын Хүрээлэнтэй хамтран хэрэгжүүлж буй “ Залуучууд ардчилалд хувь нэмрээ оруулна” LEADMongolia төслийн 3-р бүрэлдхүүн хэсэг Иргэний Боловсролын сургалтын хэрэглэгдхүүн боловсруулах, “ Иргэн төсөл” хэрэгжүүлэн ажиллаж байна."
                    : "Started “Lead Mongolia Project” implemented in consortium with the World Learning and IRI supported by USAID."}
                </td>
              </tr>
              <tr>
                <td className={classes.Chroniclesinfoleft}></td>
                <td
                  className={classes.Chroniclesyears}
                  style={{ backgroundColor: "#E7AB87" }}
                >
                  {" "}
                  2017{" "}
                </td>
                <td className={classes.Chroniclesinforight}></td>
              </tr>
              <tr>
                <td className={classes.Chroniclesinfoleft}></td>
                <td
                  className={classes.Chroniclesyears}
                  style={{ backgroundColor: "#E59C95" }}
                >
                  {" "}
                  2018{" "}
                </td>
                <td className={classes.Chroniclesinforight}></td>
              </tr>
              <tr>
                <td className={classes.Chroniclesinfoleft}></td>
                <td
                  className={classes.Chroniclesyears}
                  style={{ backgroundColor: "#E48EA3" }}
                >
                  {" "}
                  2019{" "}
                </td>
                <td className={classes.Chroniclesinforight}></td>
              </tr>
              <tr>
                <td className={classes.Chroniclesinfoleft}>
                  <b> 2020 </b> <br /> Started “All forYOUth, YOUth for All”
                  4-year project supported by European Union.
                </td>
                <td
                  className={classes.Chroniclesyears}
                  style={{ backgroundColor: "#E37FB0" }}
                >
                  {" "}
                  2020{" "}
                </td>
                <td className={classes.Chroniclesinforight}></td>
              </tr>
            </tbody>
          </Table>
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

export default connect(mapStateToProps)(Chronicle);
