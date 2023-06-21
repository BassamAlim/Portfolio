import {Projects} from "../../data/projects";
import {LinkType} from "./LinkType";
import GooglePlayBadge from "../../assets/images/google-play-badge.png";
import GithubBadge from "../../assets/images/github-badge.png";

export const LinksView = ({id}) => {
    const links = Projects.find((project) => project.id.toString() === id).links;

    return (
        <div className="my-16">
            <p className="mb-4 mr-6 font-general-regular text-3xl font-semibold text-ternary-dark dark:text-ternary-light">
                Links
            </p>

            <div className="flex flex-wrap items-center gap-6">
                {
                    links.map((link) => (
                        link.type === LinkType.PlayStore ?
                            <a
                                key={link.id}
                                href={link.url}
                                target="__blank"
                                aria-label="Google Play"
                                className="flex text-gray-400 hover:text-primary-dark dark:hover:text-primary-light rounded-lg shadow-sm duration-500"
                                style={{height: "7em"}}
                            >
                                <img src={GooglePlayBadge} alt="Google Play"/>
                            </a>
                        : link.type === LinkType.Github ?
                                <a
                                    key={link.id}
                                    href={link.url}
                                    target="__blank"
                                    aria-label="Google Play"
                                    className="flex bg-white text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
                                    style={{height: "6.7em"}}
                                >
                                    <img src={GithubBadge} alt="Google Play"/>
                                </a>
                        :
                            <a
                                key={link.id}
                                href={link.url}
                                target="__blank"
                                aria-label="Google Play"
                                className="flex justify-center items-center h-full bg-black border-2 text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-2xl shadow-sm duration-500"
                                style={{height: "6.79em", width: "23em"}}
                            >
                                <p className="text-center font-general-medium text-2xl sm:text-3xl font-bold text-primary-dark dark:text-primary-light">
                                    Visit the website
                                </p>
                            </a>
                    ))
                }
            </div>
        </div>
    );
}