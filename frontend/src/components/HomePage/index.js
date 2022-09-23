import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllRooms, listAllRooms } from "../../store/rooms";
import "./HomePage.css"
import Navigation from "../Navigation";

const HomePage = ({ isLoaded }) => {
  const dispatch = useDispatch()
  const allRooms = useSelector(getAllRooms)

  allRooms.sort(() => {
    return 0.5 - Math.random();
  });

  useEffect(() => {
    dispatch(listAllRooms())
  }, [])

  return (
    <div className="outer-rooms-div">
      <div className="home-nav-main">
      <Navigation isLoaded={isLoaded} />
      </div>
      <div className="navigation-border"></div>
      <div className="all-rooms-div">
        {allRooms?.map((room, i) => {

          if (room?.Reviews) {
            let sum = 0;
            const reviews = room?.Reviews

            for (let review of reviews) sum += review.stars
            let avgStars = sum / Object.values(reviews).length || 0
            avgStars = Math.round(avgStars * 100) / 100

            const wholeNumbers = [0, 1, 2, 3, 4, 5]
            if (wholeNumbers.includes(avgStars)) avgStars = avgStars.toString() + ".0"

            return (
              <Link to={`/rooms/${room?.id}`} className="room-link" key={room?.id}>
                <div className={`room-div room-div${i}`}>
                  <div className="img-div">
                    <img className="room-img" src={`${room?.images[0]?.url}`} alt="preview of room"></img>
                  </div>
                  <div className="room-detail">
                    <div className="room-info">
                      <div className="room-city-state">{`${room?.city}, ${room?.state}`}</div>
                      <div className="random-distance">{`${(Math.floor(Math.random() * (2000 - 200 + 1) + 200)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") } miles away`}</div>
                      <div className="room-price-night">
                        <div className="room-price">{`$${room?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</div>
                        <span className="room-night">night</span>
                      </div>
                    </div>
                    <div className="room-rating">
                      <div className="star-icon">
                        <i className="fa-solid fa-star star-design"></i>
                        <div className="number-rating">
                          {avgStars != 0 ? avgStars : "New"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )
          }
        })
        }
      </div>
    </div>
  )
}
export default HomePage
