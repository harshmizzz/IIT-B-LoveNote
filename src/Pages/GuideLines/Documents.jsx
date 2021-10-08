import React from "react";
import Media from "react-media";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import CommunityGuideline from "../../Components/Documents/Community GuideLines/CommunityGuideline";
import Faqs from "../../Components/Documents/FAQs/Faqs";
import Terms from "../../Components/Documents/T&Cs/Terms";
import Privacy from "../../Components/Documents/Privacy Policy/Privacy";

import Footer from "../../Components/Footer/Footer";
import Footer2 from "../../Components/Footer2/Footer2";
import HamburgerBox3 from "../../Components/Documents/Navbar/HamburgerBox3";
import DocumentsNav from "../../Components/Documents/Navbar/DocumentsNav";
function Documents() {
  return (
    <Router>
      <div className="documents">
        <Media query={{ maxWidth: 800 }}>
          {(matches) => (matches ? <HamburgerBox3 /> : <DocumentsNav />)}
        </Media>
        <Switch>
          <Route
            path="/communityguidelines"
            component={CommunityGuideline}
            exact
          />
          <Route path="/faqs" component={Faqs} exact />
          <Route path="/t&c" component={Terms} exact />
          <Route path="/privacy&policy" component={Privacy} exact />
        </Switch>
        <Footer />
        <Footer2 />
      </div>
    </Router>
  );
}
export default withRouter(Documents);
