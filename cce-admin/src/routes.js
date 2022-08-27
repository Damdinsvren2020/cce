import Buttons from "views/Components/Buttons.js";
import Calendar from "views/Calendar/Calendar.js";
import Charts from "views/Charts/Charts.js";
import Dashboard from "views/Dashboard/Dashboard.js";
import ErrorPage from "views/Pages/ErrorPage.js";
import ExtendedForms from "views/Forms/ExtendedForms.js";
import ExtendedTables from "views/Tables/ExtendedTables.js";
import FullScreenMap from "views/Maps/FullScreenMap.js";
import GoogleMaps from "views/Maps/GoogleMaps.js";
import GridSystem from "views/Components/GridSystem.js";
import Icons from "views/Components/Icons.js";
import LockScreenPage from "views/Pages/LockScreenPage.js";
import LoginPage from "views/Pages/LoginPage.js";
import Notifications from "views/Components/Notifications.js";
import Panels from "views/Components/Panels.js";
import PricingPage from "views/Pages/PricingPage.js";
import RTLSupport from "views/Pages/RTLSupport.js";
import ReactTables from "views/Tables/ReactTables.js";
import PublicationTables from "views/Tables/PublicationTables.js";
import RegisterPage from "views/Pages/RegisterPage.js";
import RegularForms from "views/Forms/RegularForms.js";
import RegularTables from "views/Tables/RegularTables.js";
import StoriesWebForms from "views/Forms/StoriesWebForms.js";
import DonorsWebForms from "views/Forms/DonorsWebForms.js";
import FeedbackWebForms from "views/Forms/FeedbackWebForms.js";
import PublicationWebForms from "views/Forms/PublicationWebForms.js";
import BoardMembersForms from "views/Forms/BoardMembersForms.js";
import OurTeamForms from "views/Forms/OurTeamForms.js";
import PartnersForms from "views/Forms/PartnersForms.js";
import ReportsWebForms from "views/Forms/ReportsWebForms.js";
import SliderForms from "views/Forms/SliderForms.js";

import AboutUsTables from "views/Tables/AboutUsTables.js";
import SliderTable from "views/Tables/SliderTable.js";
import SweetAlert from "views/Components/SweetAlert.js";
import TimelinePage from "views/Pages/Timeline.js";
import Typography from "views/Components/Typography.js";
import UserProfile from "views/Pages/UserProfile.js";
import ValidationForms from "views/Forms/ValidationForms.js";
import VectorMap from "views/Maps/VectorMap.js";
import Widgets from "views/Widgets/Widgets.js";
import Wizard from "views/Forms/Wizard.js";

// @material-ui/icons
import Apps from "@material-ui/icons/Apps";
import DashboardIcon from "@material-ui/icons/Dashboard";
import DateRange from "@material-ui/icons/DateRange";
import GridOn from "@material-ui/icons/GridOn";
import Image from "@material-ui/icons/Image";
import Place from "@material-ui/icons/Place";
import Timeline from "@material-ui/icons/Timeline";
import WidgetsIcon from "@material-ui/icons/Widgets";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: DashboardIcon,
    component: Dashboard,
    layout: "/admin",
  },
  {
    collapse: true,
    name: "Pages",
    rtlName: "صفحات",
    icon: Image,
    state: "pageCollapse",
    views: [
      {
        path: "/pricing-page",
        name: "Pricing Page",
        rtlName: "عالتسعير",
        mini: "PP",
        rtlMini: "ع",
        component: PricingPage,
        layout: "/auth"
      },
      {
        path: "/rtl-support-page",
        name: "RTL Support",
        rtlName: "صودعم رتل",
        mini: "RS",
        rtlMini: "صو",
        component: RTLSupport,
        layout: "/rtl"
      },
      {
        path: "/timeline-page",
        name: "Timeline Page",
        rtlName: "تيالجدول الزمني",
        mini: "T",
        rtlMini: "تي",
        component: TimelinePage,
        layout: "/admin"
      },
  {
    path: "/login-page",
    name: "Login Page",
    rtlName: "هعذاتسجيل الدخول",
    mini: "L",
    rtlMini: "هعذا",
    component: LoginPage,
    layout: "/auth"
  },
      {
        path: "/register-page",
        name: "Register Page",
        rtlName: "تسجيل",
        mini: "R",
        rtlMini: "صع",
        component: RegisterPage,
        layout: "/auth"
      },
      {
        path: "/lock-screen-page",
        name: "Lock Screen Page",
        rtlName: "اقفل الشاشة",
        mini: "LS",
        rtlMini: "هذاع",
        component: LockScreenPage,
        layout: "/auth"
      },
      {
        path: "/user-page",
        name: "User Profile",
        rtlName: "ملف تعريفي للمستخدم",
        mini: "UP",
        rtlMini: "شع",
        component: UserProfile,
        layout: "/admin"
      },
      {
        path: "/error-page",
        name: "Error Page",
        rtlName: "صفحة الخطأ",
        mini: "E",
        rtlMini: "البريد",
        component: ErrorPage,
        layout: "/auth"
      }
    ]
  },
  {
    collapse: true,
    name: "Components",
    rtlName: "المكونات",
    icon: Apps,
    state: "componentsCollapse",
    views: [
  {
    collapse: true,
    name: "Multi Level Collapse",
    rtlName: "انهيار متعدد المستويات",
    mini: "MC",
    rtlMini: "ر",
    state: "multiCollapse",
    views: [
      {
        path: "/buttons",
        name: "Buttons",
        rtlName: "وصفت",
        mini: "B",
        rtlMini: "ب",
        component: Buttons,
        layout: "/admin"
      }
    ]
  },
  {
    path: "/buttons",
    name: "Buttons",
    rtlName: "وصفت",
    mini: "B",
    rtlMini: "ب",
    component: Buttons,
    layout: "/admin"
  },
  {
    path: "/grid-system",
    name: "Grid System",
    rtlName: "نظام الشبكة",
    mini: "GS",
    rtlMini: "زو",
    component: GridSystem,
    layout: "/admin"
  },
  {
    path: "/panels",
    name: "Panels",
    rtlName: "لوحات",
    mini: "P",
    rtlMini: "ع",
    component: Panels,
    layout: "/admin"
  },
  {
    path: "/sweet-alert",
    name: "Sweet Alert",
    rtlName: "الحلو تنبيه",
    mini: "SA",
    rtlMini: "ومن",
    component: SweetAlert,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    mini: "N",
    rtlMini: "ن",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    rtlName: "الرموز",
    mini: "I",
    rtlMini: "و",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    rtlName: "طباعة",
    mini: "T",
    rtlMini: "ر",
    component: Typography,
    layout: "/admin"
  }
    ]
  },
  {
    collapse: true,
    name: "Форум",
    rtlName: "إستمارات",
    icon: "content_paste",
    state: "formsCollapse",
    views: [
      {
        path: "/web-forms",
        name: "Мэдээ оруулах(web)",
        rtlName: "أشكال عادية",
        mini: "RF",
        rtlMini: "صو",
        component: RegularForms,
        layout: "/admin",
      },
      {
        path: "/stories-web-forms",
        name: "Стори оруулах(web)",
        rtlName: "أشكال عادية",
        mini: "RF",
        rtlMini: "صو",
        component: StoriesWebForms,
        layout: "/admin",
      },
      {
        path: "/feedback-web-forms",
        name: "Feedback оруулах(web)",
        rtlName: "أشكال عادية",
        mini: "RF",
        rtlMini: "صو",
        component: FeedbackWebForms,
        layout: "/admin",
      },
      {
        path: "/donors-web-forms",
        name: "Donors Evolution оруулах(web)",
        rtlName: "أشكال عادية",
        mini: "RF",
        rtlMini: "صو",
        component: DonorsWebForms,
        layout: "/admin",
      },
      {
        path: "/publications-web-forms",
        name: "Publications оруулах(web)",
        rtlName: "أشكال عادية",
        mini: "RF",
        rtlMini: "صو",
        component: PublicationWebForms,
        layout: "/admin",
      },
      {
        path: "/boardmember-web-forms",
        name: "Board members(web)",
        rtlName: "أشكال عادية",
        mini: "RF",
        rtlMini: "صو",
        component: BoardMembersForms,
        layout: "/admin",
      },
      {
        path: "/ourteam-web-forms",
        name: "Our Team(web)",
        rtlName: "أشكال عادية",
        mini: "RF",
        rtlMini: "صو",
        component: OurTeamForms,
        layout: "/admin",
      },
      {
        path: "/partners-web-forms",
        name: "Partners(web)",
        rtlName: "أشكال عادية",
        mini: "RF",
        rtlMini: "صو",
        component: PartnersForms,
        layout: "/admin",
      },
      {
        path: "/reports-web-forms",
        name: "ReportsPDF(web)",
        rtlName: "أشكال عادية",
        mini: "RF",
        rtlMini: "صو",
        component: ReportsWebForms,
        layout: "/admin",
      },
      {
        path: "/slider-forms",
        name: "Slider зураг(web)",
        rtlName: "نماذج موسعة",
        mini: "EF",
        rtlMini: "هوو",
        component: SliderForms,
        layout: "/admin",
      },
      {
        path: "/validation-forms",
        name: "Validation Forms",
        rtlName: "نماذج التحقق من الصحة",
        mini: "VF",
        rtlMini: "تو",
        component: ValidationForms,
        layout: "/admin"
      },
      {
        path: "/wizard",
        name: "Wizard",
        rtlName: "ساحر",
        mini: "W",
        rtlMini: "ث",
        component: Wizard,
        layout: "/admin"
      }
    ],
  },
  {
    collapse: true,
    name: "Хүснэгтүүд",
    rtlName: "الجداول",
    icon: GridOn,
    state: "tablesCollapse",
    views: [
      {
        path: "/regular-tables",
        name: "Бүх хүснэгтүүд",
        rtlName: "طاولات عادية",
        mini: "RT",
        rtlMini: "صر",
        component: RegularTables,
        layout: "/admin",
      },
      // {
      //   path: "/extended-tables",
      //   name: "Extended Tables",
      //   rtlName: "جداول ممتدة",
      //   mini: "ET",
      //   rtlMini: "هور",
      //   component: ExtendedTables,
      //   layout: "/admin"
      // },
      {
        path: "/web-tables",
        name: "Web хүснэгтүүд",
        rtlName: "رد فعل الطاولة",
        mini: "RT",
        rtlMini: "در",
        component: ReactTables,
        layout: "/admin",
      },
      {
        path: "/publications-web-tables",
        name: "Publication хүснэгтүүд(web)",
        rtlName: "رد فعل الطاولة",
        mini: "RT",
        rtlMini: "در",
        component: PublicationTables,
        layout: "/admin",
      },
      {
        path: "/aboutus-web-tables",
        name: "Abous Us хүснэгтүүд(web)",
        rtlName: "رد فعل الطاولة",
        mini: "RT",
        rtlMini: "در",
        component: AboutUsTables,
        layout: "/admin",
      },
      {
        path: "/slider-web-tables",
        name: "Slider хүснэгтүүд(web)",
        rtlName: "رد فعل الطاولة",
        mini: "RT",
        rtlMini: "در",
        component: SliderTable,
        layout: "/admin",
      },
    ],
  },
  // {
  //   collapse: true,
  //   name: "Maps",
  //   rtlName: "خرائط",
  //   icon: Place,
  //   state: "mapsCollapse",
  //   views: [
  //     {
  //       path: "/google-maps",
  //       name: "Google Maps",
  //       rtlName: "خرائط جوجل",
  //       mini: "GM",
  //       rtlMini: "زم",
  //       component: GoogleMaps,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/full-screen-maps",
  //       name: "Full Screen Map",
  //       rtlName: "خريطة كاملة الشاشة",
  //       mini: "FSM",
  //       rtlMini: "ووم",
  //       component: FullScreenMap,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/vector-maps",
  //       name: "Vector Map",
  //       rtlName: "خريطة المتجه",
  //       mini: "VM",
  //       rtlMini: "تم",
  //       component: VectorMap,
  //       layout: "/admin"
  //     }
  //   ]
  // },
  // {
  //   path: "/widgets",
  //   name: "Widgets",
  //   rtlName: "الحاجيات",
  //   icon: WidgetsIcon,
  //   component: Widgets,
  //   layout: "/admin"
  // },
  // {
  //   path: "/charts",
  //   name: "Charts",
  //   rtlName: "الرسوم البيانية",
  //   icon: Timeline,
  //   component: Charts,
  //   layout: "/admin"
  // },
  // {
  //   path: "/calendar",
  //   name: "Calendar",
  //   rtlName: "التقويم",
  //   icon: DateRange,
  //   component: Calendar,
  //   layout: "/admin"
  // }
];
export default dashRoutes;
