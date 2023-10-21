import {motion} from "framer-motion";
import {FiTag} from "react-icons/fi";

const ExperienceCard = ({ data }) => {
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
            <div className="flex flex-col h-full rounded-xl shadow-lg hover:shadow-xl mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
                <div className="flex flex-col h-full px-16 py-6">
                    <div className="flex flex-wrap justify-between">
                        <div>
                            <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-4">
                                {data.title}
                            </p>

                            <a
                                href={data.company_url}
                                target="__blank"
                            >
                                <p className="font-general-medium text-base md:text-lg text-sky-600 mb-4">
                                    {data.company}
                                </p>
                            </a>
                        </div>

                        <p className="font-general-medium text-base md:text-lg text-ternary-dark dark:text-ternary-light mb-4">
                            {data.date}
                        </p>
                    </div>

                    <p className="text-base md:text-lg text-ternary-dark dark:text-ternary-light mb-4">
                        {data.location}
                    </p>

                    <span className="text-lg text-ternary-dark dark:text-ternary-light mb-4">
                        {data.description}
                    </span>

                    <div className="flex flex-wrap items-center">
                        <FiTag className="text-lg text-ternary-dark dark:text-ternary-light mr-1"/>
                        {
                            data.tags.map((tag, index) => (
                                <div
                                    key={index}
                                    className="rounded-xl bg-primary-light dark:bg-ternary-dark p-2 font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light"
                                >
                                    {tag}
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
        </motion.div>
    );
}

export default ExperienceCard;