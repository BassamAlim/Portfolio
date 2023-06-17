import {FiMail, FiMapPin, FiPhone} from 'react-icons/fi';

const ContactDetails = () => {
    return (
        <div className="w-full lg:w-1/2">
            <div className="max-w-xl px-6">
                <h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
                    Contact details
                </h2>

                <div className="flex" style={{}}>
                    <div className="flex flex-col mr-4">
                        <i className="mb-6 text-2xl text-gray-500 dark:text-gray-400">
                            <FiMapPin/>
                        </i>

                        <i className="mb-5 text-2xl text-gray-500 dark:text-gray-400">
                            <FiMail/>
                        </i>

                        <i className="mb-5 text-2xl text-gray-500 dark:text-gray-400">
                            <FiPhone/>
                        </i>
                    </div>

                    <div className="flex flex-col">
                        <span className="mb-4 text-lg text-ternary-dark dark:text-ternary-light">
                            Riyadh, Saudi Arabia
                        </span>

                        <span className="mb-4 text-lg text-ternary-dark dark:text-ternary-light">
                            Bassamalim@outlook.com
                        </span>

                        <span className="mb-4 text-lg text-ternary-dark dark:text-ternary-light">
                            +966 55 314 5230
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactDetails;
