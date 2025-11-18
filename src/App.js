import "./App.css";
import { Container } from "styles";
import { Sidebar } from "layout";
import { MainContainer } from "home";

function App() {
  return (
    <Container>
      <Sidebar />
      <MainContainer />
    </Container>
  );
}

export default App;
