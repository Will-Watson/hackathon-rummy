import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer>
        <div className='container col-sm-10 col-md-8 col-lg-12'>
          <div className='row text-dark text-center py-4 justify-content-center'>
            <div className='col-sm-10 col-md-8 col-lg-6'>
              <p>All inquiries please email williampwatson1991@gmail.com</p>
            </div>
          </div>
        </div>
      </footer>
      <div className='socket text-center py-3'>
        <a
          href='https://github.com/will-watson'
          target='_blank'
          rel='noreferrer'
        >
          Designed and Developed by William Watson.
        </a>
      </div>
    </div>
  );
};

export default Footer;
