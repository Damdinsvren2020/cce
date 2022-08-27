import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import newsReducer from "./store/reducers/news";
import newsDetailReducer from "./store/reducers/newsDetail";
import successStoriesReducer from "./store/reducers/successStories";
import reportsReducer from "./store/reducers/reports";
import feedbackFromBenefReducer from "./store/reducers/feedbackFromBenef";
import donorsEvaluationReducer from "./store/reducers/donorsEvaluation";
import CePubReducer from "./store/reducers/Publication/Cepub/Cepub";
import CiparReducer from "./store/reducers/Publication/Cepub/Cipar";
import YouthReducer from "./store/reducers/Publication/Cepub/Youth";
import EcologiReducer from "./store/reducers/Publication/Cepub/Ecological";
import StoriesDetailReducer from "./store/reducers/storiesDetail";
import languageReducer from "./store/reducers/language";
import publicationDetailReducer from "./store/reducers/publicationdetail";
import partnerReducer from "./store/reducers/partners";
import ourteamReducer from "./store/reducers/ourteam";
import sliderReducer from "./store/reducers/slider";
import boardmemberReducer from "./store/reducers/boardmember";
import youthdeveloperdetailReducer from "./store/reducers/youthdevelopmentdetail";
import ecologdetailReducer from "./store/reducers/ecologidetail";
import participationReducer from "./store/reducers/participationDetail";
import "./index.css";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  ecologiDetail: ecologdetailReducer,
  youthdevelopmentDetail: youthdeveloperdetailReducer,
  partners: partnerReducer,
  ourteam: ourteamReducer,
  PublicationDetail: publicationDetailReducer,
  language: languageReducer,
  Ecological: EcologiReducer,
  Youth: YouthReducer,
  publicationce: CePubReducer,
  ciparpublication: CiparReducer,
  news: newsReducer,
  newsDetail: newsDetailReducer,
  successStories: successStoriesReducer,
  reportsPDFData: reportsReducer,
  feedbackFromBenef: feedbackFromBenefReducer,
  donorsEvaluation: donorsEvaluationReducer,
  storiesDetail: StoriesDetailReducer,
  language: languageReducer,
  slider: sliderReducer,
  boardmember: boardmemberReducer,
  participationDetail: participationReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
