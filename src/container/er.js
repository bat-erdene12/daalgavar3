import React from "react";
import Slider from "react-slick";
import "./er.css"
import Ergtei1 from "../assets/open-uri20230201-2604078-1w9i42b_.jpg"


const Male = ()=>{
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
            title:"HANDBAG BOHEME GRANA D..",
            img:Ergtei1,
            description:'239,000'
        },
        {
            key:1,
            title:"basic T-shirt",
            img:Ergtei1,
            description:'239,000'
        },
        {
            key:1,
            title:"Jacket",
            img:Ergtei1,
            description:'239,000'
        },
        {
            key:1,
            title:"Fashion Pullovers",
            img:Ergtei1,
            description:'239,000'
        },
        {
            key:1,
            title:"New balance XS72",
            img:Ergtei1,
            description:'239,000'
        },
        {
            key:1,
            title:"TRENCH COAT POLANA",
            img:Ergtei1,
            description:'239,000'
        },
        {
            key:1,
            title:"RUN STAR LEGACY CX",
            img:Ergtei1,
            description:'239,000'
        },
        
    ]
    return(
        <div className="male">
            <h2>Улирлын онцлох эрэгтэй</h2>
            <Slider {...settings}>
                {
                    data.map((row)=>(
                        <div className="male-it">
                            <img src={row.img} alt="/"/>
                            <h3>Lace-up leather boots</h3>
                            <h4>{row.description}</h4>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}
export default Male;