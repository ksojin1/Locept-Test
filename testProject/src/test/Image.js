import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Styles from "./Image.module.scss";
import reactImageSize from "react-image-size";

function Image() {

  const inputRef = useRef(null);

  const [imageFiles, setImageFiles] = useState([]);
  const [images, setImages] = useState([]);

  
  console.log('imageFiles:'+imageFiles);
  console.log('images:'+images.length);

  const saveImage = (e) => {
    e.preventDefault();

    const { files } = e.target;
    const validImageFiles = [];
    if(files.length > 1){
      for(let i=0; i<files.length; i++){
        const file = files[i];
        validImageFiles.push(file);
      }
  
      if(validImageFiles.length){
        setImageFiles(validImageFiles);
      }
    } else if(files.length === 1){
      setImageFiles((prev) => [
        ...prev,
        ...[files[0]],
      ]);
    }
    
  }
  

  const deleteImage = () => {

  }

  const imgOnload = (e) => {

  }

  const UploadImage = async(e) => {
    e.preventDefault();
    if (imageFiles) {
      //const imgFile = inputRef.current.files;
      const formData = new FormData();
      //console.log(imgFile[0].name);
      for(let i=0; i<imageFiles.length; i++){
        //console.log(imgFile[i]);
        formData.append('file', imageFiles[i]);
      }

      //console.log(imgFile[0]);
      //console.log(formData);

      const config = {
        Headers: {
          'content-type' : 'multipart/form-data'
        }
      };
      
      const res = await axios.post(
        'http://localhost:4000/test'
        , formData
        , config
      );
    }
  }

  useEffect(() => {
    const images = [], fileReaders = [];
    let isCancel = false;
    if(imageFiles.length){
      imageFiles.forEach((file) => {
        const fileReader = new FileReader();
        fileReaders.push(fileReader);
        fileReader.onload = (e) =>{
          const { result } = e.target;
          if(result){
            images.push(result);
          }
          if(images.length === imageFiles.length && !isCancel){
            setImages(images);
          }
        }
        //console.log(file);
        fileReader.readAsDataURL(file);
      })
    }

    return () => {
      isCancel = true;
      fileReaders.forEach(fileReader => {
        if(fileReader.readyState === 1){
          fileReader.abort();
        }
      })
    }
  },[imageFiles]);

  return (
    <div className="Image" style={{paddingTop: '500px'}}>

      {
        images.length > 0 ? 
          <div>
          {
            images.map((image, idx) => {
              console.log('map');
              return (
              <div key={idx} className={Styles.imgDiv}>
                <img src={image} onLoad={imgOnload} alt=""/>
              </div>
              );
            })
          }
          </div>
         : null
      }
      

      <form onSubmit={UploadImage}>
        <input type='file' accept="image/*" multiple='multiple'
          onChange={saveImage}
          //onClick={(e) => e.target.value = null}
          ref={inputRef}
          style={{ display: 'none' }}
        />
      <div>
        <button type="button" onClick={() => inputRef.current.click()}>Preview</button>
        <button type="button" onClick={deleteImage}>Delete</button>
        <button type="submit">Upload</button>
      </div>
      </form>

    </div>
  );
}

export default Image;
