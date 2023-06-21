import {Projects} from "../../data/projects";
import ProjectSingle from "./ProjectSingle";

const SubProjects = ({id}) => {
    const subProjects = getSubProjects(parseInt(id))

    if (subProjects.length === 0) return (<></>)

    return (
        <div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
            <p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-4 sm:mb-8 text-left">
                Sub Projects
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
                {
                    subProjects.map((project) => {
                        return (
                            <ProjectSingle
                                data={project}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
};

function getSubProjects(id) {
    const subProjects = []
    Projects.forEach((project) => {
        if (project.id > id && project.id < id + 1) {
            subProjects.push(project)
        }
    })
    return subProjects
}

export default SubProjects;