import axios from 'axios';
import React from 'react';

export default function Navbar() {
  const logoutHandler = () => {
    axios.post('api/auth/logout')
      .then(() => {
        window.location = '/';
      });
  };
  return (
    <nav className="navbar bg-primary" data-bs-theme="dark">
      <div className="container-fluid" style={{ marginTop: '30px' }}>
        <div style={{ marginBottom: '30px' }}>
          <a className="navbar-brand" href="/" style={{ fontSize: '25px', paddingTop: '0px', fontWeight: 'bold' }}>
            <img src="https://img.icons8.com/external-prettycons-lineal-prettycons/49/null/external-phonebook-office-prettycons-lineal-prettycons.png" />
            {'   '}
            ALL COMPANIES

          </a>
          {/* {user?.role
          && ( */}
          <a
            className="navbar-brand"
            href="/addcompany"
            style={{
              fontSize: '15px', marginLeft: '70px', fontWeight: 'bold', color: 'white',
            }}
          >
            + ADD COMPANY
          </a>
          {/* )} */}

          {/* {!user?.id
          && ( */}
          <a
            className="navbar-brand"
            href="/handbook"
            style={{
              fontSize: '15px', marginLeft: '70px', fontWeight: 'bold', color: 'white',
            }}
          >
            LOOK MY HANDBOOK
          </a>
          <a
            className="navbar-brand"
            href="/auth/signup"
            style={{
              fontSize: '15px', paddingTop: '0px', marginLeft: '600px', color: 'rgb(248, 252, 12)',
            }}
          >

            <img src="https://img.icons8.com/external-anggara-basic-outline-anggara-putra/48/000000/external-add-friends-social-media-interface-anggara-basic-outline-anggara-putra.png" />
          </a>
          {/* )} */}
          {/* {!user?.id
          && ( */}
          <a
            className="navbar-brand"
            href="/auth/signin"
            style={{
              fontSize: '15px', paddingTop: '0px', color: 'white',
            }}
          >
            <img src="https://img.icons8.com/external-bearicons-detailed-outline-bearicons/64/null/external-login-call-to-action-bearicons-detailed-outline-bearicons.png" />
          </a>
          {/* )} */}
        </div>
        <a
          href="/"
          onClick={logoutHandler}
          style={{
            fontSize: '15px', paddingBottom: '30px', color: 'white',
          }}
        >
          <img src="https://img.icons8.com/ios/50/null/enter-2.png" />
        </a>
      </div>
    </nav>
  );
}
