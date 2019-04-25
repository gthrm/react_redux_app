import React from "react";
import { View, Image } from "react-native";
import { connect } from "react-redux";
import Home from "./components/Home.js";
import dispatch from "./store/dispatch.js";

class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAppReady: false
    };
  }

  componentWillMount() {

    setTimeout(() => {
      this.setState({isAppReady: true})
    }, 1500);
  }

  render() {
    
      if(!this.state.isAppReady) {
        return(
              <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
                <Image
                  style={{width: 152, height: 57}}
                  source={require("./src/ico/logo.png")}
                />
              </View>
       
        )
      }
    return <Home />;
  }


}

export default connect(
  dispatch.mapStateToProps,
  dispatch.mapDispatchToProps
)(MainComponent);
