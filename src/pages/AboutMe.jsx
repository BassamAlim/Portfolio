import {motion} from 'framer-motion';
import UniversityLogo from '../assets/images/university-logo.png';

const About = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1, delay: 1}}
            exit={{opacity: 0}}
            className="container mx-auto"
        >
            <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
                <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
                </div>

                <div className="font-general-regular w-full sm:w-3/4 text-left">
                    <p
                        className="text-2xl mb-4 text-ternary-dark dark:text-ternary-light"
                    >
                        I am a dedicated senior Computer Science student at King Saud University,
                        with experience in Android Development and Data Science,
                        and excels in programming and problem solving.
                    </p>

                    <h2
                        className="mt-10 mb-4 text-ternary-dark dark:text-ternary-light text-2xl font-general-bold"
                    >
                        Education
                    </h2>

                    <div className="flex mb-8">
                        <span className="text-lg text-ternary-dark dark:text-ternary-light mr-10">
                            <span className="font-general-bold">King Saud University</span> <br/>
                            Bachelor in Computer Science <br/>
                            2019 - 2023
                        </span>

                        <img
                            src={UniversityLogo}
                            alt="University Logo"
                            className="ml-8"
                            style={{width: '20%', height: 'auto'}}
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default About;