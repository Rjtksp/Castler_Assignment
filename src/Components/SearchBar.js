import React, { useState } from "react";
import { Navbar, Row, Col, Form, InputGroup, Toast, ToastContainer } from "react-bootstrap";
import { Search, ExclamationOctagonFill } from "react-bootstrap-icons";

const SearchBar = (props) => {
    const {
        searchTerm,
        setTerm
    } = props;
    const [toggleToast, setToggleToast] = useState(false);

    const handleSearch = (e) => {
        const term = e.target.value;
        if (term && term.match(/^[0-9]+$/) === null) {
            setToggleToast(true);
            setTerm("");
        } else {
            setToggleToast(false);
            setTerm(term);
        }
    }

    return (
        <>
            <Navbar
                bg="info"
                expand="lg"
            >
                <div className="w-100 py-3">
                    <Row className="justify-content-center g-0">
                        <Col xs lg="8">
                            <Form>
                                <InputGroup>
                                    <InputGroup.Text>
                                        <Search />
                                    </InputGroup.Text>
                                    <Form.Control
                                        type="search"
                                        placeholder="Enter Valid ID"
                                        aria-label="search"
                                        size="md"
                                        value={searchTerm}
                                        onChange={handleSearch}
                                    />
                                </InputGroup>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </Navbar>

            <ToastContainer
                position="bottom-end"
                className="p-3"
            >
                <Toast
                    show={toggleToast}
                    bg="warning"
                    onClose={() => setToggleToast(false)}
                    delay={3000}
                    autohide
                >
                    <Toast.Header>
                        <ExclamationOctagonFill /> 
                        <strong className="ms-1 me-auto">Warning</strong>
                    </Toast.Header>
                    <Toast.Body className="text-dark">
                        Please enter a valid digit/ID (1-12). 
                    </Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    );
}

export default SearchBar;