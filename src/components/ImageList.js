import React from "react";
import "./ImageList.css";

class ImageList extends React.Component {
  render() {
    const images = this.props.images.map(img => {
      return <img src={img.urls.regular} key={img.id} />;
    });
    console.log(this.props.images);
    return <div>{images}</div>;
  }
}

export default ImageList;
