function Brokerage() {
    return (  
        <div className="container">
            <div className="row p-5 mt-5 border-top">
                <div className="col-8 p-4">
                    <a href=""><h3 className="fs-5 text-center">Brokerage Calculater</h3></a>
                    <ul style={{lineHeight: "2.5"}} className="text-muted">
                        <li>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</li>
                        <li>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</li>
                        <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                        <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
                        <li>Options - ₹50 per crore + GST traded value (premium value).</li>
                        <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
                    </ul>
                </div>
                <div className="col-4 p-4">
                    <a href=""><h3 className="fs-5 text-center">List of charges</h3></a>
                </div>
            </div>
        </div>
    );
}

export default Brokerage;