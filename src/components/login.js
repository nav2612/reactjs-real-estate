import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { createBrowserHistory as history} from 'history';

const Login = () => {
	// Inputs
	var [mynumber, setnumber] = useState("");
	const [passw, setPassw]=useState(''); 

	// Sent OTP
	const signin = () => 
	{
		mynumber='+'+ mynumber;
		if (mynumber === "" || mynumber.length < 10) 
        {alert("Please enter a valid phone number");
        return;}
		else{
			alert("Done");
			history('/openhouse');
		}		
	}

	return (
		<body className="sign-up-page">
		<div className='login-box'>
			<center>
				<h1>Welcome to Open House!</h1>
                <h2>Login to your account</h2>
				<label>Phone Number</label>
				<div id = 'phone-input'>
					<PhoneInput country={'ca'}
					onlyCountries={['ca']}
					disableAreaCodes
					disableDropdown
					countryCodeEditable={false}
					value={mynumber} 
					onChange={(e) => {setnumber(e)}}
					placeholder="Enter phone number" /></div>
					<label>Password</label>
					<input type="text" name="passw" id="passw" placeholder='Enter your password' value={passw}
					onChange={(e)=>setPassw(e.target.value)}/> 
					{/*<div id="recaptcha-container"></div>*/}
					<button id="send-otp" onClick={()=>signin()}>Login</button>
				
				<a href='forgot_password'>Forgot password?</a>
				<br/><br/><br/>
				Not a member? <a href="/signup_realtor">Sign up</a>
			</center>
		</div>
		</body>
	);
}

export default Login;
