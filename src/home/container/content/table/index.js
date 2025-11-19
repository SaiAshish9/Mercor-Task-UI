import React from "react";
import { Container, StyledTableContainer } from "./styles";
import { Checkbox } from "antd";
import { useStore } from "store";

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

  const {
    state: { data },
  } = useStore();

  return (
    <Container>
      {data?.length === 0 ? (
        <p
          style={{
            fontSize: "0.8rem",
            color: "rgb(107 114 128)",
          }}
        >
          Loading...
        </p>
      ) : (
        <StyledTableContainer columns={columns} dataSource={data} />
      )}
    </Container>
  );
};

export default TableContainer;
