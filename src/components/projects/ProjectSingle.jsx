import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

const ProjectSingle = ({data}) => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1, delay: 1}}
            transition={{
                ease: 'easeInOut',
                duration: 0.7,
                delay: 0.15
            }}
        >
            <Link to={`/projects/single-project/${data.id}`} aria-label="Single Project">
                <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
                    <div className="flex justify-center items-center" style={{height: '21.89em'}}>
                        <img
                            src={data.cover}
                            className="rounded-t-xl border-none"
                            alt="Single Project"
                            style={{maxHeight: '21.89em'}}
                        />
                    </div>
                    <div className="text-center px-4 py-6">
                        <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
                            {data.title}
                        </p>
                        <span className="text-lg text-ternary-dark dark:text-ternary-light">
							{data.category}
						</span>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default ProjectSingle;
