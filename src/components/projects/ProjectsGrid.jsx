import {useContext} from 'react';
import ProjectSingle from './ProjectSingle';
import {ProjectsContext} from '../../context/ProjectsContext';
import ProjectsFilter from './ProjectsFilter';

const ProjectsGrid = () => {
    const {
        projects,
        selectProject,
        setSelectProject,
        selectProjectsByCategory,
    } = useContext(ProjectsContext);

    return (
        <section className="py-5 sm:py-10 mt-5 sm:mt-10">
            <div className="text-center">
                <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
                    Projects portfolio
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
                    <ProjectsFilter setSelectProject={setSelectProject}/>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 gap-5 sm:gap-10">
                {selectProject
                    ? selectProjectsByCategory
                        .filter((project) => Number.isInteger(project.id))
                        .map((project) => (
                        <ProjectSingle
                            data={project}
                        />
                        ))
                        : projects
                        .filter((project) => Number.isInteger(project.id))
                        .map((project) => (
                            <ProjectSingle
                                data={project}
                            />
                        ))
                }
            </div>
        </section>
    );
};

export default ProjectsGrid;
