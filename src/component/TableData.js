import React, {useEffect, useState} from 'react';
// import axios from 'axios';
import {Popconfirm, Button, message, Row, Col, Input} from 'antd';
import {DeleteOutlined, EditOutlined, SearchOutlined} from '@ant-design/icons';
import Table from "antd/lib/table";
// import {useHistory} from 'react-router-dom';

// const {Column, ColumnGroup} = Table;
const {Search} = Input;

const Table = (props) => {
    const [searchDetails, setSearchDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
        age: "",
        gender: ""
    });
    const [list, setList] = useState([]);
    const [searchDuplicate, setSearchDuplicate] = useState([]);

    const onEdit = (id) => {

    }

    const onDelete = (id) => {
    }

    const onChange = e => {
        const {name, value} = e.target;
        setSearchDetails({...searchDetails, [name]: value});
    }
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
            render: (text, record) => {
                return (
                    <div>
                        <Button primary onClick={() => {
                            onEdit(record.id)
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
                        dataSource={list || []}
                        pagination={{pageSize: 10}}
                        rowKey={'key'}
                    >
                    </Table>
                </Col>
            </Row>
        </>
    );
}
export default Table;