import React from "react";
import "./ImageList.css";
import Image from "./Image";

class ImageList extends React.Component {
  render() {
    const images = this.props.images.map(img => {
      return <Image image={img} key={img.id} />;
    });
    console.log(this.props.images);
    return <div className="image-list">{images}</div>;
  }
}

export default ImageList;
