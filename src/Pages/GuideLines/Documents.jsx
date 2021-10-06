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
import HamburgerBox2 from "../../Components/SignUp/SignUpNav/HamburgerBox2";
import SignUPNav from "../../Components/SignUp/SignUpNav/SignUPNav";
import Footer from "../../Components/Footer/Footer";
import Footer2 from "../../Components/Footer2/Footer2";
function Documents() {
  return (
    <Router>
      <div className="documents">
        <Media query={{ maxWidth: 800 }}>
          {(matches) => (matches ? <HamburgerBox2 /> : <SignUPNav />)}
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
