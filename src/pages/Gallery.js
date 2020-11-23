import React, { useEffect, useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  useEffect(() => {
    test();
  }, []);

  const [state, setstate] = useState('');
  const url =
    "https://trefle.io/api/v1/plants/search?token=RFn2dI7Xud0AVrGPBmpFpaDdFDnrdv_fr-dsjT8KyGA&q=succulent";
  //   const url = "https://jemtech-api.herokuapp.com/api/content_data/all";

  const test = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setstate(data.data);
  };

  return (
    <div id="gallery" className="container">
      <div className="images">
        {state.map((images) => (
          <img key={images.id} src={images.image_url} alt={images.common_name}></img>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
