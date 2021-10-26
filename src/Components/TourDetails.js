import React,{useState} from "react"

function TourDetails({id, name, image, price, info}) {
    const [readmore, setReadMore] = useState(false)

    const Readmebtn =()=>{
        setReadMore(!readmore)
    }

   return(
    <article>
     
        <div className="each-Tour">
        <img src={image} alt= {name} />
        <footer className="footer-tour">
        <div className="title-tour">
            <h4>{name}</h4>
            <h4 className="title-price-tour">{`$${price}`}</h4> 
        </div>
        <p>
        {readmore ? `${info}  ` : `${info.substring(0,200)} ... `}
        <button onClick={Readmebtn} className="read-more-btn">
            {readmore ? "show less ":  "read more"  }
        </button>
            
         </p>
        <button className="delete-btn"> not interested</button>
        </footer>
        </div>
    </article>
   )
}

export default TourDetails
