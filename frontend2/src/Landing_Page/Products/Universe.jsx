function Universe() {
  return (
    <div className="container mt-5 text-center">
      <div className="row text-center mb-5">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4  mt-5">
          <img src="media/images/smallcaseLogo.png" alt="" />
          <p className="text-muted text-small mt-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4  mt-5">
          <img
            src="media/images/sensibullLogo.svg"
            alt=""
            style={{ width: "50%", marginBottom: "20px" }}
          />
          <p className="text-muted text-small  mt-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4  mt-5">
          <img
            src="media/images/goldenpiLogo.png"
            alt=""
            style={{ width: "50%" }}
          />
          <p className="text-muted text-small  mt-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        <div className="col-4 mt-5">
          <img
            src="media/images/streakLogo.png"
            alt=""
            style={{ width: "40%" }}
          />
          <p className="text-muted text-small  mt-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 mt-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt=""
            style={{ width: "50%" }}
          />
          <p className="text-muted text-small  mt-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 mt-5">
          <img
            src="media/images/dittoLogo.png"
            alt=""
            style={{ width: "30%" }}
          />
          <p className="text-muted text-small mt-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
      </div>
      <button className="btn btn-primary fs-5 mt-5 mb-5" style={{width : "20%", margin : "0 auto"}}><a href="/signup" style={{color: 'white'}}>Sign up for free</a></button>
    </div>
  );
}

export default Universe;
