import React,{useState} from "react"

function TourDetails({id, name, image, price, info, removeTour}) {
  const [readmore, setReadMore] = useState(false)

  

   return(
    <article>
     
        <div className="each-Tour">
        <img src={image} alt= {name} />
        <footer className="footer-tour">
        <div className="title-tour">
            <h4>{name}</h4>
            <h4 className="title-price-tour">{`$${price}`}</h4> 
        </div>
        <p> {readmore ? `${info}  ` : `${info.substring(0,200)} . . . `}  

        <button onClick={()=>setReadMore(!readmore)} className="read-more-btn">
            {readmore ? "Show less" : "Read more"}
        </button>
        
        </p>

        <button onClick={()=> removeTour(id)} className="delete-btn"> not interested</button>
        </footer>
        </div>
    </article>
   )
}

export default TourDetails
