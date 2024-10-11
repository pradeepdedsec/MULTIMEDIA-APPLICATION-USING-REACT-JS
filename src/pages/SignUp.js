import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../App';

const SignUp = () => {

    let {checkUser, regUser, setPendingUsername, setPendingPassword} =useAuth();

    const navigate=useNavigate();

    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

  const validateForm = () => {
    

    const phoneRegex = /^[0-9]+$/;
    if ((!phoneRegex.test(phoneNumber) || phoneNumber.length < 10) && (!(Number(phoneNumber)>=6000000000 && Number(phoneNumber)<=9999999999))) {  
      alert('Please enter a valid phone number.');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      alert('Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
      return false;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validateForm()){

      if(checkUser(username))
        alert('User already exists');
      else{
        setPendingUsername(username);
        setPendingPassword(password);
        navigate("/OtpVerify");
      }
        
    }
  };


  return (
    <div>
        <div className='total-login-box'>
            <div className='center-login-box'>
                <h1>Spotstar SignUp</h1>
                  <div className='login-input-box'>
                    <form onSubmit={(e)=>handleSubmit(e)}>

                      <div>
                        <input
                          type="text"
                          placeholder="Username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>

                      <div>
                          <input
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                          />
                        </div>

                        <div>
                          <input
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                          />
                        </div>

                        <div>
                          <input
                            type="number"
                            placeholder="Phone Number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                          />
                        </div>

                        <div>
                          <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>

                        <div>
                          <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </div>

                        <div>
                          <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                          />
                        </div>

                        <div style={{marginBottom:"10px",display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                          <button className='btn'  onClick={()=>navigate("/Login")}>Cancel</button>
                          <button className='btn'  type='sumbit'>Next</button>
                        </div>
                        <p>already have account <Link to="/Login">Log in</Link></p>
                    </form>
                      
                  </div>
            </div>
      </div>    
    </div>
  )
}

export default SignUp