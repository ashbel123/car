import React from 'react';
import Home from './Home';
import steer from '../images/steer.jpeg'
import { Link } from 'react-router-dom';
import Logo from '../images/logo/logo.jpg'
const LoginPage = () => {
    return (
        <div className="login-container">
            <div className="login-form">
                <img src={Logo} alt="logo-img" style={{width:200,height:100,alignItems:'center'}} />
                <h1 style={{ textAlign: 'center' }}>Login</h1>
                <form>
                    {/* Add your login form elements here */}
                    <div>
                        <label htmlFor="mail" style={{fontSize:15}}>Mail Id:</label>
                        <input type="text" id="username" name="username" />
                    </div>
                    <div>
                        <label htmlFor="password" style={{fontSize:15}} >Password:</label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <div className="models-div__box__descr__name-price__btn submit">
                        <Link onClick={() => window.scrollTo(0, 0)} to="/home">
                            Submit
                        </Link>
                    </div>
                </form>
            </div>
            <div className="photo">
                {/* Add your photo here */}
                <img src={steer} alt="heyyy" />
            </div>
        </div>
    );
};

export default LoginPage;