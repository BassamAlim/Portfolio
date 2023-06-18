import Courses from '../../data/courses';
import CourseSingle from "./CourseSingle";

const SubCourses = (id) => {
    const data = Courses[id.id-1]
    const subCourses = []
    data.subCourses.forEach((id) => {
        subCourses.push(Courses[id-1])
    })

    return (
        <div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
            <p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
                Sub Courses
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
                {subCourses.map((course) => {
                    return (
                        <CourseSingle
                            courseData={course}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default SubCourses;
