import React from "react";
import { Container, ShortlistedBtn } from "./styles";
import { Select } from "antd";
import { useStore } from "store";

const { Option } = Select;

const FiltersContainer = () => {
  const {
    state: { filters, shortlisted },
    actions: { setShortlisted },
  } = useStore();

  const options = [
    { placeholder: "Select Location(s)", options: filters.locations || [] },
    { placeholder: "Select Role(s)", options: filters.roles || [] },
    {
      placeholder: "Select Organization(s)",
      options: filters.organizations || [],
    },
    { placeholder: "Select Skill(s)", options: filters.skills || [] },
  ];

  return (
    <Container>
      {options.map(({ placeholder, options }) => (
        <Select
          key={placeholder}
          showSearch
          placeholder={placeholder}
          optionFilterProp="children"
          allowClear
          mode="multiple"
          style={{ width: 200, marginRight: "1rem" }}
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
