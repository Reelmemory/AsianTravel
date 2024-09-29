import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/review.css';

function Reviews() {
  return (
    <div className='cont-carousel'>
        {/* <img src={require('../assets/loation.png')} className="DecorationL" alt='' /> */}
        <div className="title">What People Say About Us</div>
            <Carousel className='carousel'>
                <Carousel.Item interval={1000}>
                    <img className="backgorund" src={require("../assets/reviewbg.png")} alt='pic'/>
                    <Carousel.Caption className="content">
                        <img src={require("../assets/Face.jpeg")} alt="avatar" className='avatar'/>
                    <p><i>
                        Rating: ★★★★★
                        Review: "Our family trip to Japan with Wanderlust Travels was fantastic! The itinerary was well-balanced, including cultural experiences like a tea ceremony. Great accommodations and seamless communication made the trip unforgettable. Will definitely book again!"
                        </i></p>
                        <span>- Jeo Stanley</span>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img className="backgorund" src={require("../assets/reviewbg.png")} alt='pic'/>
                    <Carousel.Caption className="content">
                        <img src={require("../assets/Face (1).jpeg")} alt="avatar" className='avatar'/>
                        <p><i>
                                Rating: ★★★★★ 
                                Review: "I booked a Thailand trip with Dream Destinations Travel Agency and had an amazing experience! They tailored my itinerary perfectly, covering all my must-see spots. The local guide was friendly, and every detail was taken care of.</i></p>
                        <span>- Mei Ling Chen</span>
                    </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
                    <img className="backgorund" src={require("../assets/reviewbg.png")} alt='pic'/>
                    <Carousel.Caption className="content">
                        <img src={require("../assets/Face.jpeg")} alt="avatar" className='avatar'/>
                    <p><i>
                        Rating: ★★★★★
                        Review: "Our family trip to Japan with Wanderlust Travels was fantastic! The itinerary was well-balanced, including cultural experiences like a tea ceremony. Great accommodations and seamless communication made the trip unforgettable. Will definitely book again!"
                        </i></p>
                        <span>- Jeo Stanley</span>
                    </Carousel.Caption>
                </Carousel.Item>
    </Carousel>
        {/* <img src={require('../assets/loation.png')} className="DecorationR" alt='' /> */}
    </div>
  )
}

export default Reviews;