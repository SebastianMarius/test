import './style.css';
import cat from '../assets/cat_love.png'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import texture from '../texture.js';

function Home() {
    const [count, setCount] = useState(0);
    const haveAccess = localStorage.getItem("numeleMeu");
    
    const navigate = useNavigate();

    const goToAccepted = () => {
        navigate('/accepted');
      };

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";

        heart.innerText = '💗';

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 500);
    }
    setInterval(createHeart, 300);

    const [position, setPosition] = useState({ top: 50, left: 50, isMoved: false });

    const moveButton = () => {
        setCount(() => count+1);
        if(count===4) {
            setCount(1);
        }
        const buttonHeight = 50;
        const buttonWidth = 100;
        const randomTop = Math.floor(Math.random() * (window.innerHeight - buttonHeight));
        const randomLeft = Math.floor(Math.random() * (window.innerWidth - buttonWidth));
        setPosition({ top: randomTop, left: randomLeft, isMoved: true });
    };

    return (
        haveAccess ? (
            <div className="main-container">
                <div className='items'>
                    <div className='container'>
                        <div className='ask-out-text'>Iti place de mineee ?????</div>
                        <div className='alo-cei-asta'>{texture[`texture${count}`]}</div>
                        <img src={cat} className='cat-image' id='noButton' alt="rose_cat" />
                        <div className='buttons'>
                            <button onClick={goToAccepted}>Yes 💖</button>
                            <button
                                onClick={moveButton}
                                style={position.isMoved ? {
                                    position: 'absolute',
                                    top: `${position.top}px`,
                                    left: `${position.left}px`,
                                } : {}}
                            >
                                No
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        ) : <div style={{height:'100vh'}}>DA PAROLA AI BAGAT O?</div>
      
    );
}

export default Home;
