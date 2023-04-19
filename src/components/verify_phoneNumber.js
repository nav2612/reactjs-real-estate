import React, { useState } from "react";

const Verify_phone = () => {
	const [passw, setPassw] = useState("");

	return (
		<body className='sign-up-page'>
		<div className='login-box'>
			<center>
                <h2>Enter the OTP sent to your Phone Number</h2>
				<label>One-time Passcode</label>
				<input
              type="password"
              className="password"
              placeholder="Enter OTP"
              value={passw}
              onChange={(e) => setPassw(e.target.value)}
            />
			<button id="send-otp">Submit</button>
			</center>
		</div>
		</body>
	);
}

export default Verify_phone;
