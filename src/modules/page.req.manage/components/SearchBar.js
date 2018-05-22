import "./searchBar.css";
import React, { Component } from "react";
import { Button, DatePicker, Input } from "antd";
const { RangePicker } = DatePicker;

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {}
    };
  }
  handleDateChange = (date, dateString) => {
  };
  handelDateOk = value => {
  };
  submitHandle = e => {
    const { fields } = this.state;
    if (this.props.onSubmit) {
      const fields = {};
      for (const key in this.state.fields) {
        let value = this.state.fields[key];
        if (typeof value === "string") {
          value = value.trim();
        }
        if (value._isAMomentObject) {
          value = value.format("YYYY-MM-DD");
        }

        if (value !== "") {
          fields[key] = value;
        }
      }
    }
    this.props.onSubmit(fields);
  };
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
      return {
        fields: search
      };
    });
  };
  render() {
    const { fields } = this.state;
    return (
      <div className="search-box">
        <div className="search-item">
          <label>age:</label>
          <Input className="item-input" placeholder="age" value={fields.age} onChange={e=>{
              this.setFiled('age',e.target.value);
          }} />
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
          <Button type="primary" icon="search" onClick={this.submitHandle}>
            Search
          </Button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
