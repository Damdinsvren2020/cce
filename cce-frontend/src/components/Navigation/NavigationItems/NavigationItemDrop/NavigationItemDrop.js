import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavigationItemDrop.css";

const SwitchedDrop = (props) => {
  switch (props.name) {
    case "ABOUT US":
      return (
        <div>
          <li>
            <NavLink to={"/about/board_members"}>Board Members</NavLink>
          </li>
          <li>
            <NavLink to={"/about/our_team"}>Our Team</NavLink>
          </li>
          <li>
            <NavLink to={"/about/chronicles"}>Chronicles</NavLink>
          </li>
          <li>
            <NavLink to={"/about/partners"}>Partners</NavLink>
          </li>
        </div>
      );
    case "БИДНИЙ ТУХАЙ":
      return (
        <div>
          <li>
            <NavLink to={"/about/board_members"}>Удирдах Зөвлөл</NavLink>
          </li>
          <li>
            <NavLink to={"/about/our_team"}>Манай Баг</NavLink>
          </li>
          <li>
            <NavLink to={"/about/chronicles"}>Түүхэн Товчоо</NavLink>
          </li>
          <li>
            <NavLink to={"/about/partners"}>Хамтрагч Байгууллага</NavLink>
          </li>
        </div>
      );
    case "PROGRAMS":
      return (
        <div>
          <li>
            <NavLink to={"/programs/civic_education"}>Civic Education</NavLink>
          </li>
          <li>
            <NavLink to={"/civic_participation"}>Civic Participation</NavLink>
          </li>
          <li>
            <NavLink to={"/programs/youth_dev_proj"}>
              Youth Development Project
            </NavLink>
          </li>
          <li>
            <NavLink to={"/programs/ecologeducation"}>
              Ecological Education
            </NavLink>
          </li>
          <li>
            <NavLink to={"/programs/civic_education_past"}>
              Civic Education(Past)
            </NavLink>
          </li>
          <li>
            <NavLink to={"/civic_participation_past"}>
              Civic Participation(Past)
            </NavLink>
          </li>
          <li>
            <NavLink to={"/programs/youth_dev_proj"}>
              Youth Development Project(Past)
            </NavLink>
          </li>
          <li>
            <NavLink to={"/programs/ecologeducation"}>
              Ecological Education(Past)
            </NavLink>
          </li>
        </div>
      );
    case "ХӨТӨЛБӨР":
      return (
        <div>
          <li>
            <NavLink to={"/programs/civic_education"}>
              Иргэний Боловсрол
            </NavLink>
          </li>
          <li>
            <NavLink to={"/civic_participation"}>Иргэдийн Оролцоо</NavLink>
          </li>
          <li>
            <NavLink to={"/programs/youth_dev_proj"}>
              Залуучуудын Хөгжил
            </NavLink>
          </li>
          <li>
            <NavLink to={"/programs/ecologeducation"}>
              Экологийн Боловсрол
            </NavLink>
          </li>
          <li>
            <NavLink to={"/programs/civic_education_past"}>
              Иргэний Боловсрол (Хэрэгжүүлсэн)
            </NavLink>
          </li>
          <li>
            <NavLink to={"/civic_participation_past"}>
              Иргэдийн Оролцоо (Хэрэгжүүлсэн)
            </NavLink>
          </li>
          <li>
            <NavLink to={"/programs/youth_dev_proj"}>
              Залуучуудын Хөгжил (Хэрэгжүүлсэн)
            </NavLink>
          </li>
          <li>
            <NavLink to={"/programs/ecologeducation"}>
              Экологийн Боловсрол (Хэрэгжүүлсэн)
            </NavLink>
          </li>
        </div>
      );
    case "ARCHIVES":
      return (
        <div>
          <li>
            <NavLink to={"/archive/reports"}>Reports</NavLink>
          </li>
          <li>
            <NavLink to={"/archive/success_stories"}>Success Stories</NavLink>
          </li>
          <li>
            <NavLink to={"/archive/feedback_from_beneficiares"}>
              Feedback from Beneficiaries
            </NavLink>
          </li>
          <li>
            <NavLink to={"/archive/donors_evolution"}>
              Donor's Evaluation
            </NavLink>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCFNAs-2YPLcjiGpL43THIZw"
            >
              Videos
            </a>
          </li>
        </div>
      );
    case "АРХИВ":
      return (
        <div>
          <li>
            <NavLink to={"/archive/reports"}>Тайлан</NavLink>
          </li>
          <li>
            <NavLink to={"/archive/success_stories"}>Амжилтын Түүхүүд</NavLink>
          </li>
          <li>
            <NavLink to={"/archive/feedback_from_beneficiares"}>
              Үр шим хүртэгчдийн сэтгэгдэл
            </NavLink>
          </li>
          <li>
            <NavLink to={"/archive/donors_evolution"}>
              Хандивлагчийн Үнэлгээ
            </NavLink>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCFNAs-2YPLcjiGpL43THIZw"
            >
              Видео Бичлэгүүд
            </a>
          </li>
        </div>
      );
    case "PUBLICATIONS":
      return (
        <div>
          <li>
            <NavLink to={"/publication/civic_education"}>
              Civic Education
            </NavLink>
          </li>
          <li>
            <NavLink to={"/publication/civic_publication"}>
              Civic Participation
            </NavLink>
          </li>
          <li>
            <NavLink to={"/publication/youth_development_publication"}>
              Youth Development Project
            </NavLink>
          </li>
          <li>
            <NavLink to={"/Publication/ecologeducation"}>
              Ecological Education
            </NavLink>
          </li>
        </div>
      );
    case "НИЙТЛЭЛҮҮД":
      return (
        <div>
          <li>
            <NavLink to={"/publication/civic_education"}>
              Иргэний Боловсрол
            </NavLink>
          </li>
          <li>
            <NavLink to={"/publication/civic_publication"}>
              Иргэдийн Оролцоо
            </NavLink>
          </li>
          <li>
            <NavLink to={"/publication/youth_development_publication"}>
              Залуучуудын Хөгжил
            </NavLink>
          </li>
          <li>
            <NavLink to={"/Publication/ecologeducation"}>
              Экологийн Боловсрол
            </NavLink>
          </li>
          <li>
            <NavLink to={"/publication/books"}>Ном</NavLink>
          </li>
        </div>
      );
    default:
      return <div></div>;
  }
};

class NavigationItemDrop extends Component {
  render() {
    return (
      <div
        className={
          this.props.style === "sidedraw"
            ? classes.NavigationItemDropSide
            : classes.NavigationItemDrop
        }
      >
        <li className={classes.NavigationItemDropBtn}>{this.props.title}</li>
        <div className={classes.NavigationItemDropContent}>
          <SwitchedDrop name={this.props.title} />
        </div>
      </div>
    );
  }
}

export default NavigationItemDrop;
