
import './App.css';
import React, {useState,useEffect} from "react"
import Loading from "./Components/Loading"
import Tours from "./Components/Tours"


const url ="https://course-api.com/react-tours-project"; //external API used


function App() {
  const [loading, setLoading] = useState(false) // for the Loading section 
  const [tours, setTours] = useState([]) // the data fetched will be passed in tours

  // fetching the data from API using asyn
  const toursDataApi = async () => {
    setLoading(true);
    try{
      const response = await fetch(url);
      const data = await response.json();
     setLoading(false) // we need to set the setLoading to false so that it will run the <Tours /> instead of  <Loading /> 
      setTours(data) //the result gotten from the API is passed into the setTours
    } 
    //here catch is responsible for the error gotten from the API
    catch (err){
      setLoading(false)
      console.log(err)
    }
  }

// component did mount was used here  
  useEffect(()=>{
    toursDataApi();
  }, []);

  //conditional redrening
  if(loading)
  return(
    <main>
      <Loading />
    </main>
  )
return (
  <main>
        {/*   // tours is passed into the  <Tours /> so that it can be decontrusted in the Tours.js app */}
    <Tours tours={tours}/>
</main>

)


}
export default App;
