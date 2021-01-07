import React from 'react'
import { Carousel } from "react-bootstrap"
import "./Slideshow.css"

function Slideshow({ items }) {
    return (
        <div>
            <Carousel>
                {items === "loading" ? <h1>Loading...</h1> :
                    items.map((imgUrl => {
                        // THERE IS ANOTHER WAY TO DO THIS!!!!
                        return imgUrl.image_url !== null ?
                                <div className="imgItem" key={imgUrl.id}>
                                    <img src={imgUrl.image_url} alt="Thumbnail" />{imgUrl.common_name}
                                </div> 
                            
                            : ""
                    }))
                }
            </Carousel>
        </div>
    )
}

export default Slideshow
