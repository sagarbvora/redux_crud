import React,{ useState } from 'react';
import {connect} from 'react-redux';
// import {userDetails} from "./redux/userData/action";
const Form = (props) =>{
    return(
        <>
            <Row>
                <Col span={8}/>
                <Col span={8}>
                    <Card className="card_formate mt-lg-5">
                        <Form>
                            <Form.Item>
                                <Input name="firstName" placeholder="Please Input Your First Name!"
                                       value={userDetails.firstName}
                                       addonBefore={<UserOutlined/>} onChange={handleChange}/>
                                <span className="text-danger">{errors.firstName || ""}</span>
                            </Form.Item>
                            <Form.Item>
                                <Input name="lastName" placeholder="Please Input Your Lastname!"
                                       value={userDetails.lastName}
                                       addonBefore={<UserOutlined/>} onChange={handleChange}/>
                                <span className="text-danger">{errors.lastName || ""}</span>
                            </Form.Item>
                            <Form.Item>
                                <Input name="email" type="email" placeholder="Please Input Your email!"
                                       value={userDetails.email}
                                       addonBefore={<MailOutlined/>} onChange={handleChange}/>
                                <span className="text-danger">{errors.email}</span>
                            </Form.Item>
                            <Form.Item>
                                <Input name="age" placeholder="Please Input Your Age!" value={userDetails.age}
                                       addonBefore={<UserOutlined/>}
                                       onChange={handleChange}/>
                                <span className="text-danger">{errors.age || ""}</span>

                            </Form.Item>
                            <Form.Item>
                                <TextArea rows={4} name="address" placeholder="Please Input Your Address!"
                                          value={userDetails.address}
                                          onChange={handleChange}/>
                                <span className="text-danger">{errors.address}</span>

                            </Form.Item>
                            <Form.Item>
                                <Radio.Group name="gender" onChange={e => handleChange({
                                    target: {
                                        name: "gender",
                                        value: e.target.value
                                    }
                                })}
                                             value={userDetails.gender || ""}>
                                    <Radio value="Male">Male</Radio>
                                    <Radio value="Female">Female</Radio>
                                    <Radio value="Other">Other</Radio>
                                </Radio.Group>
                                <span className="text-danger">{errors.gender || ""}</span>
                            </Form.Item>
                            <Form.Item>
                                <Select
                                    className="select-type"
                                    allowClear
                                    placeholder="Please select your country"
                                    style={{width: '100%'}}
                                    value={userDetails.country}
                                    onChange={value => handleChange({target: {name: "country", value}})}
                                >
                                    {
                                        numOfCountries.map((numOfCountry, index) =>
                                            <Option key={index}
                                                    value={numOfCountry.value}>{numOfCountry.label}</Option>
                                        )
                                    }
                                </Select>
                                <span className="text-danger">{errors.country || ""}</span>
                            </Form.Item>
                            {
                                props.match.params.id === undefined && (
                                    <Form.Item>
                                        <Input.Password name="password" addonBefore={<LockOutlined/>}
                                                        id="password" value={userDetails.password || ""}
                                                        onChange={handleChange}/>
                                        <span className="text-danger">{errors.password || ""}</span>
                                    </Form.Item>
                                )
                            }
                            {
                                props.match.params.id !== undefined ?
                                    ( <Form.Item>
                                            <Button type="primary" htmlType="submit" onClick={handleSubmit}>
                                                Edit
                                            </Button>
                                        </Form.Item>
                                    ):(<Form.Item>
                                        <Button type="primary" htmlType="submit" onClick={handleSubmit}>
                                            Sign Up
                                        </Button>
                                    </Form.Item>)
                            }

                        </Form>
                    </Card>
                </Col>
                <Col span={8}/>
            </Row>

        </>
    )
}

const mapStatetoProps = (state) =>{

}

const mapDispatchtoProps = (dispatch) =>{

}
export default connect(mapStatetoProps, mapDispatchtoProps) (Form);