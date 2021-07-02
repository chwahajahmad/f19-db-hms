import React, { useState, useEffect } from "react";
import fetchUrl from "../fetchURL";
import axios from "axios";
import qs from "qs";
import { Row, Input, Button, Form, Select, DatePicker, message } from "antd";

export default function InsertDoctorsData() {
  const [departmentsData, setdepartmentsData] = useState([]);

  useEffect(() => {
    axios.get(`${fetchUrl}/getDepartmentData`).then(res => {
      setdepartmentsData(res.data);
      console.log(res.data);
    });
  }, []);

  const onFinish = values => {
    console.log("Success:", values);
    axios({
      method: "post",
      url: `${fetchUrl}/insertDoctorsData/`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        ...values,
        joinDate: values.joinDate.toDate().toISOString(),
      }),
    })
      .then((req, res) => {
        message.success("Doctor Added");
      })
      .catch(err => message.error("Internal Error Happend"));
  };

  const onFinishFailed = errorInfo => {
    message.error("Failed:", errorInfo);
  };
  return (
    <div>
      <Row gutter={16} justify="center">
        <h2>Insert Data</h2>
      </Row>
      <Form
        name="basic"
        wrapperCol={{ span: 22 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        justify="center"
      >
        <Form.Item
          label=""
          name="Fname"
          rules={[
            {
              required: true,
              message: "Please input your FirstName!",
            },
          ]}
          style={{ display: "inline-block", width: "calc(50%)" }}
        >
          <Input name="fname" placeholder="First Name" value="ahmad" />
        </Form.Item>

        <Form.Item
          label=""
          name="Lname"
          rules={[
            {
              required: true,
              message: "Please input your Last Name!",
            },
          ]}
          style={{ display: "inline-block", width: "calc(50%)" }}
        >
          <Input name="lname" placeholder="Last Name" />
        </Form.Item>
        <Form.Item
          label=""
          name="contact"
          rules={[
            {
              required: true,
              message: "Please input your Contact!",
            },
          ]}
          style={{ display: "inline-block", width: "calc(50%)" }}
        >
          <Input name="contact" placeholder="Contact" />
        </Form.Item>
        <Form.Item
          label=""
          name="pay"
          rules={[
            {
              required: true,
              message: "Please input your Pay!",
            },
          ]}
          style={{ display: "inline-block", width: "calc(50%)" }}
        >
          <Input name="pay" placeholder="Pay" />
        </Form.Item>
        <Form.Item
          label=""
          name="address"
          rules={[
            {
              required: true,
              message: "Please input your Address!",
            },
          ]}
          style={{ display: "inline-block", width: "calc(50%)" }}
        >
          <Input name="address" placeholder="Address" />
        </Form.Item>
        <Form.Item
          name={["Deptid"]}
          style={{ display: "inline-block", width: "calc(50%)" }}
          rules={[{ required: true, message: "Province is required" }]}
        >
          <Select placeholder="Department">
            {departmentsData.map((data, index) => (
              <Select.Option key={data.Deptid} value={data.Deptid}>
                {data.depName}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="joinDate"
          style={{ display: "inline-block", width: "calc(50%)" }}
        >
          <DatePicker placeholder="Join Date" />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
