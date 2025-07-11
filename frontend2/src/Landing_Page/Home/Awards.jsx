
function Awards() {
    return (  
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img src="media/images/largestBroker.svg" alt="" />
                </div>
                <div className="col-6 text-start mt-5" >
                    <h2>Largest stock broker in India</h2>
                    <p>2+ million Zerodha clients contribute to over 15% of all volumes in India daily by trading and investing in:</p>
                    <div className="row text-start mt-5">
                    <div className="col-6">
                        <ul>
                        <li><p>Futures and options</p></li>
                        <li><p>Commodity derivatives</p></li>
                        <li><p>Currency derivatives</p></li>
                    </ul>
                    </div>
                    
                    <div className="col-6">
                        <ul>
                        <li><p>Stocks and IPO's</p></li>
                        <li><p>Direct mutual funds</p></li>
                        <li><p>Bonds and Govt securities</p></li>
                    </ul>
                    </div>
                    </div>
                    <img src="media/images/pressLogos.png" alt="" style={{width: "90%"}} />
                </div>
            </div>
        </div>
    );
}

export default Awards;