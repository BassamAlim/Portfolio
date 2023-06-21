import Skill from "../components/skills/SkillView";
import Skills from "../data/skills";

const SkillsScreen = () => {
    return (
        <div
            className="grid grid-cols-2 mt-12"
            style={{marginRight: '10em', marginLeft: '10em'}}
        >
            {
                Skills.map((skill) => (
                    <Skill skillData={skill}/>
                ))
            }
        </div>
    );
};

export default SkillsScreen;