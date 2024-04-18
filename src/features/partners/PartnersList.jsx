import React from 'react'
import { PARTNERS } from '../../app/shared/PARTNERS';
import {Col} from 'reactstrap';
import Partner from './Partner';


const PartnersList = () => {
  const partners = PARTNERS;
 console.log(partners)
  return (
    <Col className='mt-4'>
    {partners.map((partner) => <div> <Partner partner={partner} />  </div>)}
    </Col>
  )
}

export default PartnersList;