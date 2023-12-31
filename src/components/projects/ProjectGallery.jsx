import {Projects} from "../../data/projects";
import {ImageDirection as Direction} from "./ImageDirection";

const ProjectGallery = ({id}) => {
    const data = Projects.find((project) => project.id.toString() === id)

    return (
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-10 my-12 py-4 sm:py-8 sm:mt-20 border-y-2 border-primary-light dark:border-secondary-dark">
            {  // bug here: the project images show in sub projects
                data.images.map((image) => (
                    image.direction === Direction.Vertical ?
                        <div key={data.id}>
                            <img
                                src={image.img}
                                className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
                                alt={data.title}
                                key={data.id}
                            />
                        </div>
                    :
                        <div key={data.id} className="col-span-2 flex justify-center text-center items-center">
                            <img
                                src={image.img}
                                className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
                                alt={data.title}
                                key={data.id}
                            />
                        </div>
                ))
            }
        </div>
    );
};

export default ProjectGallery;