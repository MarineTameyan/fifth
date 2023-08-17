import React from "react";
import New from "../new";
class Text extends React.Component {
   state={
    textColor: "red",
    fontSize: "20px",
    fontWeight: "bold"
   }
  render() {
    
    return (
        <New color={this.state.textColor} fontSize={this.state.fontSize} fontWeight={this.state.fontWeight} 
        text={"Barev dzez"}/>
    );
}
}

export default Text;
