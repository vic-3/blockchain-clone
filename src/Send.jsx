import React from 'react'
import './send.css'
import { useParams } from 'react-router'
const Send = () => {
    let {value} = useParams()
    value = parseFloat(value)
    const rate = parseFloat(27604.60)
    const fee = parseFloat(3.91)
    
    const btcBalance=value.toFixed(7)
    const usdBalance=(value*rate)
    const total = fee+usdBalance
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
        <div class="value">{usdBalance}$</div>
        <div class="eth">{btcBalance} BTC</div>
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
                <div>{fee} $</div>
                <div>{(fee/rate).toFixed(7)} BTC</div>
              </td>
            </tr>
            <tr>
              <th>Total</th>
              <td>
                <div>{fee+usdBalance}</div>
                <div>{(total/rate).toFixed(7)}BTC</div>
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