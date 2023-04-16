import axios from 'axios';
import React, { useState } from 'react';

export default function OneProduct({
  company, setCompanies, deleteHandler, user,
}) {
  const [input, setInput] = useState({ newCompanyTel: company.telNum });
  const [change, setChange] = useState(false);

  const editHandler = () => {
    if (change) {
      axios.patch(`/api/edit/${company.id}`, input)
        .then((res) => {
          setChange(false);
          setCompanies((prev) => prev.map((el) => {
            if (el.id === res.data.id) return res.data;
            return el;
          }));
        });
    }
  };
  return (
    <div className="card" style={{ width: '19rem', marginTop: '20px', borderRadius: '20px' }}>
      <div className="card-body">
        <h4
          className="card-title"
          style={{ color: 'rgb(11, 110, 253)', fontWeight: 'bold' }}
        >
          {company.companyName}
          {' '}
        </h4>

        <p className="card-text" style={{ fontSize: '18px', fontWeight: 'bold', color: 'black' }}>
          {company.telNum}
          {user?.id === company?.userId && change && (
          <input
            value={input.change}
            onChange={((e) => setInput({ newCompanyTel: e.target.value }))}
            placeholder={company.telNum}
            style={{ width: '170px', height: '35px', borderRadius: '8px' }}
          />
          )}
          {user?.id === company?.userId && change && (
          <button type="button" onClick={editHandler} className="btn btn-outline-secondary" style={{ marginTop: '0px' }}>Acept</button>
          )}
        </p>
      </div>
      <div style={{ marginBottom: '7px' }}>
        {user?.id === company?.userId && (
        <button
          type="button"
          onClick={() => setChange((prev) => !prev)}
          className="btn btn-outline-secondary"
          style={{ marginLeft: '5px' }}
        >
          Edit telephone
        </button>
        )}
        {user?.id === company?.userId && (
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={() => deleteHandler(company.id)}
          style={{ marginLeft: '5px' }}
        >
          Delete
        </button>
        )}
        {/* {user?.id && (
        <a href="/">
          <img src="https://img.icons8.com/ios/50/null/plus-2-math.png" />
        </a>
        )} */}
      </div>
    </div>
  );
}
