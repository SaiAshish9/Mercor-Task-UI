import { useEffect, useCallback, useState } from "react";
import "./App.css";
import { Container } from "styles";
import { Sidebar } from "layout";
import { MainContainer } from "home";
import { ConfigProvider } from "antd";
import axios from "axios";
import { useStore } from "store";

function App() {
  const {
    state: { shortlisted, selectedFilters, dataLoaded },
    actions: { setData, setFilters, setDataLoaded, setBudget },
  } = useStore();

  const [filtersLoaded, setFiltersLoaded] = useState(false);

  const getFilters = useCallback(async () => {
    const res = await axios.post(
      "http://localhost:8080/api/u/applications/filters",
      {}
    );
    setFilters(res.data);
    setFiltersLoaded(true);
  }, [setFilters]);

  const getBudget = useCallback(async () => {
    const res = await axios.post(
      "http://localhost:8080/api/u/applications/budget",
      {}
    );
    setBudget(res.data?.budget);
  }, [setBudget]);

  const getData = useCallback(async () => {
    const res = await axios.post("http://localhost:8080/api/u/applications", {
      ...selectedFilters,
      shortlisted,
    });
    if (!dataLoaded && res.data?.length > 0) {
      setDataLoaded(true);
    }
    setData(res.data);
  }, [selectedFilters, shortlisted, setData]);

  useEffect(() => {
    getFilters();
    getBudget();
  }, []);

  useEffect(() => {
    if (filtersLoaded) {
      getData();
    }
  }, [filtersLoaded, selectedFilters, shortlisted]);

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
