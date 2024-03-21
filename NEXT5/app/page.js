"use client"
import {submitAction} from "/actions/form"
import { useRef } from "react";
export default function Home() {
  let ref=useRef()
  return (
    <div className="w-2/3 mx-auto my-10">
      <form ref={ref} action={(e)=>{submitAction(e); ref.current.reset()}}>
        <div>
          <label htmlFor="name">Name</label>
          <input name="name" id="name" className="text-black mx-4 border border-3" type="text" />
        </div>
        <div>
          <label htmlFor="add">Address</label>
          <input name="add" id="add" className="text-black border border-3" type="text" />
        </div>
        <div>
          <button className="border border-4">Submit</button>
        </div>
      </form>
    </div>
  );
}
