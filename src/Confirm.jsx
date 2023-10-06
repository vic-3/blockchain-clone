import React from 'react'
import './confirm.css'
import { useParams } from 'react-router'
import { useState } from 'react'
import { useNavigate } from 'react-router'

const Confirm = () => {
    const {value} = useParams()
    const [address, setAddress] = useState("")
    const navigate = useNavigate()
    const balance = 312649
    const rate = 27604.60
    const btcBalance = balance/rate

    const nextStep = () => {
        if(address!=""){
            navigate(`/receipt/${value}/${address}`)
        }
            
    }
  return (
    <>
    
    
    <div
      style={{
        borderTopRightRadius: "20px",
        borderTopLeftRadius: "20px",
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px"
      }}
      class="container"
    >
      <div style={{display: "flex"}}>
        <h2 style={{marginTop: "9px", marginLeft: "155px", fontSize: "0.9rem"}}>
          Send
        </h2>
        <i
          style={{
            marginLeft: "110px",
            marginTop: "10px",
            color: "rgb(150, 148, 148)"
          }}
          class="fa fa-times-circle"
          aria-hidden="true"
        ></i>
      </div>
<br/>
      <label class="label">From</label>
      <center>
      <div
        class="security-box"
        style={{
          display: "flex",
          alignItems: "center",
         
          
          marginTop: "5px",
          height: "3vh"
        }}
      >
        
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{display: "flex"}}>
            <i
              style={{color: "rgb(41, 48, 143)",  marginTop: "3px", marginLeft: "2px"}}
              class="fa fa-sort"
              aria-hidden="true"
            ></i>

            <p
              style={{
                marginLeft: "5px",
                marginTop: "0px",
                marginBottom: "0px",
                fontSize: "0.9rem",
                fontWeight: "bold"
              }}
            >
              Bitcoin
            </p>
          </div>

          <div class="r" style={{textAlign: "right"}}>
            <ul
              style={{
                listStyleType: "none",
                padding: "0",
                fontSize: "0.8rem",
                fontWeight: "bold"
              }}
            >
              <li>{balance} US$</li>
              <li style={{color: "gray"}}>{btcBalance} BTC</li>
            </ul>
          </div>
        </div>
        
      </div>
      </center>
      <label style={{marginTop: "20px", marginRight: "65px"}} class="label">To</label>
      <div
        class="security-box"
        style={{height: "0vh", display: "flex", marginTop: "5px"}}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%"
          }}
        >
        <input
        class="input"
        type="text"
        value={address}
        onChange={(e)=>{setAddress(e.target.value)}}
        placeholder="Enter address or domain"
        style={{outline: "none"}}
    />
    

          <div class="r" style={{textAlign: "right"}}>
            <ul style={{listStyleType: "none", padding: "0"}}>
              <i class="fas fa-qrcode"></i>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <br />
        <p class="write">Only send BTC to wallets on the Biccoin network.</p>
        <p style={{marginTop: "30px"}} class="write">Or select a Wallet</p>
      </div>
<br/>
<center>
      <div class="security-box" style={{   height: "3vh"}}>
        <div style={{display: "flex", width: "100%", textAlign: "center"}}>
          <i
            style={{color: "rgb(73, 42, 160)",  marginTop: "6px"}}
            class="fa fa-sort"
            aria-hidden="true"
          ></i>
          <div style={{textAlign: "left", fontSize: "0.7rem", fontWeight: "bold"}}>
            <p style={{margin: "0px", marginLeft: "7px"}}>Defi Wallet</p>
            <p style={{margin: "0px", marginLeft: "7px", color: "gray"}}>
              0.00730742 BTC
            </p>
          </div>
        </div>
      </div>
      <div
        class="security-box"
        style={{ marginTop: "2px", height: "3vh"}}
      >
        <div style={{display: "flex", width: "100%", textAlign: "center"}}>
          <i
            style={{color: "rgb(53, 45, 160)", marginTtop: "0px"}}
            class="fa fa-sort"
            aria-hidden="true"
          ></i>
          <div style={{textAlign: "left", fontSize: "0.7rem", fontWeight: "bold"}}>
            <p style={{margin: "0px", marginLeft: "7px"}}>Exchange</p>
          </div>
        </div>
      </div>
      </center>
      <br />
      <br />
       
        <center>
        <div class="button-container" onClick={nextStep}>
          <button class="confirm-button">Next</button>
        </div>
        </center>
     
    </div>
    
    
    </>
  )
}

export default Confirm