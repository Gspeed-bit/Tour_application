import React from 'react'
import TourDetails from './TourDetails'

export default function Tours({tours}) {

    return (
             
<section>
 <div className="">
     
    {tours.map((tourList) => {
        return <TourDetails key={tourList.id}  {...tourList} /> 
        //spread operator was used to get an iterable (e.g an array) and expands it into individual elements. So in this case we used the spread operator to get the data into TourDetails....  
        
    } )}


</div>
</section>

)}


  