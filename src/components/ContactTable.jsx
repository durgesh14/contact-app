import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { useEffect, useState } from "react";
function ContactTable(props) {
  const [users, setUsers] = useState([]);
  console.log(props.data);
  if (props.data.length !== 0) {
    users.push(props.data);
  }
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Contact #</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.phone}</td>
            <td>
              <Stack direction="horizontal" gap={2}>
                <Button as="a" variant="primary">
                  Edit
                </Button>
                <Button as="a" variant="danger">
                  Delete
                </Button>
              </Stack>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ContactTable;
