import React from 'react';
import RulesImage1 from '../images/RulesImage1.jpeg';
import RulesImage2 from '../images/RulesImage2.jpeg';
import RulesImage3 from '../images/RulesImage3.jpeg';
import RulesImage4 from '../images/RulesImage4.jpeg';
import RulesImage5 from '../images/RulesImage5.jpeg';
import RulesImage6 from '../images/RulesImage6.jpeg';
import RulesImage7 from '../images/RulesImage7.jpeg';
import RulesImage8 from '../images/RulesImage8.jpeg';

const Rules = () => {
  return (
    <div className='rules-container container'>
      <div className='col-12 text-center mt-5'>
        <h1 className='text-dark pt-4'>Instructions</h1>
        <div className='border-top border-primary w-25 mx-auto my-3'></div>
        <p className='lead'>something should be here</p>
      </div>
      <div className='container'>
        <div className='row my-5'>
          <div className='col-md-4 my-4'>
            <img src={RulesImage1} alt='cards' className='w-100' />
            <h4 className='my-4'>Rule #1</h4>
            <p>this is where the rule explanation is going to go</p>
          </div>

          <div className='col-md-4 my-4'>
            <img src={RulesImage2} alt='cards' className='w-100' />
            <h4 className='my-4'>Rule #1</h4>
            <p>this is where the rule explanation is going to go</p>
          </div>

          <div className='col-md-4 my-4'>
            <img src={RulesImage3} alt='cards' className='w-100' />
            <h4 className='my-4'>Rule #1</h4>
            <p>this is where the rule explanation is going to go</p>
          </div>

          <div className='col-md-4 my-4'>
            <img src={RulesImage4} alt='cards' className='w-100' />
            <h4 className='my-4'>Rule #1</h4>
            <p>this is where the rule explanation is going to go</p>
          </div>

          <div className='col-md-4 my-4'>
            <img src={RulesImage5} alt='cards' className='w-100' />
            <h4 className='my-4'>Rule #1</h4>
            <p>this is where the rule explanation is going to go</p>
          </div>

          <div className='col-md-4 my-4'>
            <img src={RulesImage6} alt='cards' className='w-100' />
            <h4 className='my-4'>Rule #1</h4>
            <p>this is where the rule explanation is going to go</p>
          </div>

          <div className='col-md-4 my-4'>
            <img src={RulesImage7} alt='cards' className='w-100' />
            <h4 className='my-4'>Rule #1</h4>
            <p>this is where the rule explanation is going to go</p>
          </div>

          <div className='col-md-4 my-4'>
            <img src={RulesImage8} alt='cards' className='w-100' />
            <h4 className='my-4'>Rule #1</h4>
            <p>this is where the rule explanation is going to go</p>
          </div>

          <div className='col-md-4 my-4'>
            <img src={RulesImage8} alt='cards' className='w-100' />
            <h4 className='my-4'>Rule #1</h4>
            <p>this is where the rule explanation is going to go</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
