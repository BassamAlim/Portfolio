import React from 'react';

function Skill({skillData}) {
    return (
        <div className="row flex items-center">
            {
                <skillData.Icon
                    fill="#9CA3AF"
                    style={{ width: "2em", height: "2em" }}
                />
            }

            <div
                className=" text-center font-general-medium text-2xl text-primary-dark dark:text-primary-light mx-5 mt-4 mb-4"
            >
                {skillData.name}
            </div>
        </div>
    );
}

export default Skill;