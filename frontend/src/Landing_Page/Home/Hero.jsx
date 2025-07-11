import React from 'react';
function Hero() {
    return (  
        <div className="container p-5 mb-5 text-center">
            <div className="row">
                <img src="media/images/homeHero.png" alt="HeroImage" className="mb-5" />
                <h1 className="mt-5">Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                <button className="btn btn-primary fs-5 mt-3 mb-5" style={{width : "20%", margin : "0 auto"}}><a href="/signup" style={{color: 'white'}}>Signup Now</a></button>
            </div>


        </div>
    );
}

export default Hero;