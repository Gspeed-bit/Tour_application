

function TourDetails({id, name, image, price, info}) {
   return(
    <article>
        <div className="each-Tour">
        <img src={image} alt= {name} />
        <footer className="footer-tour">
        <div className="title-tour">
            <h4>{name}</h4>
            <h4 className="title-price-tour" >{price}</h4>
        </div>
        <p>{info}</p>
        <button className="delete-btn"> not interested</button>
        </footer>
        </div>
    </article>
   )
}

export default TourDetails
