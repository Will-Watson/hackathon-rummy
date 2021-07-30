import React from 'react';
import { rules } from '../data';

const Rules = () => {
  return (
    <div className='rules-container container'>
      <div className='col-12 text-center mt-5'>
        <h1 className='text-dark pt-4'>Instructions</h1>
        <div className='border-top border-primary w-25 mx-auto my-3'></div>
        <p className='lead'>
          The object of the game is to be the first to achieve Rummy.
        </p>
      </div>
      <div className='container'>
        <div className='row my-5'>
          {rules.map((rule) => (
            <div className='col-md-4 my-4'>
              <img src={rule.img} alt='Rule' className='w-100' />
              <h4 className='my-4'>{rule.title}</h4>
              <p>{rule.rule}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rules;
