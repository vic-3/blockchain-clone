import React from 'react'
import './send.css'
import { useParams } from 'react-router'
const Send = () => {
    const {value} = useParams()
  return (
    <>


<div class="container">
      <div class="content">
        <div class="header">
          <i
            style={{marginLeft: "20px", marginTop: "15px", color: "gray"}}
            class="fa fa-angle-left"
            aria-hidden="true"
          ></i>
          <h1>Send Bitcoin</h1>
        </div>
        <div class="value">{value}$</div>
        <div class="eth">{value}BTC</div>
        <br/>
        <br/>
        <br/>
        <div class="transaction-info">
          
          <table class="table">
            <tr>
              <th>From</th>
              <td>Blockchain.com Account</td>
            </tr>
            <tr>
              <th>To</th>
              <td>Exchange</td>
            </tr>
            <tr>
              <th>Processing Fee</th>
              <td>
                <div>3.91$</div>
                <div>0.0024 BTC</div>
              </td>
            </tr>
            <tr>
              <th>Total</th>
              <td>
                <div>100</div>
                <div>0.0000002BTC</div>
              </td>
            </tr>
          </table>
        </div>
        <br/>
        <br/>
        <a href={`/confirm/${value}`}>
          <div class="button-container">
            <button class="confirm-button" style={{borderRadius: "30px"}}>
              Confirm
            </button>
          </div>
        </a>
      </div>
      
      </div>
    


    </>
  )
}

export default Send