import "./searchBar.css";
import React, { Component } from "react";
import { Button, DatePicker, Input, Select } from "antd";
const { RangePicker } = DatePicker;
const Option = Select.Option;

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {}
    };
  }
  handleDateChange = (date, dateString) => {};
  handelDateOk = value => {};
  setFiled = (field, value) => {
    const newFields = {};
    if (Array.isArray(field)) {
      newFields[field[0]] = value[0];
      newFields[field[1]] = value[1];
    } else {
      newFields[field] = value;
    }
    this.setState(preState => {
      const search = { ...preState.fields, ...newFields };
      if (this.props.onChange) {
        const params = {
          ...search,
          begindate: search.begindate && search.begindate.format("YYYY-MM-DD"),
          enddate: search.enddate && search.enddate.format("YYYY-MM-DD")
        };
        this.props.onChange(params);
      }
      return {
        fields: search
      };
    });
  };
  render() {
    const { fields } = this.state;
    const { onSubmit, onInsert } = this.props;
    return (
      <div className="search-box">
        <div className="search-item">
          <label>address:</label>
          <Select
            style={{ width: 200 }}
            placeholder="Select address"
            onChange={value => {
              this.setFiled("address", value);
            }}
          >
            <Option value="华北">华北</Option>
            <Option value="华东">华东</Option>
            <Option value="东北">东北</Option>
            <Option value="华南">华南</Option>
            <Option value="华中">华中</Option>
          </Select>
        </div>
        <div className="search-item">
          <label>age:</label>
          <Input
            className="item-input"
            placeholder="age"
            value={fields.age}
            onChange={e => {
              this.setFiled("age", e.target.value);
            }}
          />
        </div>
        <div className="search-item">
          <label>date:</label>
          <RangePicker
            placeholder={["Start Date", "End Date"]}
            onChange={value => {
              this.setFiled(["begindate", "enddate"], value);
            }}
            value={[fields.begindate, fields.enddate]}
            onOk={this.handelDateOk}
          />
        </div>
        <div className="search-item">
          <Button type="primary" icon="search" onClick={onSubmit}>
            Search
          </Button>
        </div>
        <div className="search-buttons">
          <Button type="primary" onClick={onInsert}>
            add new
          </Button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
