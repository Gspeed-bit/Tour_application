import React from 'react'

function TourDetails({id, image, price, name, info}) {
    return (
        <article className="each-Tour">
             <img src={image} alt={name} /> 
            <footer className="footer-tour" >
            <div>
            <h4> {name}</h4>
            <h4> {price}</h4>
            </div>   
            <p> {info}</p>
            <button>
                not interested
            </button>
             </footer>
        </article>
    )
}

export default TourDetails
