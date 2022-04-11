
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css"

import { useState } from "react";

const ImageUpload = () => {
 

  const [src,setSrc]=useState(null);
  const [image,setImage]=useState()
  const [crop,setCrop]=useState({aspect:16/9});
  const [result,setResult]=useState(null);

console.log(image)
  const onChangePicture = (e) => {
    const url = URL.createObjectURL(e.target.files[0]);
    setSrc(url);
  };
  //   const reader = new FileReader();
  //   reader.addEventListener("load", () => {
  //     setImgData(reader.result);
  //     console.log(reader.result)
  //   });
  //   reader.readAsDataURL(e.target.files[0]);
  // }
  function getCroppedImage() {
    // creating the cropped image from the source image
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height
    );

    // const base64Image= canvas.toDataURL("image/jpeg");
    // setResult(base64Image);
    // console.log(result)

    canvas.toBlob(blob=>{
        setResult(blob)
    })
    
  }
  console.log(src)
  return (
    <div>
       <div className="register_profile_image" style={{ marginTop: 100 }}>
        <input type="file" id="profilePic" accept="image/*"  onChange={onChangePicture} />
       </div>
       {/* <div className="previewProfilePic">
        <img
          className="playerProfilePic_home_tile"
          src={src}
          style={{ width: 400 }}
        />
      </div> */}
     
      
     
     {src &&  <div>
        
              <ReactCrop onImageLoaded={setImage(src)} crop={crop}  onChange={setCrop}>
              <br/>
              <img className="playerProfilePic_home_tile" src={src} style={{ width: 400 }} />
              
            </ReactCrop>
        <button onClick={getCroppedImage}>crop Image</button>
      </div> }

      {
          result && <div>
              <img src={result} alt="cropped image"/>
          </div>
      }
    </div>
  );
};

export default ImageUpload;
