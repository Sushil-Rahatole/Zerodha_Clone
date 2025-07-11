function RightSection({imageURL, productName, productDescription, learnMore}) {
    return (  
        <div className="container mt-5">
            <div className="row">
                
                <div className="col-6 p-5" style={{marginTop: "40px"}}>
                    <h1 className="mt-5" >{productName}</h1>
                    <p>{productDescription}</p>
                    
                    <a href={learnMore}>Learn More <i className="fa-solid fa-arrow-right-long"></i></a>
                    
                </div>
                <div className="col-6">
                    <img src={imageURL} alt="" />
                </div>
            </div>
        </div>
    );
}

export default RightSection;