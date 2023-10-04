import steer from '../images/steer.jpeg'
import { Link } from 'react-router-dom'
import Logo from '../images/logo/logo.jpg'
const Register = () => {
    return (
        <>
            <div className="login-container">
                <div className="login-form">
                    <img src={Logo} alt="logo-img" style={{ width: 200, height: 100, alignItems: 'center' }} />
                    <h1 style={{textAlign:'center'}}>Sign Up</h1>
                    <form>
                        {/* Add your login form elements here */}
                        <div>
                            <label htmlFor="username" style={{fontSize:15}}>Mail Id:</label>
                            <input type="text" id="username" name="username" />
                        </div>
                        <div>
                            <label htmlFor="password" style={{fontSize:15}}>Password:</label>
                            <input type="password" id="password" name="password" />
                        </div>
                        <div>
                            <label htmlFor="password" style={{fontSize:15}}>Confirm Password:</label>
                            <input type="password" id="password" name="password" />
                        </div>
                        <div className="models-div__box__descr__name-price__btn submit">
                            <Link onClick={() => window.scrollTo(0, 0)} to="/login">
                                Register
                            </Link>
                        </div>
                        <div>
                            <h2 style={{ textAlign: 'center', fontSize:15}}>
                                {/* <br> </br> */}
                                {/* <br> </br>   */}
                                Or
                            </h2>

                        </div>
                        <div>
                            <Link onClick={() => window.scrollTo(0, 0)} to="/login" style={{ textAlign: 'center', fontSize:20, color:'blue'}}>
                                Already have an account?
                            </Link>

                        </div>
                    </form>
                </div>
                <div className="photo">
                    {/* Add your photo here */}
                    <img src={steer} alt="heyyy" />
                </div>
            </div>
        
        </>
    );  
};
export default Register;