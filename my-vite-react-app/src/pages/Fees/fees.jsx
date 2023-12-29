import React from 'react';
import "./fees.scss"

function fees() {
  return (
    <div className='container'>
      <section className="billing">
        
        <p>
          <strong>
          A medical fee is the amount charged by a medical practitioner for a medical service. 
          The cost of medical services can vary depending on the type of service, the location, and the medical practitioner. 
          In Australia, the Medical Benefits Schedule (MBS) lists all the medical services that are eligible for a Medicare benefit. 
          The MBS also lists the fee that Medicare pays for each service. The difference between the fee charged by the medical practitioner and the fee paid by 
          Medicare is known as the out-of-pocket cost or gap payment 
          </strong>
        </p>
        <p>
        GP consultation fees are based upon time. Consultations attract a fee which is payable at the time of your visit by EFTPOS or credit card. 
        Unfortunately we cannot accept cash payments.
        </p>

        <p>Bookings are available for either 15 or 30 minute consultations.</p>
        
        <table>
          <tr>
            <td>
              <strong>Duration</strong>
            </td>
            <td>
              <strong>Fee</strong>
            </td>
            <td>
              <strong>Medicare Rebate</strong>
            </td>
            <td>
              <strong>Patient out of pocket cost.</strong>
            </td>
          </tr>

          <tr>
             <td>
              <span>5-15 minutes</span>
            </td>
            <td>
              <span>$100.00</span>
            </td>
            <td>
              <span>41.40</span>
            </td>
            <td>
              <span>58.60</span>
            </td>
          </tr>

          <tr>
             <td>
              <span>15-25 minutes</span>
            </td>
            <td>
              <span>$135.00</span>
            </td>
            <td>
              <span>$80.10</span>
            </td>
            <td>
              <span>$54.90</span>
            </td>
          </tr>

          <tr>
             <td>
              <span>25-35 mins</span>
            </td>
            <td>
              <span>$170.00</span>
            </td>
            <td>
              <span>$80.10</span>
            </td>
            <td>
              <span>$89.90</span>
            </td>
          </tr>

          <tr>
             <td>
              <span>35+ mins</span>
            </td>
            <td>
              <span>$215.00</span>
            </td>
            <td>
              <span>$118.00</span>
            </td>
            <td>
              <span>$97.00</span>
            </td>
          </tr>

        </table>
      

        <p>GP consultation fees are based upon time. Consultations attract a fee which is payable at the time of your visit by EFTPOS or credit card. Unfortunately we cannot accept cash payments.</p>

        <p>Your Medicare rebate can be instantly repaid back into either your savings or cheque account through our TYRO machine via a chip-enabled card. Rebates cannot be made to credit cards, including those on mobile phones.</p>

        <p>Alternatively, the Medicare rebate can be returned to your bank account via Medicare Online or we can provide you with a receipt to present to Medicare. To register for Medicare online go to: <a href="https://www.medicareaustralia.gov.au/online" target="_blank">www.medicareaustralia.gov.au/online</a></p>
      </section>



    </div>
  );
}

export default fees