import {FiClock, FiTag} from 'react-icons/fi';
import {Courses} from '../../data/courses';

const CourseSingleHeader = ({id}) => {
    const data = Courses.find((course) => course.id.toString() === id)

    return (
        <div>
            <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-6">
                {data.title}
            </p>

            <p className="font-general-medium text-left text-xl sm:text-2xl text-primary-dark dark:text-primary-light mb-8">
                {data.source}
            </p>

            <div className="flex">
                <div className="flex items-center mr-10">
                    <FiClock className="text-lg text-ternary-dark dark:text-ternary-light"/>
                    <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
						{data.date}
					</span>
                </div>

                <div className="flex items-center">
                    <FiTag className="text-lg text-ternary-dark dark:text-ternary-light mr-1"/>
                    {
                        data.tags.map((tag, index) => (
                            <div
                                key={index}
                                className="rounded-xl bg-primary-light dark:bg-ternary-dark p-2 font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light"
                            >
                                {tag}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default CourseSingleHeader;
