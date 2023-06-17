import {useContext} from 'react';
import SingleCourseContext from '../../context/SingleCourseContext';
import Courses from '../../data/courses';

const CourseRelatedCourses = (id) => {
    const {singleCourseData} = useContext(SingleCourseContext);
    const data = Courses[id.id-1]

    return (
        <div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
            <p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
                {singleCourseData.RelatedCourse.title}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
                {singleCourseData.RelatedCourse.Courses.map((course) => {
                    return (
                        <img
                            src={course.img}
                            className="rounded-xl cursor-pointer"
                            alt={course.title}
                            key={course.id}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default CourseRelatedCourses;
