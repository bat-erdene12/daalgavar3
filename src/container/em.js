import React from "react";
import Slider from "react-slick";
import "./em.css";
import Emgt1 from "../assets/open-uri20221018-104356-gvbgcp_.jpg";

const Emgtei = ()=>{
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:2000,
        pauseOnHover: true
    };
    const data = [
        {
            key:1,
            title:"TRENCH COAT POLANA",
            img:Emgt1,
            description:'149,900'
        },
        {
            key:1,
            title:"TRENCH COAT POLANA",
            img:Emgt1,
            description:'149,900'
        },
        {
            key:1,
            title:"TRENCH COAT POLANA",
            img:Emgt1,
            description:'149,900'
        },
        {
            key:1,
            title:"TRENCH COAT POLANA",
            img:Emgt1,
            description:'149,900'
        },
        {
            key:1,
            title:"TRENCH COAT POLANA",
            img:Emgt1,
            description:'149,900'
        },
        {
            key:1,
            title:"TRENCH COAT POLANA",
            img:Emgt1,
            description:'149,900'
        },
        {
            key:1,
            title:"TRENCH COAT POLANA",
            img:Emgt1,
            description:'149,900'
        },
        {
            key:1,
            title:"TRENCH COAT POLANA",
            img:Emgt1,
            description:'149,900'
        },

    ]
    return(
        <div className="female">
            <h2>Улирлын онцлох эмэгтэй</h2>
            <Slider {...settings}>
                {
                    data.map((row)=>(
                        <div className="f-card">
                            <img src={row.img}/>
                            <h5>{row.title}</h5>
                            <h3>{row.description}</h3>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}
export default Emgtei