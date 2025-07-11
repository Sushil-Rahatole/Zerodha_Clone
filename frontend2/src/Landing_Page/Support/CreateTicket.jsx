function CreateTicket() {
    return (  
        <div className="container mb-5 p-5">
            <div className="row mt-5 mb-5">
                <h3>To create a ticket, select a relevant topic</h3>
            </div>
            <div className="row mt-5" style={{lineHeight: "2.5"}}>
                <div className="col-4">
                    <h4><i class="fa-solid fa-circle-plus"></i> Account Opening</h4>
                    <a href="">Resident individual</a><br/>
                    <a href="">Minor</a><br/>
                    <a href="">Non Resident Indian (NRI)</a><br/>
                    <a href="">Company, Partnership, HUF and LLP</a><br/>
                    <a href="">Glossary</a><br/>
                </div>
                <div className="col-4">
                    <h4><i className="fa-regular fa-user"></i> Your Zerodha Account</h4>
                    <a href="">Your Profile</a><br/>
                    <a href="">Account modification</a><br/>
                    <a href="">Client Master Report (CMR) and Depository Participant (DP)</a><br/>
                    <a href="">Nomination</a><br/>
                    <a href="">Transfer and conversion of securities</a><br/>
                </div>
                <div className="col-4">
                    <h4><i className="fa-solid fa-chart-simple"></i> Kite</h4>
                    <a href="">IPO</a><br/>
                    <a href="">Trading FAQs</a><br/>
                    <a href="">Margin Trading Facility (MTF) and Margins</a><br/>
                    <a href="">Charts and orders</a><br/>
                    <a href="">Alerts and Nudges</a><br/>
                    <a href="">General</a><br/>
                </div>
            </div>
            <div className="row mt-5" style={{lineHeight: "2.5"}}>
                <div className="col-4">
                    <h4><i class="fa-regular fa-hard-drive"></i>  Funds</h4>
                    <a href="">Add money</a><br/>
                    <a href="">Withdraw money</a><br/>
                    <a href="">Add bank accounts</a><br/>
                    <a href="">eMandates</a><br/>
                   
                </div>
                <div className="col-4">
                    <h4><i class="fa-regular fa-copyright"></i>  Console</h4>
                    <a href="">Portfolio</a><br/>
                    <a href="">Corporate actions</a><br/>
                    <a href="">Funds statement</a><br/>
                    <a href="">Reports</a><br/>
                    <a href="">Profile</a><br/>
                    <a href="">Segments</a><br/>
                </div>
                <div className="col-4">
                    <h4><i class="fa-solid fa-c"></i> Coin</h4>
                    <a href="">Mutual funds</a><br/>
                    <a href="">National Pension Scheme (NPS)</a><br/>
                    <a href="">Features on Coin</a><br/>
                    <a href="">Payments and Orders</a><br/>
                    <a href="">General</a><br/>
                    
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;