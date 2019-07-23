import React from "react";
import "./ImageList.css";

class ImageList extends React.Component {
  render() {
    const images = this.props.images.map(({ description, id, urls }) => {
      return <img src={urls.regular} key={id} alt={description} />;
    });
    console.log(this.props.images);
    return <div>{images}</div>;
  }
}

export default ImageList;
