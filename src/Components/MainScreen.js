import React, { useState, useEffect } from "react";
import { Col, Row, Toast, ToastContainer } from "react-bootstrap";
import SearchBar from "./SearchBar";
import UserCard from "./UserCard";
import { fetchUserData } from "./MainScreenFunctions";
import { ExclamationOctagonFill } from "react-bootstrap-icons";

const MainScreen = () => {
    const [searchValue, setSearchValue] = useState("");
    const [userData, setUserData] = useState(null);
    const [toggleToast, setToggleToast] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (searchValue) {
            fetchUserData(searchValue, setIsLoading)
                .then(res => {
                    if (res?.data?.id) {
                        setUserData(res.data);
                        setToggleToast(false);
                    } else {
                        setUserData(null);
                        setToggleToast(true);
                    }
                    setIsLoading(false);
                });
        } else {
            setUserData(null);
        }
    }, [searchValue]);

    return (
        <>
            <Row className="g-0">
                <Col xs lg="12">
                    <SearchBar
                        searchTerm={searchValue}
                        setTerm={setSearchValue}
                    />
                    <Row 
                        className="g-0 justify-content-center align-items-center"
                        style={{height: "80vh"}}
                    >
                        <UserCard
                            profileDetail={userData}
                            loadingStatus={isLoading}
                        />
                    </Row>
                </Col>
            </Row>

            <ToastContainer
                position="bottom-end"
                className="p-3"
            >
                <Toast
                    show={toggleToast}
                    bg="danger"
                    onClose={() => setToggleToast(false)}
                    delay={3000}
                    autohide
                >
                    <Toast.Header>
                        <ExclamationOctagonFill /> 
                        <strong className="ms-1 me-auto">Exception</strong>
                    </Toast.Header>
                    <Toast.Body className="text-white">
                        Oops! Something went wrong. 
                    </Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    );
}

export default MainScreen; 