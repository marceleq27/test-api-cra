import { useFetch } from "../hooks/useFetch";
import { COMMENTS_API_URL } from "../consts";
import { Alert, Table } from "reactstrap";

const Comments = () => {
  const { data, isLoading, error } = useFetch(COMMENTS_API_URL);

  const renderHeader = () => {
    return (
      <tr>
        {Object.keys(data[0])
          .slice(1)
          .map((title) => (
            <th key={title}>{title === "id" ? title.toUpperCase() : title.charAt(0).toUpperCase() + title.slice(1)}</th>
          ))}
      </tr>
    );
  };

  const renderBody = () => {
    return data?.map(({ id, name, body, email }) => (
      <tr key={id}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{body}</td>
      </tr>
    ));
  };

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      {error && <Alert color="danger">{error}</Alert>}
      <div style={{ maxHeight: 400, overflowY: "auto", marginTop: 32 }}>
        <h4>Comments</h4>
        <Table dark striped>
          <thead>{renderHeader()}</thead>
          <tbody>{renderBody()}</tbody>
        </Table>
      </div>
    </>
  );
};

export default Comments;
