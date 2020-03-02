import React, { Component } from "react";
import Login from "../../components/Login";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import NumberSelector from "../../components/NumberSelector";
import ImageCarousel from "../../components/Carousel";
import Finish from "../../components/Finish";
import { connect } from "react-redux";

class Home extends Component {  

  render() {
    const loginprops = this.props.loginReducer;
    return (
      <React.Fragment>
        { (!loginprops.login) &&
            <Login />
        }
         
        { (loginprops.login) &&
        
            <React.Fragment>
              <Header />
              <NumberSelector />
              <ImageCarousel />
              <Finish />
              <Footer />
            </React.Fragment>
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    loginReducer: state.loginReducer
  };
};

export default connect(mapStateToProps)(Home);
