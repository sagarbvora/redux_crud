import React, {useEffect, useState} from 'react';
import {Popconfirm, Button, message, Row, Col, Input} from 'antd';
import {DeleteOutlined, EditOutlined, SearchOutlined} from '@ant-design/icons';
import Table from "antd/lib/table";
import {connect} from 'react-redux';
import {userDelete} from '../redux/userData/action.js';
import {userEdit} from '../redux/userData/action.js';
// import axios from 'axios';
// import {userAction} from "../redux/userData/action";
// import {useHistory} from 'react-router-dom';

// const {Column, ColumnGroup} = TableData;
// const {Search} = Input;

const TableData = (props) => {
    const {list, onEdit, onDelete} = props;
    // const [searchDetails, setSearchDetails] = useState({
    //     //     firstName: "",
    //     //     lastName: "",
    //     //     email: "",
    //     //     age: "",
    //     //     gender: ""
    //     // });
    const [data1, setData] = useState([]);

    useEffect(() => {
        setData(list);
    }, [list])



    // const onChange = e => {
    //     const {name, value} = e.target;
    //     setSearchDetails({...searchDetails, [name]: value});
    // }
    // const onSearch = () => {
    //     let searchValue = searchDetails;
    //     let row = searchDuplicate || [];
    //     if (searchValue.firstName) {
    //         row = row.filter(value => value.firstName.toLowerCase().includes(searchValue.firstName.toLowerCase()));
    //     }
    //     if (searchValue.lastName) {
    //         row = row.filter(value => value.lastName.toLowerCase().includes(searchValue.lastName.toLowerCase()));
    //     }
    //     if (searchValue.email) {
    //         row = row.filter(value => value.email.toLowerCase().includes(searchValue.email.toLowerCase()));
    //     }
    //     if (searchValue.age) {
    //         row = row.filter(value => value.age.toString().toLowerCase().includes(searchValue.age.toLowerCase()));
    //     }
    //     if (searchValue.gender) {
    //         row = row.filter(value => value.gender.toLowerCase() === searchValue.gender.toLowerCase());
    //     }
    //     setList(row);
    // }

    const columns = [
        {
            title: 'First Name',
            width: 120,
            dataIndex: 'firstName',
            key: 'firstName',
            fixed: 'left',
        },
        {
            title: 'Last Name',
            width: 100,
            dataIndex: 'lastName',
            key: 'lastName',
            fixed: 'left',
        },
        {
            title: 'Email',
            width: 100,
            dataIndex: 'email',
            key: 'email',
            fixed: 'left',
        },
        {
            title: 'Age',
            width: 100,
            dataIndex: 'age',
            key: 'age',
            fixed: 'left',
        },
        {
            title: 'Gender',
            width: 100,
            dataIndex: 'gender',
            key: 'gender',
            fixed: 'left',
        },
        {
            title: 'Action',
            dataIndex: 'id',
            render: (text, record, index) => {
                return (
                    <div>
                        <Button primary onClick={() => {
                            onEdit(index)
                        }}><EditOutlined/></Button>
                        &nbsp;&nbsp;
                        <Popconfirm placement="bottom" title="Are you sure to delete this record?" onConfirm={() => {
                            onDelete(record.id)
                        }} okText="Yes" cancelText="No">
                            <Button danger><DeleteOutlined/></Button>
                        </Popconfirm>
                    </div>
                )
            }
        },

    ];

    return (
        <>

            <Row>
                <Col span={6}/>
                <Col span={12} className="mt-3">
                    <Table
                        columns={columns}
                        dataSource={data1 || []}
                        pagination={{pageSize: 10}}
                    >
                    </Table>
                </Col>
            </Row>
        </>
    );
}
const mapStateToProps = (state) => {
    return {
        list: state.data
    }
}
const mapDispatchToProps = (dispatch) => {
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(TableData);
