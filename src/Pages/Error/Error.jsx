import { Link } from "react-router-dom";
import './Error.css'

const Error = () => {
    return (
        <div className="error">
            <div class="text">
                <div>Looks Like you are lost in the space</div>
                <h1>404</h1>
                <hr/>
                    <div>Page Not Found</div>
                    <Link to='/'>Go To Home</Link>
            </div>

            <div class="astronaut">
                <img src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png" alt="" class="src"/>
            </div>
          
        </div>
    );
};

export default Error;