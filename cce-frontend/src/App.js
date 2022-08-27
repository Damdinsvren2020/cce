import React from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";

import Home from "./containers/Home";
import CivicEducation from "./containers/Programs/CivicEducation/CivicEducation";
import CivicParticipation from "./containers/Programs/CivicParticipation/civic_participation";
import BoardMembers from "./containers/About/BoardMember/BoardMembers";
import OurTeam from "./containers/About/OurTeam/OurTeam";
import YouthDevProject from "./containers/Programs/YouthDevProject/youth_dev_proj";
import EcologicalEducation from "./containers/Programs/EcologicalEducation/ecologi";
import News from "./containers/News/index";
import NewsDetail from "./containers/NewsDetail";
import CEPublication from "./containers/Publications/CEPublication/index";
import CP from "./containers/Publications/CivicParticipationPublication/publication";
import Youthdevelopmentpublication from "./containers/Publications/YouthDevelopmentPublications/youth";
import Ecologi from "./containers/Publications/EcologiPublication/index";
import ArchiveReport from "./containers/Archive/Report/index";
import ArchiveSuccesStories from "./containers/Archive/SuccesStories";
import ArchiveFeedbackBenef from "./containers/Archive/FeedbackBenef";
import ArchiveDonorEvolution from "./containers/Archive/DonorEvolution";
import Partners from "./containers/About/Partners/Partners";
import AboutUsChronicle from "./containers/About/Chronicles/index";
import Pubdetail from "./containers/Publications/pubdetail /index";
import StoriesDetail from "./containers/Archive/SuccessStoriesDetail";
import PublicationDetail from "./containers/Publicationdetail/index";
import ParticipationDetail from "./containers/ParticipationDetail";
import youthdetail from "./containers/Youthdevelopmentdetail/index";
import ecologidetail from "./containers/Ecologidetail/index";
import CivicEducationPast from "./containers/Programs/CivicEducationPast/CivicEducationPast";
import CivicParticipationPast from "./containers/Programs/CivicParticipationPast/civicparticipationpast";
import PublicationNewBook from "./containers/Publications/NewBook/index.js";

//ejs
import shat1 from "./ejs/views/hello.ejs";

const App = () => {
  return (
    <Switch>
      <Route path="/publication/books" exact component={PublicationNewBook} />
      <Layout>
        <Route
          path="/publication/civic_education/:id"
          exact
          component={PublicationDetail}
        />
        <Route
          path="/publication/civic_participation/:id"
          exact
          component={ParticipationDetail}
        />
        <Route
          path="/publication/youth_development/:id"
          exact
          component={youthdetail}
        />
        <Route
          path="/publication/ecological_education_publication/:id"
          exact
          component={ecologidetail}
        />
        <Route path="/" exact component={Home} />
        <Route path="/civic_education" component={CivicEducation} />
        <Route path="/civic_participation" component={CivicParticipation} />
        <Route path="/about/our_team" component={OurTeam} />
        <Route path="/programs/youth_dev_proj" component={YouthDevProject} />
        <Route path="/pubdetail/:id" component={Pubdetail} />
        <Route path="/archive/success_stories/:id" component={StoriesDetail} />
        <Route
          path="/programs/ecologeducation"
          component={EcologicalEducation}
        />
        <Route path="/news" component={News} />
        <Route path="/newsDetail/:id" component={NewsDetail} />
        <Route path="/publication/civic_education" component={CEPublication} />
        <Route path="/publication/civic_publication" component={CP} />
        <Route
          path="/civic_participation_past"
          component={CivicParticipationPast}
        />
        <Route path="/about/board_members" component={BoardMembers} />
        <Route path="/about/partners" component={Partners} />
        <Route path="/about/our_team" component={OurTeam} />
        <Route path="/programs/civic_education" component={CivicEducation} />
        <Route
          path="/programs/civic_education_past"
          component={CivicEducationPast}
        />
        <Route path="/programs/youth_dev_proj" component={YouthDevProject} />
        <Route path="/news" component={News} />
        <Route path="/newsDetail/:id" component={NewsDetail} />
        <Route
          path="/publication/youth_development_publication"
          component={Youthdevelopmentpublication}
        />{" "}
        <Route path="/Publication/ecologeducation" component={Ecologi} />
        <Route path="/archive/reports" component={ArchiveReport} />
        <Route
          path="/archive/success_stories"
          component={ArchiveSuccesStories}
        />
        <Route
          path="/archive/feedback_from_beneficiares"
          component={ArchiveFeedbackBenef}
        />
        <Route
          path="/archive/donors_evolution"
          component={ArchiveDonorEvolution}
        />
        <Route path="/about/chronicles" component={AboutUsChronicle} />
        {/* ejs */}
        <Route path="/YVOTE/shat1" component={shat1} />
        {/* <Route path="/YVOTE/shat2" component={}/>
        <Route path="/YVOTE/shat3" component={}/>
        <Route path="/YVOTE/shat4" component={}/>
        <Route path="/YVOTE/shat5" component={}/>
        <Route path="/YVOTE/shat6" component={}/>
        <Route path="/YVOTE/shat7" component={}/>
        <Route path="/YVOTE/shat8" component={}/>
        <Route path="/YVOTE/songogch1" component={}/>
        <Route path="/YVOTE/songogch2" component={}/>
        <Route path="/YVOTE/songogch3" component={}/>
        <Route path="/YVOTE/songogch4" component={}/>
        <Route path="/YVOTE/songogch5" component={}/>
        <Route path="/YVOTE/songogch6" component={}/>
        <Route path="/YVOTE/songogch7" component={}/>
        <Route path="/YVOTE/songogch8" component={}/>
        <Route path="/YVOTE/songogch9" component={}/>
        <Route path="/YVOTE/songogch10" component={}/>
        <Route path="/YVOTE/songogch11" component={}/>
        <Route path="/YVOTE/songogch12" component={}/>
        <Route path="/YVOTE/songogch13" component={}/>
        <Route path="/YVOTE/songogch14" component={}/>
        <Route path="/YVOTE/songogch15" component={}/>
        <Route path="/YVOTE/hotolbor" component={}/>
        <Route path="/YVOTE/calendar" component={}/> */}
      </Layout>
    </Switch>
  );
};

export default App;
