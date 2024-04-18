import React from 'react'
import '../../styles/App.css'
import CampsiteList from '../../features/campsites/CampsiteList';
import { Breadcrumb, BreadcrumbItem, Container } from 'reactstrap';


const HomePage = () => {
    return (
        <Container>
            <Breadcrumb>
                <BreadcrumbItem>
                    <a href="/HomePage">
                        Home
                    </a>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    Home
                </BreadcrumbItem>
            </Breadcrumb>
            <CampsiteList />
        </Container>
    )
}

export default HomePage;