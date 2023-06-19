import {createContext, useState} from 'react';
import {Courses} from '../data/courses';

// Create projects context
export const CoursesContext = createContext();

// Create the projects context provider
export const CoursesProvider = (props) => {
    const [courses, setCourses] = useState(Courses);
    const [selectCourse, setSelectCourse] = useState('');

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
                selectCourse: selectCourse,
                setSelectCourse: setSelectCourse,
                selectCoursesByCategory: selectCoursesByCategory,
            }}
        >
            {props.children}
        </CoursesContext.Provider>
    );
};
