import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/IMessage.css'
import axios from "axios";

const IMessage = () =>  {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [kanyeTyping, setKanyeTyping] = useState(false);

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };
  console.log('ffffffffffffffffffffffffffffffffffffffffffffffffff')

  console.log(messages)
  const handleSubmit = async (event) => {
    event.preventDefault();
    const newMessage = {role: "user", content: userInput };
    console.log('nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn')
    console.log(newMessage)

    setMessages([...messages, newMessage]);
    console.log('nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn')
    messages.push(newMessage)
    console.log(messages)
    setKanyeTyping(true);
    axios.post('http://localhost:8080/bot', {
      message: [...messages, newMessage]
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true
    }).then((response) => {
      console.log(response.data);
      const botResponse = {role: "assistant", content: response.data.message };
      setMessages([...messages, botResponse]);
      setKanyeTyping(false);
    }).catch((error) => {
      console.error(error);
      const botResponse = { role: "assistant", content: "Oops! Quelque chose s'est mal passé." };
      setMessages([...messages, botResponse]);
      setKanyeTyping(false);
    });
    setUserInput("");
    setKanyeTyping(true)
  };
  

  return (
    <div className="container">
        <div className="menu1">
            <div className="contenthomeimg">
                <img
                    className="homeimg"
                    src="q.png"
                    alt="description_de_l_image"
                />
            </div>
            <div className="contenthomeimg">
                <img
                    className="homeimg"
                    src="home.png"
                    alt="description_de_l_image"
                />
            </div>

            <div className="logo">
                <img
                    className="logoimg"
                    src="oo.png"
                    alt="description_de_l_image"
                />
            </div>
           
        </div >
        <div className="menu2">
            <div className="menumenu2">
            <div className="lien">
                <Link to="/rdv">Prendre rendez-vous</Link>
            </div>
            <div className="lien">
                <Link to='/pharmacies'>Trouver Une Pharmacie</Link>
            </div >
            <div className="lien">
            <a href="https://www.linkedin.com/in/votre-nom/">Faire un bilan</a>
            </div>
            </div>
        </div>
            
                    <div>
                        <title>
                            WellTy Chatbot
                        </title>
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                    </div>
                <div className="chatpp">
                    <div className="chat-container">
                        <div className="header">                
                            <i className="fa fa-chevron-left back-button"></i>
                            <div className="contact-info">
                                <img
                                    className="profile-image"
                                    src="test.png"
                                    alt="description_de_l_image"
                                />
                                <h2 className="name">WellTy</h2>
                            </div>
                            <i className="fa fa-video-camera video-icon"></i>
                        </div>
                        <div className="chat-window">
                            <p className="chat-bot-header">
                            Bonjour Noel, content de te revoir ! 😊<br></br>
Je constate que vous n'avez pas fait de sport ces deux dernières semaines. <br></br> Il est important de faire de l'exercice régulièrement pour maintenir une bonne condition physique. <br></br> Comment puis-je vous aider aujourd'hui ?</p>
                            {messages.map((message, index) => (
                                <div key={index} className="message-container">
                                    {message.role === 'user' ? (
                                    <>
                                        <div className="user-message message">
                                            <div className="message-text">{message.content}</div>
                                        </div>
                                        <img
                                            className="profile-image user-image"
                                            src="oo.png"
                                            alt="User Profile"
                                        />
                                    </>
                                    ) : (
                                    <>
                                        <img
                                            className="profile-image bot-image"
                                            src="test.png"
                                            alt="Bot Profile"
                                        />
                                        {message.content === 'loading' ? <img className="typing-bubble" src='https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExODg3ZjFlNzQ1Mzc1ZTFlNTMyZTVjODIzMDYyODUwNDQ0ZDY3ZmU5YyZjdD1z/3tLfKrc4pLWiTkAAph/giphy.gif' alt="test" /> : <div className="bot-message message">
                                            <div className="message-text">{message.content}</div>
                                        </div>}
                                    </>
                                    )}
                                </div>
                            ))}
                        </div>
                        <form className="form" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Saisissez votre message ici..."
                                value={userInput}
                                onChange={handleChange}
                                disabled={kanyeTyping}
                            />
                            <button type="submit">
                                <i className="fa fa-paper-plane" aria-hidden="true"></i>
                            </button>
                        </form>
                    </div>
                </div>

    </div>
    
  );
}

export default IMessage;
