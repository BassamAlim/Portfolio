import {Courses} from '../../data/courses';
import CourseSingle from "./CourseSingle";

const SubCourses = ({id}) => {
    const subCourses = getSubCourses(parseInt(id))

    return (
        <div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
            <p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
                Sub Courses
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
                {subCourses.map((course) => {
                    return (
                        <CourseSingle
                            data={course}
                        />
                    );
                })}
            </div>
        </div>
    );
};

function getSubCourses(id) {
    const subCourses = []
    Courses.forEach((course) => {
        if (course.id > id && course.id < id + 1) {
            subCourses.push(course)
        }
    })
    return subCourses
}

export default SubCourses;
