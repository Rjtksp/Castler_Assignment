import React from "react";
import { Col, Card, Spinner } from "react-bootstrap";

const UserCard = (props) => {
    const {
        profileDetail,
        loadingStatus
    } = props;
    return (
        <>
            {profileDetail
                ? <Col xs lg="4" className="mt-2">
                    <Card>
                        <Card.Img variant="top" src={profileDetail.avatar} />
                        <Card.Body>
                            <Card.Text>
                                <strong>Name: </strong> {`${profileDetail.first_name ?? ""} ${profileDetail.last_name ?? ""}`}
                            </Card.Text>
                            <Card.Text>
                                <strong>Email: </strong> {profileDetail.email ?? ""}
                            </Card.Text>
                            <Card.Text>
                                <strong>Description: </strong>
                            </Card.Text>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sapiente omnis dolore, quasi expedita a, sequi natus perspiciatis explicabo animi voluptate maiores quos praesentium provident ipsam commodi laborum quisquam iure!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                : <Col xs lg="8" className="text-center mt-2 align-items-center">
                    No user is found. Please use <strong>Search</strong> to found one. {loadingStatus && <Spinner animation="border" variant="info" size="sm" />}
                </Col>
            }
        </>
    );
}

export default UserCard;