import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motions";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      lineColor={{ color : "#af9408" }}
      contentStyle={{
        background: 'linear-gradient(to bottom, #666666, #1a1a1a)',
        color: "#af9408",
        border: "1px solid #af9408",
      
      }}
      contentArrowStyle={{ borderRight: "7px solid  #af9408" }}
      date={experience.date}
      iconStyle={{color: '#af9408', background: experience.iconBg}}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-[#af9408] text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-[#9d8c01] text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p style={{ color: "white" }} className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 style={{ color: "#af9408" }} className={`${styles.sectionHeadText} text-center`} >
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");