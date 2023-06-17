import {useContext} from 'react';
import SingleCourseContext from '../../context/SingleCourseContext';

const CourseGallery = () => {
    const {singleCourseData} = useContext(SingleCourseContext);

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