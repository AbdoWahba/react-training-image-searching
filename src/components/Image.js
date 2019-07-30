import React from "react";

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.state = { hieght: 150 };
  }
  componentDidMount() {
    this.imageRef.current.addEventListener("load", () => {
      this.setState({ hieght: this.imageRef.current.clientHeight });
    });
  }
  render = () => {
    return (
      <img
        ref={this.imageRef}
        src={this.props.image.urls.regular}
        alt={this.props.image.description}
        style={{
          gridRowEnd: `span ${Math.ceil((this.state.hieght + 10) / 10)}`
        }}
      />
    );
  };
}

export default Image;
