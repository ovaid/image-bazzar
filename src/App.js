
import React, {useState} from "react";
import SearchBar from "./Components/searchBar";
import ImageList from "./Components/imageList";
import "./index.css";


const App = () => {
  let [info, setInfo] = useState("");

  console.log(info);

  return (
    <div>
        <SearchBar  setInfo={setInfo}/> 
        <ImageList  images={info} />
       
    </div>
  )
} 

export default App;