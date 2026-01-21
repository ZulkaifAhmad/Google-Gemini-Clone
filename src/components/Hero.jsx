import React, { useState } from "react";
import "../App.css";
import { userContext } from "../Context.jsx";
import { assets } from "../assets/assets.js";
import useGemini from "../config/Gemini.js";
import Response from "./Response.jsx";

function Hero() {
  let { setState, state } = userContext();
  const { generateText, response, loading, error } = useGemini();
  const [input , setInput] = useState("");
  const [alert , setAlert] = useState(false)
  const [prompt , setPrompt] = useState("")
  function handleSubmit(e){
    setAlert(true)
    setPrompt(input)
    generateText(input)
    setInput("");
  }
  
  return (
    <div className={`hero h-screen ${state ? "open" : "notOpen"} mt-10`}>

      <div className={`HeroRapper ${alert ? "hide" : "dontHide"}`}>

        <div className={`HeroText ${alert ? "hide" : "dontHide"} `}>
          <span>
            <img
              src={assets.gemini_icon}
              alt="Gemini icon"
              title="Gemini icon"
            />
            <p>Hi Zulkaif</p>
          </span>
          <h1>Where should we start ? </h1>
        </div>

        {
          alert && <Response userPrompt={input} response={response} loading={loading}/>
        }
        
        <div className="inputFeild">
          <div className="input">
            <textarea
              name="textarea"
              id="textarea"
              value={input}
              onChange={(e)=> setInput(e.target.value)}
              placeholder="Ask Gemini 3"
            ></textarea>
            <img id="upload" src={assets.gallery_icon} alt="img upload icon" />
            <img id="send" 
            src={assets.send_icon} alt="send icon" 
            onClick={handleSubmit}
            />
          </div>
        </div>

        <div className={`suggestions ${alert ? "hide" : "dontHide"}`}>
          <p className="suggest">Create image</p>
          <p className="suggest">Create a Video</p>
          <p className="suggest">Write anything</p>
          <p className="suggest">Help me Learn</p>
          <p className="suggest">Boost my day</p>
        </div>

      </div>
    </div>
  );
}

export default Hero;

// w-325
