import "./App.css";
import { Container } from "styles";
import { Sidebar } from "layout";
import { MainContainer } from "home";
import { ConfigProvider } from "antd";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#5146e2",
          colorPrimaryHover: "#5146e2",
          colorPrimaryActive: "#5146e2",
        },
      }}
    >
      <Container>
        <Sidebar />
        <MainContainer />
      </Container>
    </ConfigProvider>
  );
}

export default App;
