import React from 'react'
import '../../styles/App.css'
import { Container } from 'reactstrap';
import DisplayList from '../../features/display/displayList';
import SubHeader from '../../components/SubHeader';


const HomePage = () => {
    return (

        <Container>
            <SubHeader current='Home' />
           <DisplayList />
        </Container>


        // <Container>
        //     <Breadcrumb>
        //         <BreadcrumbItem>
        //             <a href="/HomePage">
        //                 Home
        //             </a>
        //         </BreadcrumbItem>
        //         <BreadcrumbItem active>
        //             Home
        //         </BreadcrumbItem>
        //     </Breadcrumb>
        //     <CampsitesDirectoryPage />
        // </Container>
    )
}

export default HomePage;