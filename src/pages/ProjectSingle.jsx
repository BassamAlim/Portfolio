import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectHeader from '../components/projects/ProjectHeader';
import Technologies from '../components/projects/Technologies';
import SubProjects from '../components/projects/SubProjects';
import {motion} from 'framer-motion';
import {useParams} from 'react-router-dom';
import {LinksView} from "../components/projects/Links";
import {Projects} from "../data/projects";

const ProjectSingle = () => {
    const { id } = useParams();
    const data = Projects.find((project) => project.id.toString() === id);

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1, delay: 1}}
            transition={{
                ease: 'easeInOut',
                duration: 0.6,
                delay: 0.15,
            }}
            className="container mx-auto mt-5 sm:mt-10"
        >
            <ProjectHeader id={id}/>
            <Technologies id={id}/>
            <ProjectGallery id={id}/>
            {data.links.length > 0 && <LinksView id={id}/>}
            {!id.includes('.') && <SubProjects id={id}/>}
        </motion.div>
    );
};

export default ProjectSingle;