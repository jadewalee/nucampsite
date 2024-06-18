import React from 'react'
// import { CAMPSITES } from '../../app/shared/CAMPSITES'
import CampsiteCard from './CampsiteCard'
import {Row,Col} from 'reactstrap'
import { selectAllCampsites } from './campsitesSlice'


const CampsiteList = () => {
    const campsites = selectAllCampsites()
    return (
        <Row className='ms-auto'>
            {campsites.map(campsite => {
                return <Col md='5' className='m-4' key={campsite.id} >                  
                    <CampsiteCard campsite={campsite} />
                </Col>
            })}
        </Row>
    )
}

export default CampsiteList