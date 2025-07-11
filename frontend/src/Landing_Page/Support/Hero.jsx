function Hero() {
    return (  
        <section className="container-fluid" id="support-hero">
            <div className=" p-5" id="supportWrapper">
                <h4>Support Portal</h4>
                <a href="">Track tickets</a>
            </div>
            <div className="row p-5 mb-5 ">
                <div className="col-6">
                    <h3>Search for an answer or browse help topics to<br/> create a ticket</h3>
                    <input className="mt-5 mb-5" id="supportInput" type="text" placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."/>
                    <br/><a href="">Track account opening </a>
                    <a  className="ms-5" href="">Track segment activation</a>
                    <a className="ms-5" href="">Intraday margins</a><br/>
                    <a  href="">Kite user manual</a>
                </div>
                <div className="col-6 p-5" style={{lineHeight: "2.5"}}>
                    <h3>Featured</h3>
                    <ol>
                        <li><a href="">Exclusion of F&O contracts on 8 securities from August 29, 2025</a></li>
                        <li><a href="">Revision in expiry day of Index and Stock derivatives contracts</a></li>
                    </ol>
                    
                </div>
            </div>
        </section>
    );
}

export default Hero;