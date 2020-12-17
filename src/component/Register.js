import React, {useEffect, useState} from "react";
import {connect} from 'react-redux';
import {userAdd, userDelete, userEdit} from '../redux/userData/action';
import {Row, Col, Card, Form, Input, Radio, Button, InputNumber, message} from "antd";
import {UserOutlined, MailOutlined, LockOutlined} from "@ant-design/icons";
import 'antd/dist/antd.css';
import TableData from "./TableData";

const Register = (props) => {
    const {list, dispatch} = props;
    const [userDetail, setUserDetail] = useState({
        firstName: "",
        lastName: "",
        email: "",
        age: "",
        gender: "",
        password: "",
    });
    const [data, setData] = useState([]);
    const [editable, setEditable] = useState(null);
    const [error, setError] = useState({});

    useEffect(() =>{
        setData(list);
    },[list])

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserDetail({...userDetail, [name]: value})
    }

    const validate = (name, value) => {
        const emailRegx = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/ig;
        const numRegx = /^\d{1,6}(?:\.\d{0,2})?$/g;
        switch (name) {
            case 'firstName':
                if (!value) return "First Name is required";
                return null;
            case 'lastName':
                if (!value) return "Last Name is required";
                return null;
            case 'email':
                if (!emailRegx.test(value)) return "Email is required";
                return null;
            case 'age':
                if (!numRegx.test(value)) return "Age is required";
                return null;
            case 'gender':
                if (!value) return "Gender is required";
                return null;
            case 'password':
                if (!value) return "Password is required";
                return null;
            default:
                return null;
        }
    };
    const onSubmit = () => {
        let errorObj = {}
        const newsUerDetail = {
            firstName: userDetail.firstName,
            lastName: userDetail.lastName,
            email: userDetail.email,
            age: userDetail.age,
            gender: userDetail.gender,
            password: userDetail.password
        }
        Object.keys(newsUerDetail).forEach((key) => {
            const error = validate(key, newsUerDetail[key]);
            if (error && error.length) {
                errorObj[key] = error;
            }
        });
        if (Object.keys(errorObj).length) {
            return setError(errorObj);
        } else {
            if (editable !== null && editable !== -1) {
                dispatch(userEdit(userDetail))
                setEditable(null)
                setUserDetail({})
            } else {
                userDetail.id = data.length + 1;
                dispatch(userAdd(userDetail))
                setEditable(null)
                setUserDetail({})
            }
            setError({})
        }
    }
    const onEdit = (index) => {
        setUserDetail(data[index]);
        setEditable(index);
    }

    const onDelete = (index) => {
        dispatch(userDelete(index))
        message.success("Data is delete successfully");

    }
    return (
        <>
            <Row style={{marginTop: 100}}>
                <Col span={8}/>
                <Col span={8}>
                    <Card>
                        <h2 style={{textAlign: "center"}}>Registration Form</h2>
                        <p style={{textAlign: "center"}}>Creat Your Account</p><br/>
                        <Form>
                            <Form.Item>
                                <Input placeholder="Enter Your firstname" name="firstName"
                                       value={userDetail.firstName}
                                       onChange={handleChange} addonBefore={(<UserOutlined/>)}/>
                                <span className="text-danger">{error.firstName || ""}</span>
                            </Form.Item>
                            <Form.Item>
                                <Input placeholder="Enter Your lastname" name="lastName" value={userDetail.lastName}
                                       onChange={handleChange} addonBefore={(<UserOutlined/>)}/>
                                <span className="text-danger">{error.lastName || ""}</span>
                            </Form.Item>
                            <Form.Item>
                                <Input placeholder="Enter Your EmailId" name="email" value={userDetail.email}
                                       onChange={handleChange} addonBefore={<MailOutlined/>}/>
                                <span className="text-danger">{error.email || ""}</span>
                            </Form.Item>
                            <Form.Item>
                                Age : <InputNumber placeholder="age" name="age"
                                                   onChange={value => handleChange({target: {name: "age", value}})}
                                                   value={userDetail.age}/>
                                <span className="text-danger">{error.age || ""}</span>
                            </Form.Item>
                            <Form.Item>
                                Gender: <Radio.Group name="gender" onChange={e => handleChange({
                                target: {
                                    name: "gender",
                                    value: e.target.value
                                }
                            })} value={userDetail.gender}>
                                <Radio value="Male">Male</Radio>
                                <Radio value="Female">Female</Radio>
                                <Radio value="Other">Other</Radio>
                            </Radio.Group>
                                <span className="text-danger">{error.gender || ""}</span>
                            </Form.Item>
                            <Form.Item>
                                <Input.Password placeholder="Enter Your PassWord" name="password"
                                                value={userDetail.password} onChange={handleChange}
                                                addonBefore={(<LockOutlined/>)}/>
                                <span className="text-danger">{error.password || ""}</span>
                            </Form.Item>
                            <Form.Item>
                                <Button className="btn-create-account" onClick={onSubmit}>
                                    Create Account
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
                <Col span={8}/>
            </Row>
            {/*table-------*/}
            <TableData setUserDetail={setUserDetail} onEdit={onEdit} onDelete={onDelete}/>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        list: state.data
    }
}
export default connect(mapStateToProps)(Register);