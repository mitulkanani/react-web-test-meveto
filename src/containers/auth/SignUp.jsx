import React, { useState, useMemo, useEffect } from "react";
import { Radio, DatePicker, Form, Input, Select, message, Button } from "antd";
import { notesValidator } from "helper/validation";
import { onlyDate, courseList, validateDates } from "helper/constant";

const { TextArea } = Input;
const { Option } = Select;

const SignUp = props => {
  const [loading, setLoading] = useState(false);
  const [activeCourse, setActiveCourse] = useState(1);
  const { getFieldDecorator, setFieldsValue } = props.form;

  useEffect(() => {
    setFieldsValue({
      course: null
    });
  }, [activeCourse, setFieldsValue]);

  // Courses provided runtime filter of course based on active value
  const courses = useMemo(() => {
    return courseList.filter(c => c.courseId === activeCourse);
  }, [activeCourse]);

  // When form is submitted this handler will be called
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        // Format the selected date
        const date = onlyDate(values.startdate);
        // Check that date is valid or not
        if (validateDates.includes(date)) {
          // Temp Loading is true
          setLoading(true);
          setTimeout(() => {
            // Wait for 2 sec and then success
            setLoading(false);
            message.success("Your course has been successfully registered.");
          }, 2000);
          console.log("form value", values);
        } else {
          message.error(
            "Your selected course and subject is not offered beginning from your selected date!"
          );
        }
      }
    });
  };

  return (
    <div className="form-container">
      <div className="form-elevation">
        <div className="text-center an-20 bold-text pb20">
          Register Your Course
        </div>
        <div className="pb20">
          <Radio.Group
            onChange={e => setActiveCourse(e.target.value)}
            value={activeCourse}
          >
            <Radio value={1}>Technical Report Writing</Radio>
            <Radio value={2}>English Literature</Radio>
            <Radio value={3}>Computer Sciences</Radio>
          </Radio.Group>
        </div>
        <div className="signup-form-block">
          <Form onSubmit={handleSubmit}>
            <Form.Item label="Course Name">
              {getFieldDecorator("course", {
                rules: [
                  {
                    required: true,
                    message: "Please select your course!"
                  }
                ]
              })(
                <Select showSearch placeholder="Select Your Course">
                  {courses &&
                    courses.map((c, i) => {
                      return (
                        <Option key={i} value={c.name}>
                          {c.name}
                        </Option>
                      );
                    })}
                </Select>
              )}
            </Form.Item>
            <Form.Item label="Start Date">
              {getFieldDecorator("startdate", {
                rules: [{ required: true, message: "Please input start date!" }]
              })(<DatePicker placeholder="Select Start Date" />)}
            </Form.Item>
            <Form.Item label="Additional Notes">
              {getFieldDecorator(
                "notes",
                notesValidator
              )(<TextArea placeholder="Enter Additional Notes" />)}
            </Form.Item>
            <Form.Item className="mb0 text-right">
              <Button loading={loading} type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Form.create({ name: "SignUp" })(SignUp);
