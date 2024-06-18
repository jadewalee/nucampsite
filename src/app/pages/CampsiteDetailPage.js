import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectedCampsiteById } from "../../features/campsites/campsitesSlice";
import CampsiteDetail from "../../features/campsites/CampsitesDetail";
import CommentsList from "../../features/comments/CommentsList";
import SubHeader from "../../components/SubHeader";

const CampsiteDetailPage = ()=> {
    const {campsiteId} = useParams();
    const campsite = selectedCampsiteById(campsiteId);

    return (
        <Container>
            <SubHeader current={campsite.name} detail={true} />
            <Row>
                <CampsiteDetail campsite={campsite} />
                <CommentsList campsiteId={campsiteId} />  
            </Row>
        </Container>
    )
}

export default CampsiteDetailPage;