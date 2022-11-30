import Link from 'next/link';
import React from 'react';

const Footer = (): JSX.Element => (
  <footer className="page-footer font-small bg-dark text-white pt-5 pb-5">
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase">Sheruta</h5>
          <p>
            Here you can use rows and columns to organize your footer content.
          </p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Services</h5>
          <ul className="list-unstyled">
            <li>
              <Link href="/">For Renters</Link>
            </li>
            <li>
              <Link href="/">For Landlords/Agents</Link>
            </li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Company</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3">
      © 2022 Copyright:
      <a href="https://mdbootstrap.com/"> sheruta.com</a>
    </div>
  </footer>
);

export default Footer;
