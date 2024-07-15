import React, { useState, useEffect } from "react";
import sanityClient from "../../client.js";
import "./InstagramPosts.scss";

// utk comp
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import 'swiper/swiper.min.css';
import { Pagination, Navigation } from "swiper";
//utk comp

const InstagramPosts = () => {
  // Array of carousel items,
  // containg JSON elements of the form
  // {
  // image: IMAGE_PATH,
  // caption: HTML_CAPTION
  // }
  const [carouselData, setCarouselData] = useState(null);
  const getData = async () => {
    await sanityClient
      .fetch(
        `*[_type == "instagram"]{
        title,
        image{
          asset->{
          _id,
          url
        },
        link
      }
    }`
      )
      .then((data) => {
        const carouselData = data.map((post) => {
          console.log(post);
          return {
            image: post.image.asset.url,
            caption: post.title,
          };
        });
        setCarouselData(carouselData);
      })
      .catch(console.error);
  };

  useEffect(() => getData(), []);

  if (carouselData === null) {
    return <div>Loading...</div>;
  }
  //utk
  return (
    <div className='container'>
        
        <h1 style={{
            textAlign: "center",
            fontSize: "60px",
            margin: "30px 0px"
        }}>Latest Instagram Content</h1>
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
                clickable: true
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            <div>
              {carouselData.map((data)=>(
                 <SwiperSlide>
                 {/* <a href="#"> */}
                     <img src={data.image} alt="img" />
                 {/* </a> */}
                </SwiperSlide>
              ))}
                {/* From here you can make as many swipe a slide at my Instagram post and there */}
            </div>
        </Swiper>
    </div>
)
  //utk
};

export default InstagramPosts;
