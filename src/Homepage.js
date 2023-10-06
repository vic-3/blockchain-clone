import React from 'react'
import { NavLink } from 'react-router-dom'


const Home = () => {
    const balance = 312649
    const rate = 27604.60
    const btcBalance = (balance/rate).toFixed(7)
  return (
   <>
   
   <div className='container'>
        <nav>
            <li><i className='bx bx-user' ></i></li>
           <li> <i className='bx bx-scan' ></i></li>
        </nav>
        <main style={{textAlign: "center"}}>
            <div className="price-container">
                <center>
                <h1 style={{marginBottom: "0px;"}} id="price">US$ {balance} <i style={{color: "rgb(185, 177, 177)"}} className="fas fa-eye"></i></h1>
            </center>
            </div>
            <h5 style={{color: "green", marginTop: "0px"}}>US$0.02 (1.4%)</h5>
        
            <div className="icon-container">

            <a href="">
                    <div className="circle">
                        <div className="icon">
                           
                            <i  style={{marginLeft: "20px"}}  className="material-symbols-outlined">
        currency_exchange
        </i>
                        </div>
                    </div>
                    <small>Swap</small> 
                </a>
               
               
               
                <NavLink to="/value">
                    <div className="circle">
                        <div className="icon" style={{marginRight: "10px"}}>
                           <i  style={{marginLeft: "10px"}} className='bx bx-arrow-from-bottom'></i>
                        </div>
                    </div>
                    <small>Send</small> 
                </NavLink>
                
        
                
                <a href="">
                    <div className="circle">
                        <div className="icon">
                            <i style={{marginLeft: "20px"}} className="bx bx-arrow-from-top"></i>
                        </div>
                    </div>
                    <small>Receive</small> 
                </a>

                <a href="">
                    <div className="circle">
                        <div className="icon">
                             
                            <i  style={{marginLeft: "20px"}}  class='bx bx-minus'></i>
                        </div>
                    </div>
                    <small>Sell</small> 
                </a>
            </div>
            <br/>
            <center>
                <div className="security-box" >
                    <h5 className="text1">Secure Your Wallet</h5>
                     <h4 className="text">Backup Your Recovery Phrase</h4>
                  </div>
            </center>
            
<br/>

<center>
        <div className="first" >
            
            <h1>
                To get started, fund <br/>
                 your DeFi Wallet with crypto
            </h1>
            <p>Tranfer crypto to another wallet</p>
            
                <button className="btn">Deposit Crypto</button>
            
                
        </div>
        
    </center>


<br/>
 

<div className="at-ay-container">
    <div className="at">Activity</div>
    <div className="ay">See All</div>
</div>

<div className="container" style={{alignItems: "center"}}>
    <center>
            
    <div className="security-box" style={{display: "flex", alignItems: "center"}}>
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%"}}>
            <div>
                <p style={{margin: "0", fontSize: "0.98rem"}}><b>Received BNB</b></p>
                <h6 style={{margin: "0", paddingLeft: "0", color: "#2e2d2d"}}>29 Sept 2023</h6>
            </div>
            <div className="r" style={{textAlign: "right"}}>
                <ul style={{listStyleType: "none", padding: "0"}}>
                    <li className="bold-text" style={{fontWeight: "bold", fontSize: "0.98rem"}}>US$2.00</li>
                    <li className="colored-text" style={{color: "#646363", fontSize: "0.98rem"}}>0.0093 BNB</li>
                </ul>
            </div>
        </div>
    </div>
   
    <div className="security-box" style={{display: "flex", alignItems: "center"}}>
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%"}}>
            <div>
                <p style={{margin: "0", fontSize: "0.98rem"}}><b>Received BNB</b></p>
                <h6 style={{margin: "0", paddingLeft: "0", color: "#2e2d2d"}}>29 Sept 2023</h6>
            </div>
            <div className="r" style={{textAlign: "right"}}>
            <ul style={{listStyleType: "none", padding: "0"}}>
                    <li className="bold-text" style={{fontWeight: "bold", fontSize: "0.98rem"}}>US$2.00</li>
                    <li className="colored-text" style={{color: "#646363", fontSize: "0.98rem"}}>0.0093 BNB</li>
                </ul>
            </div>
        </div>
    </div>
    <div className="security-box" style={{display: "flex", alignItems: "center"}}>
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%"}}>
            <div>
                <p style={{margin: "0", fontSize: "0.98rem"}}><b>Received BNB</b></p>
                <h6 style={{margin: "0", paddingLeft: "0", color: "#2e2d2d"}}>29 Sept 2023</h6>
            </div>
            <div className="r" style={{textAlign: "right"}}>
            <ul style={{listStyleType: "none", padding: "0"}}>
                    <li className="bold-text" style={{fontWeight: "bold", fontSize: "0.98rem"}}>US$2.00</li>
                    <li className="colored-text" style={{color: "#646363", fontSize: "0.98rem"}}>0.0093 BNB</li>
                </ul>
            </div>
        </div>
    </div>
    <div className="security-box" style={{display: "flex", alignItems: "center"}}>
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%"}}>
            <div>
                <p style={{margin: "0", fontSize: "0.98rem"}}><b>Received BNB</b></p>
                <h6 style={{margin: "0", paddingLeft: "0", color: "#2e2d2d"}}>29 Sept 2023</h6>
            </div>
            <div className="r" style={{textAlign: "right"}}>
            <ul style={{listStyleType: "none", padding: "0"}}>
                    <li className="bold-text" style={{fontWeight: "bold", fontSize: "0.98rem"}}>US$2.00</li>
                    <li className="colored-text" style={{color: "#646363", fontSize: "0.98rem"}}>0.0093 BNB</li>
                </ul>
            </div>
        </div>
    </div>

    <div className="security-box" style={{display: "flex", alignItems: "center"}}>
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%"}}>
            <div>
                <p style={{margin: "0", fontSize: "0.98rem"}}><b>Received BNB</b></p>
                <h6 style={{margin: "0", paddingLeft: "0", color: "#2e2d2d"}}>29 Sept 2023</h6>
            </div>
            <div className="r" style={{textAlign: "right"}}>
            <ul style={{listStyleType: "none", padding: "0"}}>
                    <li className="bold-text" style={{fontWeight: "bold", fontSize: "0.98rem"}}>US$2.00</li>
                    <li className="colored-text" style={{color: "#646363", fontSize: "0.98rem"}}>0.0093 BNB</li>
                </ul>
            </div>
        </div>
    </div>
    </center>


    
</div>


<br/>

<div className="at-ay-container">
    <div className="at">Latest News</div>
    <div className="ay">See All</div>
</div>


<div className="third" style={{alignItems: "center"}}>
    <div className="left">
      <h3 style={{paddingTop: "12px"}}> <b>
        Etherum Future ETF to begin Trading as Rumors Swirl of Acceleration
        SEC Apporval</b>
      </h3>
      <p>Sep 28, 2023</p>
      <p>Publish by Andrew Throuvalas</p>
    </div>
    <div className="right">
        <img src="images/cctv 3.jpg" alt=""/>
    </div>
    
</div>

<div className="third" style={{alignItems: "center"}}>
    <div className="left">
      <h3 style={{paddingTop: "12px"}}> <b>
        Etherum Future ETF to begin Trading as Rumors Swirl of Acceleration
        SEC Apporval</b>
      </h3>
      <p>Sep 28, 2023</p>
      <p>Publish by Andrew Throuvalas</p>
    </div>
    <div className="right">
        <img src="images/cctv 3.jpg" alt=""/>
    </div>
    
</div>
<div className="third" style={{alignItems: "center"}}>
    <div className="left">
      <h3 style={{paddingTop: "12px"}}> <b>
        Etherum Future ETF to begin Trading as Rumors Swirl of Acceleration
        SEC Apporval</b>
      </h3>
      <p>Sep 28, 2023</p>
      <p>Publish by Andrew Throuvalas</p>
    </div>
    <div className="right">
        <img src="images/cctv 3.jpg" alt=""/>
    </div>
    
</div>

<div className="third" style={{alignItems: "center"}}>
    <div className="left">
      <h3 style={{paddingTop: "12px"}}> <b>
        Etherum Future ETF to begin Trading as Rumors Swirl of Acceleration
        SEC Apporval</b>
      </h3>
      <p>Sep 28, 2023</p>
      <p>Publish by Andrew Throuvalas</p>
    </div>
    <div className="right">
        <img src="images/cctv 3.jpg" alt=""/>
    </div>
    
</div>
<br/>
<br/>

    <a className="a" href="#">help?</a>
    <div className="forth">
      <p><a href="#">View support center</a></p>
    </div>



<div className="navbar">
    <a href="#home"><i className='bx bx-home-alt'></i><br/> Home</a>
    <a href="#prices"><i className='bx bx-bar-chart-alt-2' ></i> <br/>Prices</a>
    <a href="#nfts"><i className='bx bx-image-alt'></i><br/> NFTs</a>
    <a href="#dex"><i className="material-symbols-outlined">
        currency_exchange
        </i><br/> DEX</a>
</div>



</main>
        
        
    

      </div>
   
   </>
  )
}

export default Home