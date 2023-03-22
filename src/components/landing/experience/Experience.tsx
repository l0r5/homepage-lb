import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
import { Experience, experiences } from '../../../constants';
import styled from '@emotion/styled';

interface ExperienceCardProps {
  experience: Experience;
}

const bubbleColor = 'orange';

const StyledVerticalTimelineElement = styled(VerticalTimelineElement)`
  .dateClassName {
    /* default styles for smaller screens */
  }

  @media screen and (min-width: 768px) {
    .dateClassName {
      top: 50%;
    }
  }
`;
const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <StyledVerticalTimelineElement
      contentStyle={{ // Box
        background: bubbleColor,
        color: '#fff',
        boxShadow: 'none'
      }}
      contentArrowStyle={{ borderRight: `7px solid  ${bubbleColor}` }}
      date={experience.date}
      dateClassName="dateClassName"
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </StyledVerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>

        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
    </>
  );
};

export default Experience;