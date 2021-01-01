import React from "react";
import "./Gallery.css";

function Gallery({ items }) {

  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   items
  // }, [])


  return (
    <div id="gallery" className="container">
      {items === "loading" ? <h1>Loading...</h1> :
        items.map((imgUrl => {
          // THERE IS ANOTHER WAY TO DO THIS!!!!
          return imgUrl.image_url !== null ? <div className="imgItem" key={imgUrl.id}><img src={imgUrl.image_url} alt="Thumbnail" />{imgUrl.common_name}</div> : ""
        }))
      }
    </div>
  );
};

export default Gallery;
