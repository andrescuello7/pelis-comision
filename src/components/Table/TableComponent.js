import { Table } from "react-bootstrap";
import { useState, useEffect } from "react";
function TableComponent() {
    const [users, setusers] = useState([]);

    useEffect(() => {
        GetUsers()
    }, []);

    function GetUsers() {
        let getUsers = JSON.parse(localStorage.getItem("users")) || []
        setusers(getUsers);
    }

    const mapUsers = users.map((item, i) => (
        <tr key={i}>
            <td>{i + 1}</td>
            <td>{item.email}</td>
            <td>{item.name}</td>
            <td>{item.lastname}</td>
            <td>{item.date}</td>
        </tr>
    ));

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Email</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Fecha de Cumple</th>
                </tr>
            </thead>
            <tbody>
                {mapUsers}
            </tbody>
        </Table>
    )
}
export default TableComponent;