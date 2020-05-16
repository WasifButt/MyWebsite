import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Navigation } from './Navbar'

export const Layout = (props) => (
    <Container fluid>
        <Row>
            <Col id = "sidebar-wrapper"><Navigation /></Col>
            <Col xs = {11}>{props.children}</Col>
        </Row>
    </Container>
)