import axios from "axios";
import "./App.css";
import { useState } from "react";
const API_URL = "https://api.thecatapi.com/v1/images/search";

function App() {
  const [fetchData, setFetchData] = useState<any>(null);
  const [axiosData, setAxiosData] = useState<any>(null);

  const [loading, setLoading] = useState({
    fetch: false,
    axios: false,
  });

  const getUsingFetch = async () => {
    setLoading({ ...loading, fetch: true });
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data);
      setFetchData(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading({ ...loading, fetch: false });
    }
  };
  const getUsingAxios = async () => {
    setLoading({ ...loading, axios: true });
    try {
      const response = await axios.get(API_URL);
      console.log(response.data);
      setAxiosData(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading({ ...loading, axios: false });
    }
  };
  return (
    <>
      <div className={"container"}>
        <div>
          <div>
            {loading.fetch && <p>Loading data using fetch...</p>}
            <button class="button-64" onClick={getUsingFetch}>Data Using Fetch</button>
          </div>
          <div>
            <h1>Get Data using Fetch</h1>
            {fetchData && <pre>{JSON.stringify(fetchData, null, 2)}</pre>}
          </div>
        </div>
        <div>
          <div>
            {loading.axios && <p>Loading data using axios...</p>}
            <button class="button-64" onClick={getUsingAxios}>Data Using Axios</button>
          </div>
          <div>
            <h1>Get Data using Axios</h1>
            {axiosData && <pre>{JSON.stringify(axiosData, null, 2)}</pre>}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;