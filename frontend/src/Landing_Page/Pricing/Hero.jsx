function Hero() {
    return (  
        <div className="container border-bottom ">
            <div className="p-5 mt-5 row text-center">
                <h1>Charges</h1>
                <p className="text-muted fs-5 mt-3 mb-5">List of all charges and taxes</p>

                <div className="col-4">
                    <img src="media/images/pricingEquity.svg" alt="" />
                    <h3>Free equity delivery</h3>
                    <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4">
                     <img src="media/images/intradayTrades.svg" alt="" />
                    <h3>Intraday and F&O trades</h3>
                    <p className="text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4">
                     <img src="media/images/pricing0.svg" alt="" />
                    <h3>Free direct MF</h3>
                    <p className="text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;