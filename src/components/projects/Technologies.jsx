import {Projects} from "../../data/projects";
import React from "react";

const Technologies = ({id}) => {
    const data = Projects.find((project) => project.id.toString() === id)

    return (
        <div className="gap-0 sm:gap-10 mt-14 text-left items-center mb-10">
            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mr-6">
                Technologies
            </p>

            {
                data.technologies.map((tech) => (
                    <div className="flex items-center rounded-xl bg-primary-light dark:bg-ternary-dark p-3 font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
                        {
                            <tech.Icon
                                fill="#9CA3AF"
                                style={{ width: "2em", height: "2em" }}
                            />
                        }

                        <div
                            className="ml-2 text-center font-general-medium text-2xl text-primary-dark dark:text-primary-light"
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