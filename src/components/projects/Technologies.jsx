import {Projects} from "../../data/projects";
import React from "react";

const Technologies = ({id}) => {
    const data = Projects.find((project) => project.id.toString() === id)

    return (
        <div className="flex gap-0 sm:gap-2 mt-14 mb-10 text-left items-center">
            <p className="mr-4 font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light">
                Technologies
            </p>

            {
                data.technologies.map((tech) => (
                    <div className="flex items-center rounded-xl bg-primary-light dark:bg-ternary-dark px-5 py-4 font-general-regular leading-none text-primary-dark dark:text-primary-light">
                        {
                            <tech.Icon
                                fill="#9CA3AF"
                                style={{ width: "2em", height: "2em" }}
                            />
                        }

                        <div
                            className="ml-3 text-center font-general-medium text-2xl text-primary-dark dark:text-primary-light"
                        >
                            {tech.name}
                        </div>
                    </div>
                ))
            }
        </div>
    );
};
export default Technologies;