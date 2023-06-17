import {useContext} from 'react';
import SingleCourseContext from '../../context/SingleCourseContext';
import Courses from '../../data/courses';

const CourseGallery = (id) => {
    const {singleCourseData} = useContext(SingleCourseContext);
    const data = Courses[id.id-1]

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
            {singleCourseData.CourseImages.map((course) => {
                return (
                    <div className="mb-10 sm:mb-0" key={course.id}>
                        <img
                            src={course.img}
                            className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
                            alt={course.title}
                            key={course.id}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default CourseGallery;