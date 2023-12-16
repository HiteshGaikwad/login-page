
import React, { useState } from 'react'

const App = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);


  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailRegex.test(email));
  };

  const validatePassword = () => {
    setPasswordValid(password.length >= 8);
  };

  const validateConfirmPassword = () => {
    setConfirmPasswordValid(password === confirmPassword);
  };

  const handleSubmit = () => {
    if (emailValid && passwordValid && confirmPasswordValid) {
      alert('Form submitted successfully');
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } else {
      alert("Can't submit the form. Please check the input fields.");
    }
  };

  return (
    <div className='main-container'>
      <form onSubmit={(e)=>e.preventDefault()}>
        <div className='input-div'>
          <label>Email:</label>
        <input type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailValid(true); 
          }}
          onBlur={validateEmail}
          style={{ border: emailValid ? '2px solid green' : '2px solid red' }} />
         {!emailValid && <span style={{ color: 'red' }}>Invalid email format</span>}
        </div>

        <div className='input-div password'>
          <label>Password:</label>
        <input type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordValid(true);
          }}
          style={{
            border: passwordValid ? '1px solid green' : '1px solid red',
          }}
          onBlur={validatePassword}/>
          {!passwordValid && (
          <span style={{ color: 'red' }}>Password must be at least 8 characters long</span>
        )}
        </div>
        <div className='input-div c-password'>
          <label>Confirm password:</label>
        <input type="password"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            setConfirmPasswordValid(true);
          }}
          onBlur={validateConfirmPassword}
          style={{
            border: confirmPasswordValid ? '1px solid green' : '1px solid red',
          }}/>
          {!confirmPasswordValid && (
          <span style={{ color: 'red' }}>Passwords do not match</span>
        )}
        </div>
        <button onClick={handleSubmit}>Sign Up</button>
      </form>
    </div>
  )
}

export default App