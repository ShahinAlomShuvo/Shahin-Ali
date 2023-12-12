import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import SkillBox from "./SkillBox";
import SkillsBar from "./SkillsBar";

const Skills = () => {
  return (
    <>
      <SectionHeader header={"Skills"} subHeader={"My Skills"}></SectionHeader>
      <div className='flex justify-between container mx-auto px-10 py-20'>
        <SkillBox skill={[0, 80]} title={"UI/UX Design"}></SkillBox>
        <SkillBox skill={[0, 95]} title={"Front-end Development"}></SkillBox>
        <SkillBox skill={[0, 55]} title={"Back-end Development"}></SkillBox>
      </div>

      <div className='grid md:grid-cols-2 gap-10 container mx-auto px-10'>
        <SkillsBar technology={"React js"} completed={95}></SkillsBar>
        <SkillsBar technology={"JavaScript"} completed={65}></SkillsBar>
        <SkillsBar technology={"Html"} completed={95}></SkillsBar>
        <SkillsBar technology={"Css"} completed={95}></SkillsBar>
        <SkillsBar technology={"Tailwind"} completed={85}></SkillsBar>
        <SkillsBar technology={"BootStrap"} completed={75}></SkillsBar>
        <SkillsBar technology={"Node js"} completed={65}></SkillsBar>
        <SkillsBar technology={"Express"} completed={68}></SkillsBar>
        <SkillsBar technology={"Firebase"} completed={75}></SkillsBar>
        <SkillsBar technology={"Stripe"} completed={40}></SkillsBar>
      </div>
    </>
  );
};

export default Skills;
