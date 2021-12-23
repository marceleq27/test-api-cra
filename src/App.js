import { Container } from "reactstrap";
import Comments from "./components/Comments";
import Users from "./components/Users";

const App = () => {
  return (
    <Container>
      <Users />
      <Comments />
    </Container>
  );
};

export default App;
