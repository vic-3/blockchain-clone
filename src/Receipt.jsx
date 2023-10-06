import React from 'react'
import './receipt.css'
import {useParams} from 'react-router-dom'
import {useState} from 'react'

const Receipt = () => {

  let {value,address} = useParams()
  value = parseFloat(value)
  const currentDate = new Date();
  const rate = 27604.60
  const fee = 3.91

  // Define the months in an array for formatting
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  // Extract date components
  const day = currentDate.getDate();
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');

  // Format the date and time
  const formattedDateTime = `${day} ${month} ${year}, ${hours}:${minutes}`;

  return (
    <>
    
    
    <div className="container">
      <div className="content">
     <br/>
     <br/>
     <br/>
     <center>
        <a href="#" style={{textDecoration: "none", color: "inherit"}}>
            <div className="security-boxy" style={{display: "flex", alignItems: "center"}}>
                <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%"}}>
                    <div>
                        <p style={{margin: "0", fontSize: "0.98rem"}}><b>BTC</b></p>
                    </div>
                    <div className="r" style={{textAlign: "right"}}>
                        <ul style={{listStyleType: "none", padding: "0"}}>
                            <li className="bold-text" style={{fontWeight: "bold", fontSize: "0.98rem"}}>US$ {value}</li>
                            <li className="colored-text" style={{color: "#646363", fontSize: "0.98rem"}}>{(value/rate).toFixed(7)} BTC</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </a>
        </center>
        <br/>
        <br/>
        <div className="transaction-info">
         
          <table className="table">
            <tr>
                <th>Network Fee</th>
                <td>
                  <div>-{(fee/rate).toFixed(7)}</div>
                  <div>-US${fee}</div>
                </td>
                </tr>
            <tr>
              <th>To</th>
              <td>{address}</td>
            </tr>

            <tr>
              <th>Status</th>
              <td>Completed</td>
            </tr>
            <tr>
                <th>Time</th>
                <td>{formattedDateTime}</td>
              </tr>
              <tr>
                <th>Transaction ID</th>
                <td>0xef767...4cf</td>
              </tr>
            
          </table>
        </div>
        <br/>
        <br/>
        <a href="#">
          <div className="button-container">
            <button className="confirm-button" style={{borderadius: "30px"}}>
              View on Explorer
            </button>
          </div>
        </a>
      </div>
      
      </div>
    
    
    </>
  )
}

export default Receipt