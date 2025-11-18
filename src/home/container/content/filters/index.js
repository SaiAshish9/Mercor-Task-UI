import React from "react";
import { Container, ShortlistedBtn } from "./styles";
import { Select } from "antd";

const { Option } = Select;

const FiltersContainer = () => {
  return (
    <Container>
      <Select
        showSearch
        placeholder="Select Location(s)"
        optionFilterProp="children"
        allowClear
        mode="multiple"
        style={{ width: 200 }}
        filterOption={(input, option) =>
          option.children.toLowerCase().includes(input.toLowerCase())
        }
      >
        <Option value="apple">Apple</Option>
        <Option value="banana">Banana</Option>
        <Option value="cherry">Cherry</Option>
      </Select>
      <Select
        showSearch
        placeholder="Select Role(s)"
        optionFilterProp="children"
        allowClear
        mode="multiple"
        style={{ width: 200 }}
        filterOption={(input, option) =>
          option.children.toLowerCase().includes(input.toLowerCase())
        }
      >
        <Option value="apple">Apple</Option>
        <Option value="banana">Banana</Option>
        <Option value="cherry">Cherry</Option>
      </Select>
       <Select
        showSearch
        placeholder="Select Organization(s)"
        mode="multiple"
        optionFilterProp="children"
        allowClear
        style={{ width: 200 }}
        filterOption={(input, option) =>
          option.children.toLowerCase().includes(input.toLowerCase())
        }
      >
        <Option value="apple">Apple</Option>
        <Option value="banana">Banana</Option>
        <Option value="cherry">Cherry</Option>
      </Select>
      <Select
        showSearch
        placeholder="Select Skill(s)"
        mode="multiple"
        optionFilterProp="children"
        allowClear
        style={{ width: 200 }}
        filterOption={(input, option) =>
          option.children.toLowerCase().includes(input.toLowerCase())
        }
      >
        <Option value="apple">Apple</Option>
        <Option value="banana">Banana</Option>
        <Option value="cherry">Cherry</Option>
      </Select>
      <ShortlistedBtn>Shortlisted</ShortlistedBtn>
    </Container>
  );
};

export default FiltersContainer;
