import React from "react";
import { Container, StyledTableContainer } from "./styles";
import { Checkbox } from "antd";
import { useStore } from "store";
import axios from "axios";

const TableContainer = () => {
  const {
    state: {
      data,
      dataLoaded,
      budget,
      selectedFilters,
      shortlisted: shortlisted1,
    },
    actions: { setBudget, setData },
  } = useStore();

  const columns = [
    {
      title: <Checkbox disabled />,
      dataIndex: "select",
      key: "select",
      render: (_, { id, shortlisted }) => (
        <Checkbox
          checked={shortlisted ?? false}
          disabled={!budget || +budget.substring(1) < 0}
          onClick={async () => {
            await axios.post(
              "http://localhost:8080/api/u/applications/shortlist",
              {
                id,
                shortlisted: !(shortlisted ?? false),
              }
            );
            const res = await axios.post(
              "http://localhost:8080/api/u/applications/budget",
              {}
            );
            setBudget(res.data?.budget);
            const res1 = await axios.post(
              "http://localhost:8080/api/u/applications",
              {
                ...selectedFilters,
                shortlisted1,
              }
            );

            setData(res1.data);
          }}
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Salary Expectation (Full-Time)",
      dataIndex: "annual_salary_expectation",
      key: "location",
      render: (_, { annual_salary_expectation }) => (
        <span>{annual_salary_expectation["full-time"] ?? "-"}</span>
      ),
    },
    {
      title: "Past Organizations",
      dataIndex: "work_experiences",
      key: "location",
      render: (_, { work_experiences }) => (
        <span>{work_experiences.map((x) => x.company).join(", ")}</span>
      ),
    },
    {
      title: "Previous Roles",
      dataIndex: "role_experiences",
      key: "location",
      render: (_, { work_experiences }) => (
        <span>{work_experiences.map((x) => x.roleName).join(", ")}</span>
      ),
    },
    {
      title: "Skills",
      dataIndex: "skills",
      key: "skills",
      render: (_, { skills }) => <span>{skills.join(", ")}</span>,
    },
  ];

  return (
    <Container>
      {data?.length === 0 ? (
        <p
          style={{
            fontSize: "0.8rem",
            color: "rgb(107 114 128)",
          }}
        >
          {!dataLoaded ? "Loading..." : "No Data Found"}
        </p>
      ) : (
        <StyledTableContainer columns={columns} dataSource={data} />
      )}
    </Container>
  );
};

export default TableContainer;
