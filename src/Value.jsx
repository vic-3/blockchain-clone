import React from 'react'
import './value.css'
import {useState} from 'react'
import { useNavigate } from 'react-router'

const Value = () => {
    const navigate = useNavigate()
    const [value, setValue] = useState("")

    const sendCrypto = (e) => {
       // console.log("working")
        navigate(`/send/${value}`)
    }
  return (
   <>
   
   
   <div class="top">
      <i
        style={{marginLeft: "20px", marginTop: "15px"}}
        class="fa fa-angle-left"
        aria-hidden="true"
      ></i>
      <p
        style={{
          marginRight: "100px",
          marginLeft: "120px",
          fontSize: "0.9rem",
          fontWeight: "700"
        }}
      >
        Send
      </p>
      <i
        style={{marginLeft: "20px", marginTop: "15px", color: "rgb(114, 112, 112)"}}
        class="fa fa-times-circle"
        aria-hidden="true"
      ></i>
    </div>
    <br/>
    
    <div class="details" style={{marginLeft: "10px"}}>
      <div>
        <p
          style={{
            marginRight: "30px",
            marginBottom: "6px",
            marginLeft: "20px",
            fontSize: "0.7rem",
            color: "gray"
          }}
        >
          From:Blockchain.com Account
        </p>
        <p
          style={{
            marginRight: "30px",
            marginLeft: "20px",
            fontSize: "0.8rem",
            fontWeight: "700",
            color: "rgb(49, 48, 48)",
            marginTop: "0px"
          }}
        >
          To:DeFi Wallet
        </p>
      </div>
      <div style={{display: "flex"}}>
        <i
        class="fab fa-ethereum"
        style={{color: "black", marginTop: "20px", marginLeft: "80px"}}
      ></i>
      
      </div>
    </div>

    <div class="display" style={{marginLeft: "100px", marginTop: "90px"}}>
      <span id="numericValue">{value}</span> ETH
      <i style={{color: "rgb(4, 138, 138)"}} class="fa fa-sort" aria-hidden="true"></i>
  </div>
  
  <div class="avail" style={{marginLeft: "10px"}}>
      <div avail-vg>
          <p
              style={{
              marginLeft: "20px",
              marginBottom: "6px",
              fontSize: "0.8rem",
              color: "blue",
              marginTop: "90px",
              }}
          >
              <b>Available </b>
          </p>
          <p
              style={{
              marginLeft: "20px",
              fontSize: "0.9rem",
              fontWeight: "700",
              marginTop: "0px",
              color: "rgb(49, 48, 48)"
              }}
          >
              0.17478799 ETH
          </p>
      </div>
      <div style={{marginLeft: "120px"}} class="btn">
          <button
              style={{
              border: "1px solid rgb(177, 175, 175)",
              fontSize: "0.8rem",
              fontWeight: "700",
              borderRadius: "20px",
              marginTop: "100px",
              color: "blue",
              backgroundColor: "white"
              }}
          >
              Send Max
          </button>
      </div>
  </div>
  
  <div class="container">
      
          <div class="send-button-container">
              {value==0 && (<button class="send-button" id="send-button">Preview Send</button>) || (<button class="send-button-2" id="send-button" onClick={sendCrypto}>Preview Send</button>)}
          </div>
      
      <br />
      <div class="keypad">
          <button class="key" value="1" onClick={(e)=>{let newval = value.toString()+e.target.value; setValue(newval)}}>1</button>
          <button class="key" value="2" onClick={(e)=>{let newval = value.toString()+e.target.value; setValue(newval)}}>2</button>
          <button class="key" value="3" onClick={(e)=>{let newval = value.toString()+e.target.value; setValue(newval)}}>3</button>
          <button class="key" value="4" onClick={(e)=>{let newval = value.toString()+e.target.value; setValue(newval)}}>4</button>
          <button class="key" value="5" onClick={(e)=>{let newval = value.toString()+e.target.value; setValue(newval)}}>5</button>
          <button class="key" value="6" onClick={(e)=>{let newval = value.toString()+e.target.value; setValue(newval)}}>6</button>
          <button class="key" value="7" onClick={(e)=>{let newval = value.toString()+e.target.value; setValue(newval)}}>7</button>
          <button class="key" value="8" onClick={(e)=>{let newval = value.toString()+e.target.value; setValue(newval)}}>8</button>
          <button class="key" value="9" onClick={(e)=>{let newval = value.toString()+e.target.value; setValue(newval)}}>9</button>
          <button style={{fontWeight: "700"}} class="key" value="." onClick={(e)=>{let newval = value.toString()+e.target.value; setValue(newval)}}>.</button>
          <button class="key" value="0" onClick={(e)=>{let newval = value.toString()+e.target.value; setValue(newval)}}>0</button>
          <button class="key" value="clear" onClick={(e)=>{setValue(0)}}>
              <i style={{color: "black"}} class="fa fa-times-circle" aria-hidden="true"></i>
          </button>
      </div>
  </div>
   
   
   </>
  )
}


export default Value