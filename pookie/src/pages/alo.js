import { useState } from "react";
import "../secretPage.css";

export default function SecretPage() {
  const [secret, setSecret] = useState("");

  const handleSubmit = () => {
    if(secret == '02.10.2024'  || secret == '2.10.2024') {
        console.log('dadada');
        localStorage.setItem('numeleMeu','Sebi');
        window.location.href='test/#/teAdor';
    } else {
        alert('Ai cam gresit data..')
    }
  };

  const handleKeyDown = (e) => {
    if(e.key ==='Enter') {
        handleSubmit();
    }
  }

  return (
    <div className="secret-container">
      <div className="secret-card">
        <div className="secret-icon">🔒</div>
        <h2 className="secret-title">O data magica</h2>
        <input 
          type="text" 
          placeholder="Type your secret..." 
          className="secret-input" 
          value={secret} 
          onChange={(e) => setSecret(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSubmit} className="secret-button">
          Submit
        </button>
      </div>
    </div>
  );
}
