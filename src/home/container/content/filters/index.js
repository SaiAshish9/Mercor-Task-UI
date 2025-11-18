import React from "react";
import { Container } from "./styles";
import { Select } from "antd";

const { Option } = Select;

const FiltersContainer = () => {
  return (
    <Container>
      <Select
        showSearch
        placeholder="Search options"
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
        placeholder="Search options"
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
        placeholder="Search options"
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
    </Container>
  );
};

export default FiltersContainer;
