import React, { useState } from "react";
import ReactCrop from "react-image-crop";
import 'react-image-crop/dist/ReactCrop.css';
import Button from "../component/Button";

const UpImage = () =>{
    const [file, setFile] = useState(null);
    const [crop, setCrop] = useState({
        aspect: 16/9,
        height: 468,
        unit: "px",
        width: 468,
        x: 0,
        y: 107,});
    const [result, setResult] = useState(undefined);

    //const url = URL ;
    const handleChange=(e)=> {
        //console.log(e.target.files);
        //console.log(URL.createObjectURL(e.target.files[0]));
       // url = URL.createObjectURL(e.target.files[0]);
        setFile(URL.createObjectURL(e.target.files[0]));
        // let image = e.target.files[0];
        // if (image) {
        // const imageReader = new FileReader();
        // imageReader.readAsDataURL(image);
        // imageReader.onloadend = () => {
        //     setFile(imageReader.result);
        // };
        // }
    }
    const [image, setImage] = useState(null);
   // const [cImage, setCImage] = useState(null)

    const getCropImage = (image,crop) =>{
        
        const imgcanvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        imgcanvas.width = crop.width;
        imgcanvas.height = crop.height;
        const ctx = document.getElementById("canvas").getContext('2d');
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
        // imgcanvas.toBlob(blob=>{
        //     console.log(blob)
        //     setResult(blob);
        // })
        const base64Image= imgcanvas.toDataURL("image/jpg");
        setResult(base64Image);
        console.log(result)
    }

    return(
        <div>
            <h1>Hello image page</h1>
            <h2>Add Image:</h2>
            <input type="file" accept="image/*" onChange={handleChange} />
            {console.log(file)}
            {file  && <ReactCrop src={file} onImageLoad={setImage} crop={crop} onChange={setCrop} >
                <img src={file}  width={500}/>
                {/* {setCImage(file)} */}
            </ReactCrop>}
            <button onClick={getCropImage}>Crop</button>
            {result && <div>
                <img src={result} alt={"Cropped"} width={500}/>
                </div>}
                <br />  
            {/* {image} */}

        </div>
    )
}   

export default UpImage;