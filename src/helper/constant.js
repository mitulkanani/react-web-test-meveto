import moment from "moment";

export const courseList = [
  {
    courseId: 1,
    name: "Short Reports"
  },
  {
    courseId: 1,
    name: "Annual Reports"
  },
  {
    courseId: 1,
    name: "Presentations"
  },
  {
    courseId: 2,
    name: "Poetry"
  },
  {
    courseId: 2,
    name: "Short Stories"
  },
  {
    courseId: 2,
    name: "Drama"
  },
  {
    courseId: 3,
    name: "Web Development"
  },
  {
    courseId: 3,
    name: "Desktop Software Development"
  },
  {
    courseId: 3,
    name: "Research and Analysis"
  }
];

export const validateDates = ["2019-12-20", "2020-01-15", "2020-02-01"];

export const onlyDate = date => moment(date).format("YYYY-MM-DD");
