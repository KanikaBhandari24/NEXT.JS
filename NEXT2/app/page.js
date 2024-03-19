"use client"
import { useState, useEffect} from "react";
import Navbar from "@/component/Navbar";
export default function Home() {
  // const[count, setCount] = useState(0)
  return (
    <div>
      <Navbar/>
      I am a component
      {/* {count} */}
      {/* <button onClick={()=> setCount(count-1)}>CLICK</button> */}
    </div>
  );
}
