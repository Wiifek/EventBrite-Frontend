import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChoosePhotoWidget, ProfileCardWidget } from "../components/Widgets";

import Profile3 from "../assets/img/team/profile-picture-3.jpg";
import userService from "../services/user.service";
import { useParams } from "react-router-dom";

import moment from "moment-timezone";
import Datetime from "react-datetime";
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup } from '@themesberg/react-bootstrap';
import toastrService from "../services/toastr.service";


export default () => {

    const [currentUser, setCurrentUser] = useState({firstName: ''});

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [birthday, setBirthday] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [avatar, setAvatar] = useState("");

    const [firstNameRequired, setFirstNameRequired] = useState("");
    const [lastNameRequired, setLastNameRequired] = useState("");
    const [roleRequired, setRoleRequired] = useState("");
    const [birthdayRequired, setBirthdayRequired] = useState("");
    const [addressRequired, setAddressRequired] = useState("");
    const [phoneRequired, setPhoneRequired] = useState("");
    const [avatarRequired, setAvatarRequired] = useState("");

    const { id } = useParams();
    useEffect(() => {
        loadUser();
    }, [])

    const loadUser = () => {
        userService.getUserById(id)
            .then(response => {
                setCurrentUser(response.data);
                console.log({currentUser, data: response.data})
                setFirstName(currentUser.firstName);
                setLastName(currentUser.lastName);
                setEmail(currentUser.email);
                setRole(currentUser.role);
                setBirthday(currentUser.birthDate);
                setAddress(currentUser.address);
                setPhone(currentUser.phone);
                setAvatar(currentUser.avatar);
            }).catch(err => {
                console.log(err)
            });
    }

    const isValidForm = () => {
        if (!firstName) {
            setFirstNameRequired('First name is required.')
        } else {
            setFirstNameRequired(null)
        }
        if (!lastName) {
            setLastNameRequired('Last name is required.')
        } else {
            setLastNameRequired(null)
        }
        if (role == "0") {
            setRoleRequired('Role is required.')
        } else {
            setRoleRequired(null)
        }
        if (!birthday) {
            setBirthdayRequired('Birth date is required.')
        } else {
            setBirthdayRequired(null)
        }
        if (!phone) {
            setPhoneRequired('Phone number is required.')
        } else {
            setPhoneRequired(null)
        }
        if (!address) {
            setAddressRequired('Address is required.')
        } else {
            setAddressRequired(null)
        }
        if (firstName && lastName && birthday && address && phone && role)
            return true
        else return false
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (isValidForm()) {
            console.log(currentUser)
            // userService.editUser(id, currentUser)
            //     .then(response => {
            //         toastrService.showSuccessMessage("Your profile has been updated successfully", `Update profile`);
            //         refreshList();
            //     }).catch(err => {
            //         toastrService.showErrorMessage("Failed to update your profile", `Update profile`);
            //         console.log(err)
            //     });
        }
    }


    return (
        <>
            <Row>
                <Col xs={12} xl={8}>
                    <Card border="light" className="bg-white shadow-sm mb-4">
                        <Card.Body>
                            <h5 className="mb-4">General information</h5>
                            <Form onSubmit={submitHandler}>
                                <Row>
                                    <Col md={6} className="mb-3">
                                        <Form.Group id="firstName">
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control value={firstName} onChange={e => setFirstName(e.target.value)} type="text" placeholder="Enter your first name" />
                                            <div className="text-start w-100 d-block invalid-feedback">{firstNameRequired}</div>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <Form.Group id="lastName">
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control value={lastName} onChange={e => setLastName(e.target.value)} type="text" placeholder="Also your last name" />
                                            <div className="text-start w-100 d-block invalid-feedback">{lastNameRequired}</div>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="align-items-center">
                                    <Col md={6} className="mb-3">
                                        <Form.Group id="birthday">
                                            <Form.Label>Birthday</Form.Label>
                                            <Datetime
                                                timeFormat={false}
                                                onChange={setBirthday}
                                                initialViewDate={moment(birthday).format("MM/DD/YYYY")}
                                                renderInput={(props, openCalendar) => (
                                                    <InputGroup>
                                                        <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
                                                        <Form.Control
                                                            type="text"
                                                            value={birthday ? moment(birthday).format("MM/DD/YYYY") : ""}
                                                            placeholder="mm/dd/yyyy"
                                                            onFocus={openCalendar}
                                                            onChange={() => { }} />
                                                    </InputGroup>
                                                )} />
                                            <div className="text-start w-100 d-block invalid-feedback">{birthdayRequired}</div>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <Form.Group id="gender">
                                            <Form.Label>Role</Form.Label>
                                            <Form.Select value={role} onChange={e => setRole(e.target.value)}>
                                                <option value="0"></option>
                                                <option value="Admin">Admin</option>
                                                <option value="Host">Host</option>
                                                <option value="Customer">Customer</option>
                                            </Form.Select>
                                            <div className="text-start w-100 d-block invalid-feedback">{roleRequired}</div>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6} className="mb-3">
                                        <Form.Group id="emal">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control value={email} disabled type="email" placeholder="name@company.com" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <Form.Group id="phone">
                                            <Form.Label>Phone</Form.Label>
                                            <Form.Control value={phone} onChange={e => setPhone(e.target.value)} type="number" placeholder="+12-345 678 910" />
                                            <div className="text-start w-100 d-block invalid-feedback">{phoneRequired}</div>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <h5 className="my-4">Address</h5>
                                <Row>
                                    <Col sm={12} className="mb-3">
                                        <Form.Group id="address">
                                            <Form.Label>Address</Form.Label>
                                            <Form.Control value={address} onChange={e => setAddress(e.target.value)} type="text" placeholder="Enter your home address" />
                                            <div className="text-start w-100 d-block invalid-feedback">{addressRequired}</div>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <h5 className="my-4">Profile photo</h5>
                                <Row>
                                    <Col xs={12} xl={4}>
                                        <Col xs={12}>
                                            <ChoosePhotoWidget
                                                title="Select profile photo"
                                                photo={avatar}
                                            />
                                        </Col>
                                    </Col>
                                </Row>
                                <div className="mt-3">
                                    <Button variant="primary" type="submit">Save All</Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>


            </Row>
        </>
    );
};
