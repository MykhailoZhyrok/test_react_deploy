import React from 'react'
import paymentsLogo from '../../assets/logoPay.png'
import './Payments.css'


export const Payments = () => {
  return (
    <div className='paymentsWrap'>
        <div className="paymentsCont">
            <div className="payments">
                <img src={paymentsLogo} alt="paymentsLogo" className="paymentsLogo" />

                <div className="blockHeader">
                <p className="blockMainTitle">
                The magic of AI at your fingertips.
                </p>

                <h2 className="headerSecTitle">
                Achieve clear, impactful results without the complexity.
                </h2>
                <button className='paymentsButton'>
                Try for free
                </button>
            </div>
            </div>
        </div>
    </div>
  )
}
