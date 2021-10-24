import React from 'react'
import TourDetails from './TourDetails'

export default function Tours({tours}) {

    return (
             
<section>

 <div className="title">
    <h2> ours tours</h2>
 </div>
    {tours.map((tourList)=> <TourDetails key = {tourList.id} {...tours}> </TourDetails>

)}

</section>
    )
}
