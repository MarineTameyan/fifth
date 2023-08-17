import React from "react";

class New extends React.Component{
    render(){
    const { color, fontSize, fontWeight} = this.props;

    const textStyle = {
      color: color,
      fontSize: fontSize,
      fontWeight: fontWeight
    };
        return(
            <p style={textStyle}>
                {this.props.text}</p>
        )
    }
}
export default New