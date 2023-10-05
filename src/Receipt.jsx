import React from 'react'
import './receipt.css'

const Receipt = () => {
  return (
    <>
    
    
    <div className="container">
      <div className="content">
     <br/>
     <br/>
     <br/>
        <a href="tinfo.html" style={{textDecoration: "none", color: "inherit"}}>
            <div className="security-boxy" style={{display: "flex", alignItems: "center", marginLeft: "30px"}}>
                <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%"}}>
                    <div>
                        <p style={{margin: "0", fontSize: "0.98rem"}}><b>BNB</b></p>
                    </div>
                    <div className="r" style={{textAlign: "right"}}>
                        <ul style={{listStyleType: "none", padding: "0"}}>
                            <li className="bold-text" style={{fontWeight: "bold", fontSize: "0.98rem"}}>US$2.00</li>
                            <li className="colored-text" style={{color: "#646363", fontSize: "0.98rem"}}>0.0093 BNB</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </a>
        <br/>
        <br/>
        <div className="transaction-info">
         
          <table className="table">
            <tr>
                <th>Newtwork Fee</th>
                <td>
                  <div>-0.00000000023</div>
                  <div>-US$0.01</div>
                </td>
                </tr>
            <tr>
              <th>To</th>
              <td>Completed</td>
            </tr>
            <tr>
                <th>Time</th>
                <td>29 Sep 2023, 01:49</td>
              </tr>
              <tr>
                <th>Transaction ID</th>
                <td>0xef7...4c</td>
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