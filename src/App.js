import { useEffect } from "react";
import "./App.css";
import { Container } from "styles";
import { Sidebar } from "layout";
import { MainContainer } from "home";
import { ConfigProvider } from "antd";
import axios from "axios";
import { get, useStore } from "store";

function App() {
  const {
    actions: { setData, setFilters },
  } = useStore();

  const getData = async () => {
    const response = await axios.post(
      "http://localhost:8080/api/u/applications",
      {}
    );
    setData(response.data);
  };

  const getFilters = async () => {
    const response = await axios.post(
      "http://localhost:8080/api/u/applications/filters",
      {}
    );
    setFilters(response.data);
  };

  const getResponse = async () => {
    await Promise.all([getData(), getFilters()]);
  };

  useEffect(() => {
    getResponse();
  }, []);

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
