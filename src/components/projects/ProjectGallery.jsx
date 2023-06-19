import {Projects} from "../../data/projects";

const ProjectGallery = ({id}) => {
    const data = Projects.find((project) => project.id.toString() === id)

    return (
        <div className="grid grid-cols-1 sm:grid-cols-4 sm:gap-10 mt-12">
            {data.images.map((image) => (
                <div className="mb-10 sm:mb-0" key={data.id}>
                    <img
                        src={image}
                        className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
                        alt={data.title}
                        key={data.id}
                    />
                </div>
            ))}
        </div>
    );
};

export default ProjectGallery;