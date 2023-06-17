import {useContext} from 'react';
import CourseSingle from './CourseSingle';
import {CoursesContext} from '../../context/CoursesContext';
import CoursesFilter from './CoursesFilter';

const CoursesGrid = () => {
    const {
        courses,
        selectCourse,
        setSelectCourse,
        selectCoursesByCategory,
    } = useContext(CoursesContext);

    return (
        <section className="py-5 sm:py-10 mt-5 sm:mt-10">
            <div className="text-center">
                <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
                    Courses
                </p>
            </div>

            <div className="mt-10 sm:mt-16">
                <div
                    className="
                        flex
                        justify-center
                        border-b border-primary-light
                        dark:border-secondary-dark
                        pb-3
                        gap-3
                        "
                >
                    <CoursesFilter setSelectCourse={setSelectCourse}/>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
                {selectCourse
                    ? selectCoursesByCategory.map((course) => (
                        <CourseSingle
                            courseData={course}
                        />
                    ))
                    : courses.map((course) => (
                        <CourseSingle
                            courseData={course}
                        />
                    ))}
            </div>
        </section>
    );
};

export default CoursesGrid;