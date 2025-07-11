import { Link } from "react-router-dom"

function NotFound() {
    return (  
        <div className="container p-5 mt-5 mb-5">
            <div className="row p-5 ">
                <p className="fs-2">404</p>
                <h1>Kiaan couldn’t find that page</h1>
                <h2>We couldn’t find the page you were looking for. Visit <Link to="/">Zerodha’s home page</Link> </h2>
            </div>


        </div>
    );
}

export default NotFound;