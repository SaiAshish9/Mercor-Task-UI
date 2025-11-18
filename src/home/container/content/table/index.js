import React from "react";
import { Container, StyledTableContainer } from "./styles";
import DATA from "./data.json";
import { Checkbox } from "antd";

const TableContainer = () => {
  const columns = [
    {
      title: <Checkbox disabled />,
      dataIndex: "select",
      key: "select",
      render: (_) => <Checkbox />,
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
      <StyledTableContainer columns={columns} dataSource={DATA} />
    </Container>
  );
};

export default TableContainer;
