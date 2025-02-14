import React, { useState } from "react";
import happy from "../assets/happy_cat.gif";
import { TypeAnimation } from 'react-type-animation';
import kiss from '../assets/kiss.gif'

function Accepted() {
  const [showMessage, setShowMessage] = useState(true);

  const sendMessage = () => {
    let msg = process.env.REACT_APP_MSG
    if (msg === undefined){
      msg="";
    }else{
      msg = msg.replace(" ", "%20")
    }
    window.location.href = "https://wa.me/"+process.env.REACT_APP_WA_NO+"?text="+msg;
  };

  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";

    heart.innerText = "💗";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 2000);
  }
  setInterval(createHeart, 1000);
  return (
    <div className="main-container">
      <div className="items">
        <div className="container say-yes">
          {showMessage ? <div> <TypeAnimation
      sequence={[
        'Si mie imi place de tinee pinguin mic, ma simt cel mai recunoscator ca am ajuns sa te cunosc, esti mult mai minunata si draguta de cat iti poti inchipui, voiam sa fac ceva dragut pentru tine si daca esti acasa si n-am putut sa ne vedem, sa stii ca te plac enorm de mult si imi e dor de tine. Iti trimit toate imbratisarile virtuale posibile, abia astept sa ne vedem sa stam ca 2 porumbei <3. Te puppp dulceeee si multt -Sebi',
        1000,
        'Si mie imi place de tinee pinguin mic, ma simt cel mai recunoscator ca am ajuns sa te cunosc, esti mult mai minunata si draguta de cat iti poti inchipui, voiam sa fac ceva dragut pentru tine si daca esti acasa si n-am putut sa ne vedem, sa stii ca te plac enorm de mult si imi e dor de tine. Iti trimit toate imbratisarile virtuale posibile, abia astept sa ne vedem sa stam ca 2 porumbei <3. Te puppp dulceeee si multt -Iubitul tau drag',
      ]}
      
      wrapper="span"
      speed={150}
      style={{ fontSize: '2em', display: 'inline-block' }}
      // repeat={Infinity}
    /> 
     
    <img src={kiss}/>
    <img src={happy} className="cat-image" id="noButton" alt="rose_cat" />
    <div className="ask-out-text">Happy Happy Happy!</div>
    </div> : <>
            <img src={happy} className="cat-image" id="noButton" alt="rose_cat" />
          <div className="ask-out-text">Happy Happy Happy!</div>
          <button onClick={sendMessage}>Send Message 💖</button></> }
         
        </div>
      </div>
    </div>
  );
}

export default Accepted;
