import React, { useState } from 'react';
import axios from 'axios';

export default function SignUp() {
  const [err, setError] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    const { email, password, name } = formData;

    if (!(password && name)) {
      return setError({ message: 'Password and username must be non-empty' });
    }
    axios.post('/api/auth/signup', formData)
      .then(() => { window.location = '/'; })
      .catch((error) => {
        console.log(error);
        setError();
      });
  };
  return (
    <form className="row" style={{ width: '600px', marginLeft: '600px', marginTop: '120px' }} onSubmit={submitHandler}>
      <div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
          <input name="name" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">Enter your name.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input name="password" type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <label htmlFor="exampleInputEmail1" className="form-label">Change your role</label>
        <div className="form-group mt-3">
          <button
            type="submit"
            className="btn"
            style={{
              borderRadius: '13px', height: '40px', width: '100px', backgroundColor: '#0B6EFD', color: 'white', fontWeight: 'bold',
            }}
          >
            Sing up
          </button>
        </div>
      </div>
    </form>
  );
}
