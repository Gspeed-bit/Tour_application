
import './App.css';
import React, {useState,useEffect} from "react"
import Loading from "./Components/Loading"
import Tours from "./Components/Tours"
import ReactLoading from 'react-loading';
const url ="https://course-api.com/react-tours-project"; //external API used



function App() {
 const [loading,setLoading] = useState(true)// for the Loading section 
 const [tours, setTours] = useState([]) // the data fetched will be passed in tours

 // using .filter method to remove any tour the user is not interested in by id

 const removeTour = (id) =>{
   // we have to create a new variable because .filter does return a new array, the new array will be passed into the variable
   const newList = tours.filter((item)=> item.id !== id)
   setTours(newList)
 }

  // fetching the data from API using asyn
const TourAPIgetter = async()=>{
  setLoading(true)

try{
  
  const response = await fetch(url);
  const data = await response.json();
  setLoading(false)// we need to set the setLoading to false so that it will run the <Tours /> instead of  <Loading /> 
  setTours(data)//the result gotten from the API is passed into the setTours
 
}
//here catch is responsible for the error gotten from the API

catch (err){
  setLoading(false)
console.log(err)
}

  }


// component did mount was used here  
useEffect(()=>{
  setTimeout(() => {
  TourAPIgetter()
},900)

return (

  <main  >
     <div className=" title title-loading">
    <Loading />
   <ReactLoading type={"spin"} color={"hsl(209, 61%, 16%)"} height={'5%'} width={'5%'}/>
    </div>
</main>
)
if(tours.length === 0){
  return (
    <main>
      <div className="title title-loading">
      <h2> No Tours Left</h2>
      <button onClick = {()=>TourAPIgetter()}  className="refs-btn">
        Refresh
      </button>
      </div>
    </main>
  )
}

return (
  <main >
     <div className="title title-header">
       <h2> ours tours</h2>
       <div className="underLine"></div>
       </div>
      <Tours tours={tours} removeTour={removeTour}/> {/*   // tours is passed into the  <Tours /> so that it can be decontrusted in the Tours.js app */}
   
</main>

)


}
export default App;
