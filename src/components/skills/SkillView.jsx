import React from 'react';

function Skill({skillName, icon}) {
    return (
        <div className="row flex items-center">
            {icon}

            <div
                className=" text-center font-general-medium text-2xl text-primary-dark dark:text-primary-light mx-5 mt-4 mb-4"
            >
                {skillName}
            </div>
        </div>
    );
}

export default Skill;