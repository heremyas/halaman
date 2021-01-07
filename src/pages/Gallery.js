import React from "react";
import "./Gallery.css";
import Slideshow from "../components/Slideshow"


function Gallery({ items }) {

  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   items
  // }, [])


  return (
    <div id="gallery" className="cont">

      <Slideshow items={items}/>
      
    </div>
  );
};

export default Gallery;
