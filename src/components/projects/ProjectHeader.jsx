import {FiTag} from 'react-icons/fi';
import {Projects} from '../../data/projects';

const ProjectSingleHeader = ({id}) => {
    const data = Projects.find((project) => project.id.toString() === id)

    return (
        <div>
            <p className="font-general-medium text-left text-4xl sm:text-5xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-16 mb-8">
                {data.title}
            </p>

            <div className="flex flex-wrap items-center">
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

            <p className="text-2xl text-ternary-dark dark:text-ternary-light mt-6">
                {data.description}
            </p>
        </div>
    );
};

export default ProjectSingleHeader;
