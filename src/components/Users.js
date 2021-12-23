import { useFetch } from "../hooks/useFetch";
import { USERS_API_URL } from "../consts";
import { Alert, Table } from "reactstrap";

const Users = () => {
  const { data, isLoading, error } = useFetch(USERS_API_URL);

  const renderHeader = () => {
    return (
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
      </tr>
    );
  };

  const renderBody = () => {
    return data?.map(({ id, name, username, email }) => (
      <tr key={id}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{username}</td>
        <td>{email}</td>
      </tr>
    ));
  };

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      {error && <Alert color="danger">{error}</Alert>}
      <div style={{ maxHeight: 400, overflowY: "auto", marginTop: 32 }}>
        <h4>Users</h4>
        <Table dark striped>
          <thead>{renderHeader()}</thead>
          <tbody>{renderBody()}</tbody>
        </Table>
      </div>
    </>
  );
};

export default Users;
