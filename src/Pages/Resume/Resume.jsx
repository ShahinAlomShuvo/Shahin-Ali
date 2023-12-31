import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { FaBriefcase, FaGraduationCap } from "react-icons/fa6";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";

const Resume = () => {
  return (
    <>
      <SectionHeader header={"Resume"} subHeader={"My Resume"}></SectionHeader>
      <div className='px-4 md:0'>
        <h3 className='flex justify-center gap-4 items-center text-2xl md:text-4xl py-10 text-gray-500'>
          <FaGraduationCap className='text-[#418171]' size={40} />
          Educational Qualification
        </h3>
        <div>
          <div>
            <VerticalTimeline lineColor='rgba(66, 70, 87, 1)'>
              <VerticalTimelineElement
                contentStyle={{
                  background: "rgba(66, 70, 87, 0.2)",
                  color: "rgba(211, 211, 211, 0.5)",
                }}
                contentArrowStyle={{
                  borderRight: "20px solid  rgba(66, 70, 87, 0.2)",
                }}
                date='2016 - 2017'
                iconStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                }}
                icon={<FaGraduationCap />}
              >
                <h3 className='text-4xl text-[#529180] font-semibold pb-2'>
                  College Degree
                </h3>
                <h4 className='timelineSubtitle'>Taherpur College</h4>
                <p>
                  I Completed my Higher Secondary Certificate from Taherpur
                  College in the Science Department.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className='customTimelineElement'
                contentStyle={{
                  background: "rgba(66, 70, 87, 0.2)",
                  color: "rgba(211, 211, 211, 0.5)",
                }}
                contentArrowStyle={{
                  borderRight: "20px solid  rgba(66, 70, 87, 0.2)",
                }}
                date='2018 - 2023'
                iconStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                }}
                icon={<FaGraduationCap />}
              >
                <h3 className='text-4xl text-[#529180] font-semibold pb-2'>
                  Bachelor of Social Science
                </h3>
                <h4 className='timelineSubtitle'>National University</h4>
                <p>
                  I Completed my Graduation from National University Of
                  Bangladesh.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                contentStyle={{
                  background: "rgba(66, 70, 87, 0.2)",
                  color: "rgba(211, 211, 211, 0.5)",
                }}
                contentArrowStyle={{
                  borderRight: "20px solid  rgba(66, 70, 87, 0.2)",
                }}
                date='2023 - Present'
                iconStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                }}
                icon={<FaGraduationCap />}
              >
                <h3 className='text-4xl text-[#529180] font-semibold pb-2'>
                  Masters Of Social Science
                </h3>
                <h4 className='timelineSubtitle'>National University</h4>
                <p>Iam Currently In MSS Program In National University</p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                iconStyle={{
                  background: "rgb(16, 204, 82)",
                  color: "#fff",
                }}
                icon={<FaGraduationCap />}
              />
            </VerticalTimeline>
          </div>

          <div>
            <div>
              <h2 className='flex justify-center gap-4 items-center text-2xl md:text-4xl py-10 text-gray-500'>
                <FaBriefcase className='text-[#418171]' />
                Working Experience
              </h2>
            </div>
            <VerticalTimeline
              className='customTimeline'
              lineColor='rgba(66, 70, 87, 1)'
            >
              <VerticalTimelineElement
                className='customTimelineElement'
                contentStyle={{
                  background: "rgba(66, 70, 87, 0.2)",
                  color: "rgba(211, 211, 211, 0.5)",
                }}
                contentArrowStyle={{
                  borderRight: "20px solid  rgba(66, 70, 87, 0.2)",
                }}
                date='2022 - Present'
                iconStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                }}
                icon={<FaBriefcase />}
                position='right'
              >
                <h3 className='text-4xl text-[#529180] font-semibold pb-2'>
                  UI/UX Designer
                </h3>
                {/* <h4 className='timelineSubtitle'>Abc Company.</h4> */}
                <p>
                  I have a Strong learning experience in UI/UX. I Personally
                  design so many web templates based on UI/UX.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className='customTimelineElement'
                contentStyle={{
                  background: "rgba(66, 70, 87, 0.2)",
                  color: "rgba(211, 211, 211, 0.5)",
                }}
                contentArrowStyle={{
                  borderRight: "20px solid  rgba(66, 70, 87, 0.2)",
                }}
                date='2022 - Present'
                iconStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                }}
                icon={<FaBriefcase />}
                position='left'
              >
                <h3 className='text-4xl text-[#529180] font-semibold pb-2'>
                  Front-end Developer
                </h3>
                {/* <h4 className='timelineSubtitle'>Abc Company.</h4> */}
                <p>
                  I am a frontend web developer. I can provide clean code and
                  pixel perfect design. I also make website more & more
                  interactive with web animations.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className='customTimelineElement'
                contentStyle={{
                  background: "rgba(66, 70, 87, 0.2)",
                  color: "rgba(211, 211, 211, 0.5)",
                }}
                contentArrowStyle={{
                  borderRight: "20px solid  rgba(66, 70, 87, 0.2)",
                }}
                date='2023 - present'
                iconStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                }}
                icon={<FaBriefcase />}
                position='right'
              >
                <h3 className='text-4xl text-[#529180] font-semibold pb-2'>
                  Back-end Developer
                </h3>
                {/*  <h4 className='timelineSubtitle'>Def Company.</h4> */}
                <p>
                  Dedicated and detail-oriented MERN Stack Developer, passionate
                  about creating innovative applications. Proficient in MongoDB,
                  Express.js, React, and Node.js, adept at delivering scalable
                  and user-centric solutions.
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className='customTimelineElement'
                iconStyle={{
                  background: "rgb(16, 204, 82)",
                  color: "#fff",
                }}
                icon={<FaBriefcase />}
              />
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
