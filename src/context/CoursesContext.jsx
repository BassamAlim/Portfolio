import {createContext, useState} from 'react';
import {coursesData} from '../data/courses';

// Create projects context
export const CoursesContext = createContext();

// Create the projects context provider
export const CoursesProvider = (props) => {
    const [courses, setCourses] = useState(coursesData);
    const [searchCourses, setSearchCourses] = useState('');
    const [selectCourse, setSelectCourse] = useState('');

    // Search projects by project title
    const searchCoursesByTitle = courses.filter((item) => {
        const result = item.title
            .toLowerCase()
            .includes(searchCourses.toLowerCase())
            ? item
            : searchCourses === ''
                ? item
                : '';
        return result;
    });

    // Select projects by project category
    const selectCoursesByCategory = courses.filter((item) => {
        let category =
            item.category.charAt(0).toUpperCase() + item.category.slice(1);
        return category.includes(selectCourse);
    });

    return (
        <CoursesContext.Provider
            value={{
                courses: courses,
                setCourses: setCourses,
                searchCourses: searchCourses,
                setSearchCourse: setSearchCourses,
                searchCoursesByTitle: searchCoursesByTitle,
                selectCourse: selectCourse,
                setSelectCourse: setSelectCourse,
                selectCoursesByCategory: selectCoursesByCategory,
            }}
        >
            {props.children}
        </CoursesContext.Provider>
    );
};
