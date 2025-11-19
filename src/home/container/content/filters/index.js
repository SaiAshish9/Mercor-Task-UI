import React, { useState } from "react";
import { Container, ShortlistedBtn } from "./styles";
import { Select } from "antd";
import { useStore } from "store";

const { Option } = Select;

const FiltersContainer = () => {
  const {
    state: { filters, shortlisted, selectedFilters },
    actions: { setShortlisted, setSelectedFilters },
  } = useStore();

  const options = [
    {
      placeholder: "Select Location(s)",
      options: filters.locations || [],
      key: "locations",
    },
    {
      placeholder: "Select Role(s)",
      options: filters.roles || [],
      key: "roles",
    },
    {
      placeholder: "Select Organization(s)",
      options: filters.organizations || [],
      key: "organizations",
    },
    {
      placeholder: "Select Skill(s)",
      options: filters.skills || [],
      key: "skills",
    },
  ];

  return (
    <Container>
      {options.map(({ placeholder, options, key }) => (
        <Select
          key={placeholder}
          showSearch
          placeholder={placeholder}
          optionFilterProp="children"
          allowClear
          mode="multiple"
          style={{ width: 200, marginRight: "1rem" }}
          onChange={(values) => {
            setSelectedFilters({ ...selectedFilters, [`${key}`]: values });
          }}
          filterOption={(input, option) =>
            option.children.toLowerCase().includes(input.toLowerCase())
          }
        >
          {options.map((option) => (
            <Option key={option} value={option}>
              {option}
            </Option>
          ))}
        </Select>
      ))}

      <ShortlistedBtn
        onClick={() => {
          setShortlisted(!shortlisted);
        }}
        shortlisted={+shortlisted}
      >
        Shortlisted
      </ShortlistedBtn>
    </Container>
  );
};

export default FiltersContainer;
