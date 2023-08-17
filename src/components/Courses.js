import React, { useState } from "react";
import courses from '../assets/Data/courses';
import Navbar from "./Navbar";
import CourseCard from "./CourseCard";
import { useNavigate } from "react-router-dom";


const coursesList = [
  ...new Set(
    courses.map((curElem) => {
      return curElem.Category;
    })
  ),
  "All",
];

// console.log(coursesList);


const Courses = () => {
  const [courseData, setCourseData] = useState(courses);
  const [courseList, setCourseList] = useState(coursesList);
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle search
  const handleSearch = (query) => {
    const filtered = courses.filter(course =>
      course.Name.toLowerCase().includes(query.toLowerCase())
    );
    setCourseData(filtered);
    setSearchQuery(query);
  };

  const filterItem = (Category) => {
    if (Category === "All") {
      setCourseData(courses);
      return;
    }

    const updatedList = courses.filter((curElem) => {
      return curElem.Category === Category;
    });

    setCourseData(updatedList);
  };

  const navigate = useNavigate();

  const ShowDetail = (data) => {
    console.log(data);
    navigate("/CoursDetails", { state: data });
  }

  return (
    <>
      <section className="courses" id="courses">
        <Navbar filterItem={filterItem} courseList={courseList} searchQuery={searchQuery} handleSearch={handleSearch} />
        <CourseCard courseData={courseData} ShowDetail={ShowDetail} />
      </section>
    </>
  )
}

export default Courses;
