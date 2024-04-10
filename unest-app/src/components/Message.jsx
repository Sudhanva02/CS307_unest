import React, {useRef, useEffect, useState} from 'react';
import {
    useNavigate, useParams
  } from "react-router-dom";
import './Message.css';
import back from '../Assets/back.png';
import profileIcon from '../Assets/Profile.png';
import send from '../Assets/send.png';


const Message = () => {
    const [inputMessage, setInputMessage] = useState('Message');
    const [isFocused, setIsFocused] = useState(false);
    const [enteredValues, setEnteredValues] = useState([]);
    const [showOptions, setShowOptions] = useState(false);
    const [buttonIndex, setButtonIndex] = useState(null);
    //const divRef = useRef(null);

    const {itemName} = useParams();
    const queryParams = new URLSearchParams(window.location.search);
    const encodedData = queryParams.get('data');
    const decodedData = JSON.parse(decodeURIComponent(encodedData));

    useEffect(() => {
        const savedEnteredValues = localStorage.getItem(`enteredValues-${itemName}`);
        if (savedEnteredValues) {
            setEnteredValues(JSON.parse(savedEnteredValues));
        }
        const saveLastMsg = localStorage.getItem(`lastMessage-${itemName}`);

    }, [itemName]);

    const deleteMessage = (index) => {
        setButtonIndex(index);
        if (index === enteredValues.length - 1) {
            setShowOptions(true);
        }
    };

    const updateChat = () => {
        const delMsg = [...enteredValues];
        delMsg.pop();
        localStorage.setItem(`enteredValues-${itemName}`, JSON.stringify(delMsg));
        if (delMsg.length > 0) {
            localStorage.setItem(`lastMessage-${itemName}`, delMsg[delMsg.length - 1]);
        }
        else {
            localStorage.setItem(`lastMessage-${itemName}`, ''); 
        }
        setEnteredValues(delMsg);
        setShowOptions(false);
    };

    const addEnteredValue = (event) => {
        event.preventDefault();
        if (inputMessage.trim() !== '') {
            const newValues = [...enteredValues, inputMessage];
            localStorage.setItem(`enteredValues-${itemName}`, JSON.stringify(newValues)); 
            setEnteredValues(newValues);
            localStorage.setItem(`lastMessage-${itemName}`, inputMessage);
            console.log("Last msg: ", `lastMessage-${itemName}`);
            setInputMessage(''); 
            //divRef.current.scrollIntoView({behavior: "smooth", block: "start"});
        }
        
    };

    const keyPress = (event) => {
        if (event.key === 'Enter') {
            addEnteredValue(event);
        }
    };

    const handleInputChange = (event) => {
        setInputMessage(event.target.value); 
    };

    const handleBlur = () => {
        if (!inputMessage.trim() && !isFocused) {
            setInputMessage('Message');
        }
    };

    const handleFocus = () => {
        setIsFocused(true);
        if (inputMessage === 'Message') {
            setInputMessage('');
        }
    };

    const handleUnFocus = () => {
        setIsFocused(false);
    };

    const navigate = useNavigate();

    const navigateToMsg = () => {
        navigate('/messages', {replace: true})
    };

    const navigateToTProfile = () => {
        navigate('/tenantprofile', {replace: true})
    };

    return (
        <div>
        <div className='back'>
        <img src={back} alt="" onClick={navigateToMsg} style={{width: "70px", height: "70px"}} />
        </div>
        <div className='prof'>
        <img src={profileIcon} alt="" onClick={navigateToTProfile} style={{width: "70px", height: "70px"}} />
        </div>
        <div className="name" onClick={navigateToTProfile}>
        <h1>{itemName} {decodedData?.a2}</h1>
        {decodedData?.a3 && (
        <p style={{display: "flex", position: "relative", top: "30px", left: "-150px", fontSize: "30px"}}>{decodedData.a3}</p>
        )}
        </div>
        <hr style={{display: "flex", position: "relative", top: "-110px", color: "gray"}}/>
        <div>
        {enteredValues.map((value, index) => (
            <div className="type" key={index}>
            <button onClick={() =>deleteMessage(index)} style={{backgroundColor: "white", color: "black", width: "700px", height: "100px", border: "2px solid #EA5455"}}>
            <img src={profileIcon} alt="" style={{width: "50px", height: "50px", position: "relative", left: "630px"}} />
            <p style={{position: "relative", top: "-40px"}}>{value}</p>
            </button>
            {showOptions && buttonIndex === index && index === enteredValues.length - 1 && (
                <div style={{ position: 'absolute', top: '100%', left: 0 }}>
                    <button onClick={updateChat} style={{color: "black", backgroundColor: "white", border: "2px solid black", position: "relative", top: "-30px", left: "600px"}}>
                        Delete
                    </button>
                </div>
            )}
            </div>
        ))} 
        </div>
        <div>
        <div className="search1">
        <form onSubmit={(e) => addEnteredValue(e)}>
        <input type="text" value={inputMessage} onChange={handleInputChange} onFocus={handleFocus} onBlur={handleBlur} onMouseLeave={handleUnFocus} onKeyDown={(e) => keyPress(e)} style={{width: "1200px", textAlign: "center", position: "relative", left:"-240px"}}/>
        <img src={send} alt="Enter" onClick={addEnteredValue} style={{width: "50px", height: "50px", position: "relative", top: "-62px", left: "908px", cursor: "pointer"}} /> 
        </form>
        </div>
        </div>
        </div>
        );
};

//export {savedEnteredValues};
export default Message;