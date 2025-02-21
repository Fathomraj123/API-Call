import axios from "axios";
import "./App.css";
import { useState } from "react";
const API_URL = "https://api.thecatapi.com/v1/images/search";

function App() {
  const [data, setData] = useState(null);
  const [axiosData, setAxiosData] = useState(null);





  const getDataUsingFetch = () => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => console.error(err));
  };
  const getDataUsingAxios = () => {
    axios
      .get(API_URL)
      .then((response) => {
        console.log(response.data);
        setAxiosData(response.data);
      })
      .catch((err) => console.error(err));
  }
  

  return (
    <>
      {
        
      
       <div className={"container"}>
        <div>
          <div>
            <h1>Get Data using Fetch</h1>
            <button class="button-64" onClick={getDataUsingFetch}>Data Using Fetch</button>
          </div>
          <div>
            
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
          </div>
        </div>
        <div>
          <div>
            <h1>Get Data using Axios</h1>
         
            <button class="button-64" onClick={getDataUsingAxios}>Data Using Axios</button>
          </div>
          <div>
           
            {axiosData && <pre>{JSON.stringify(axiosData, null, 2)}</pre>}
          </div>
        </div>
      </div> }
    </>
  );
}

export default App;