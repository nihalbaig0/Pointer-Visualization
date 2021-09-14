import React from 'react';
import { Table } from 'semantic-ui-react'
import { useState,useEffect } from 'react';
import axios from 'axios';
export default function Read() {

    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://613f1dc3e9d92a0017e17461.mockapi.io/fakeData`).then((response) => {
            setAPIData(response.data)
        })
       
}, [])
    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Nishant</Table.Cell>
                        <Table.Cell>Kumar</Table.Cell>
                        <Table.Cell>Yes</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )
}