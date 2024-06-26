import {Container} from 'reactstrap';
import CampsiteList from '../../features/campsites/CampsiteList';
import SubHeader from '../../components/SubHeader';

const CampsitesDirectoryPage = ()=> {

    return (
        <Container>
            <SubHeader current='Directory' />
                <CampsiteList />
        </Container>
    )
}


export default CampsitesDirectoryPage