import React, {useContext} from "react";
import SingleProjectContext from "../../context/SingleProjectContext";

export const ShareView = ({socials}) => {
    const {singleProjectData} = useContext(SingleProjectContext);

    return (
        <div>
            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
                {singleProjectData.ProjectInfo.SocialSharingHeading}
            </p>
            <div className="flex items-center gap-3 mt-5">
                {singleProjectData.ProjectInfo.SocialSharing.map(
                    (social) => {
                        return (
                            <a
                                key={social.id}
                                href={social.url}
                                target="__blank"
                                aria-label="Share Project"
                                className="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
                            >
                                    <span className="text-lg lg:text-2xl">
                                        {social.icon}
                                    </span>
                            </a>
                        );
                    }
                )}
            </div>
        </div>
    );
}