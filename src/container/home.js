import React from "react";
import "./home.css";
import Slider from "react-slick";

import Zurag from "../assets/owoldoo_beldey_angilal-owliin_gutal.webp"


// import Zurag from

const Home = ()=>{
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
            title:"Өвлийн спорт",
            img: Zurag,
        },
        {
            key:2,
            title:"Өвлийн гутал",
            img: Zurag,
        },
        {
            key:3,
            title:"Хүүхдийн цамц",
            img: Zurag,
        },
        {
            key:4,
            title:"Малгай, ороолт бээлий",
            img: Zurag,
        },
        {
            key:5,
            title:"Витамин,Эрдэс бодис",
            img: Zurag,
        },
        {
            key:6,
            title:"Агааржуулагч,агаар цэвэрщүүүлэг",
            img: Zurag,
        },
        {
            key:7,
            title:"Гадуур хувцас",
            img: Zurag,
        }
    ]
    return(
        <div className="Uliral">
            <h2>Улирлын онцлох</h2>
            <Slider {...settings}>
                {
                    data.map((row)=>(
                        <div className="ontsloh">
                            <img src={row.img} alt="/"/>
                            <h3>{row.title}</h3>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}
export default Home;