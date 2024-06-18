import { Col, Row } from 'reactstrap'
// import DisplayCard from './displayCard'
import AnimatedDisplayCard from './AnimatedDisplayCard'
import { selectFeaturedCampsites } from '../campsites/campsitesSlice'
import { selectFeaturedPromotion } from '../promotions/promotionsSlice'

const DisplayList = () => {
    const items = [selectFeaturedCampsites(), selectFeaturedPromotion()]

    return (
        <Row>
            {items.map((item, idx) => {
                return (
                    <Col md className='m-1' key={idx}>
                        <AnimatedDisplayCard item={item} />
                    </Col>
                )
            })}
        </Row>
    )
}
export default DisplayList;