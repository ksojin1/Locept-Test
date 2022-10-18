import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Styles from "./Image.module.scss";
import reactImageSize from "react-image-size";

function Image() {

  const inputRef = useRef(null);
  const imgRef = useRef(null);

  const [image, setImage] = useState({
    image_file: "",
    preview_URL: "logo192.png",
  });

  const saveImage = (e) => {
    e.preventDefault();
    const fileReader = new FileReader();

    if(e.target.files[0]){
      fileReader.readAsDataURL(e.target.files[0]);
    }
    fileReader.onload = () => {
      setImage({
        image_file: e.target.files[0],
        preview_URL: fileReader.result,
      });
    }
  }

  const deleteImage = () => {
    setImage({
      image_file: "",
      preview_URL: "logo192.png",
    });
  }

  const imgOnload = () => {

    reactImageSize(image.preview_URL)
      .then(({ width, height }) => {
        imgRef.current.width = 300;
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="Image">
      <input type='file' accept="image/*"
        onChange={saveImage}
        onClick={(e) => e.target.value = null}
        ref={inputRef}
        style={{display: 'none'}}
      />
      <div className={Styles.imgDiv}>
        <img src={image.preview_URL} ref={imgRef} onLoad={imgOnload} />
      </div>
      <div>
        <button onClick={() => inputRef.current.click()}>Preview</button>
        <button onClick={deleteImage}>Delete</button>
      </div>
    </div>
  );
}

export default Image;
