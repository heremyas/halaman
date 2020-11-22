import React, { useEffect, useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  useEffect(() => {
    test();
  });

  const [state, setstate] = useState(null);
  const url =
    "https://trefle.io/api/v1/plants/search?token=RFn2dI7Xud0AVrGPBmpFpaDdFDnrdv_fr-dsjT8KyGA&q=succulent";
  //   const url = "https://jemtech-api.herokuapp.com/api/content_data/all";

  const test = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setstate(data.data);
    console.log(state);
  };

  return (
    <div id="gallery" className="container">
      <div className="images">
        {/* {console.log(state)} */}
        {/* {data.map((images) => (
          <img key={} src={im}></img>
        ))} */}
      </div>
    </div>
  );
};

export default Gallery;
