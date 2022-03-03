import React from 'react'

function CardImg(props) {
  return (
    <div>
        <div className="card-img">
            <img src="https://avatars.dicebear.com/api/personas/your-custom-seed.svg" alt="" srcset="" />
            {/* img {props.img} */}
        </div>
    </div>
  )
}

export default CardImg