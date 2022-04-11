import React, { useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

export const ImageUpload = () => {
  const [image, setImage] = useState();
  const [cropData, setCropData] = useState("#");
  const [cropper, setCropper] = useState();
  const onChange = (e) => {
    const url = URL.createObjectURL(e.target.files[0]);
    setImage(url);
  };

  const getCropData = () => {
    
      setCropData(cropper.getCroppedCanvas().toDataURL());
    
  };

  return (
    <div>
      <div style={{ width: "100%", marginTop: 30, marginLeft: 30 }}>
        <input type="file" onChange={onChange} />
        <br />
        <br />
        <Cropper
          style={{ width: "600px", height: "600px" }}
          initialAspectRatio={1}
          preview=".img-preview"
          src={image}
          viewMode={1}
          minCropBoxHeight={10}
          minCropBoxWidth={10}
          background={false}
          responsive={true}
          autoCropArea={1}
          checkOrientation={false}
          onInitialized={(instance) => {
            setCropper(instance);
          }}
          // guides={true}
        />
        <br />
      </div>
      <div>
        <div className="box" style={{ marginLeft: 20 }}>
          <div>
            <button onClick={getCropData} style={{ marginLeft: 30 }}>
              Crop Image
            </button>
            <br />
            <br />
          </div>

          <img
            style={{ width: "300px", height: "300px" }}
            src={cropData}
            alt="cropped"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;