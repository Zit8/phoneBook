import React, { useState } from 'react';
import axios from 'axios';

export default function AddProduct() {
  const [input, setInput] = useState({
    companyName: '', telNum: '',
  });
  const addHandler = (e) => {
    e.preventDefault();
    const oneCompany = Object.fromEntries(new FormData(e.target));
    axios.post('/api/addcompany', oneCompany);
    setInput({
      companyName: '',
      telNum: '',
    });
  };
  const changeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form className="row" style={{ width: '600px', marginLeft: '600px', marginTop: '120px' }} onSubmit={addHandler}>
      <div>
        <h3 style={{ marginLeft: '80px', color: 'rgb(11, 110, 253)' }}>ADD NEW COMPANY</h3>
        <div className="mb-3" style={{ marginTop: '60px' }}>
          <label htmlFor="exampleInputCompanyName" className="form-label">Name of company</label>
          <input name="companyName" type="text" value={input.companyName} onChange={changeHandler} className="form-control" id="exampleCompanyName" aria-describedby="companyNameHelp" />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputCompanyTelNum" className="form-label">Telephone number</label>
          <input name="telNum" type="text" value={input.telNum} onChange={changeHandler} className="form-control" id="exampleInputEmail1" aria-describedby="telHelp" />
          <div id="telHelp" className="form-text">Enter telephone numer of this company.</div>
        </div>

        <div className="form-group mt-3">
          <button
            type="submit"
            className="btn"
            style={{
              borderRadius: '13px', height: '40px', width: '150px', backgroundColor: 'rgb(11, 110, 253)', color: 'white', fontWeight: 'bold',
            }}
          >
            Add company
          </button>
        </div>
      </div>
    </form>
  );
}
