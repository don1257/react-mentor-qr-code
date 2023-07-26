import * as React from "react"
import './Card.css'

// @ts-ignore
const Card = ({title, description}) => {

return (
    <>
          <div className='card'>

            <img
              className='card-image'
              src='https://i.ibb.co/khc8tcy/image-qr-code.png'
            />

            <div className='card-text-container'>
            <p className='card-title' >
              {title}
            </p>

            <body className='card-description'> {description} </body>
            </div>

          </div>
    </>
)

}

export default Card;
