import axios from 'axios';
import React, { useState } from 'react';
import OneCompany from './OneCompany';

export default function MainPage({ allCompany, user }) {
  const [companies, setCompanies] = useState(allCompany);

  const deleteHandler = (id) => {
    axios.delete(`/api/${id}`)
      .then(() => setCompanies((prev) => prev.filter((el) => el.id !== id)));
  };

  return (
    <div className="row d-flex justify-content-center column-gap-3 mt-4">
      {companies.map((company) => (
        <OneCompany
          key={company.id}
          company={company}
          user={user}
          setCompanies={setCompanies}
          deleteHandler={deleteHandler}
        />
      ))}
    </div>
  );
}
