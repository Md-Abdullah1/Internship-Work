import axios from "./apis/axios";
// import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const getData = async ()=>{
   try{
    const res = await axios.get("/posts");
    setData(res.data) 
   }
   catch(error){
      setError(error.message)
   }
  }
  const [data, setData] = useState([]);
  const [error,setError] = useState('')
  // using fetching with axios using promises
  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/comments")
  //   .then((res) => {
  //     setData(res.data);
  //     console.log("data", res.data);
  //   })
  //   .catch((error)=> setError(error))
  // }, []);

  useEffect(()=>{
    getData();
  },[])
  return (
    <div className="flex flex-col justify-center items-start gap-5 p-3">
      <h2 className="text-blue-400 text-4xl">Axios work</h2>
      {error !== '' && <h2>{error}</h2> }
      {data.map((post) => {
        return (
          <div
            className="container p-2 border-2 shadow m-2 border-gray-300"
            key={post.id}
          >
            <h3 className="text-xl font-bold text-blue-300 underline p-2  w-fit">
              {post.title.slice(0,15).toUpperCase()}
            </h3>
            <p className="text-blue-600 text-lg">{post.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
