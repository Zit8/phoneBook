import React from 'react';
import axios from 'axios';

// Компонент с формой входа в учётную запись
export default function SignIn() {
  const submitHandler = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));

    axios.post('/api/auth/signin', data)
      .then(() => {
        window.location = '/';
      });
  };
  return (
    <form className="row" style={{ width: '600px', marginLeft: '600px', marginTop: '120px' }} onSubmit={submitHandler}>
      <div>
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
              borderRadius: '13px', height: '40px', width: '100px', backgroundColor: '#554AF9', color: 'white', fontWeight: 'bold',
            }}
          >
            Sign In
          </button>
        </div>
      </div>
    </form>
  );
}
