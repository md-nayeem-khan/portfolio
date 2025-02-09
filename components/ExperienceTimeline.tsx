import React from "react";
import { Timeline } from "./ui/Timeline";

function ExperienceTimeline() {
  const data = [
    {
      title: "Senior Software Engineer - L2",
      content: (
        <div>
          <h1 className="text-2xl font-bold italic">2024 - Present</h1>
          <p className="font-bold mt-4">Responsibilities:</p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>
              Actively contributed to product meetings, collaborating with the
              product team on feature development
            </li>
            <li>
              Analyzed requirements and provided accurate time estimates to
              support effective project planning
            </li>
            <li>
              Designed and implemented innovative technical solutions to meet
              project goals
            </li>
            <li>
              Performed research and development (R&D) to explore innovative
              solutions
            </li>
            <li>
              Implemented new features based on product requirements and user
              feedback
            </li>
            <li>
              Diagnosed and fixed bugs to maintain software reliability and
              stability
            </li>
            <li>
              Reviewed peers' code to ensure quality and adherence to best
              practices
            </li>
            <li>
              Guided and mentored junior developers, fostering their
              professional growth and skill development
            </li>
            <li>
              Developed and updated unit tests to verify code compliance with
              specifications and requirements
            </li>
          </ul>
          <p className="font-bold mt-4">Skills:</p>
          <p className="mt-1">
            Full-Stack Development · Microservices · Spring Boot · Code Review ·
            Oral Communication · Team Management
          </p>
        </div>
      ),
    },
    {
      title: "Senior Software Engineer - L1",
      content: (
        <div>
          <h1 className="text-2xl font-bold italic">2024 - Present</h1>
          <p className="font-bold mt-4">Responsibilities:</p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>
              Actively contributed to product meetings, collaborating with the
              product team on feature development
            </li>
            <li>
              Analyzed requirements and provided accurate time estimates to
              support effective project planning
            </li>
            <li>
              Designed and implemented innovative technical solutions to meet
              project goals
            </li>
            <li>
              Performed research and development (R&D) to explore innovative
              solutions
            </li>
            <li>
              Implemented new features based on product requirements and user
              feedback
            </li>
            <li>
              Diagnosed and fixed bugs to maintain software reliability and
              stability
            </li>
            <li>
              Reviewed peers' code to ensure quality and adherence to best
              practices
            </li>
            <li>
              Guided and mentored junior developers, fostering their
              professional growth and skill development
            </li>
            <li>
              Developed and updated unit tests to verify code compliance with
              specifications and requirements
            </li>
          </ul>
          <p className="font-bold mt-4">Skills:</p>
          <p className="mt-1">
            Full-Stack Development · Microservices · Spring Boot · Code Review ·
            Oral Communication · Team Management
          </p>
        </div>
      ),
    },
    {
      title: "Software Engineer - L2",
      content: (
        <div>
          <h1 className="text-2xl font-bold italic">2024 - Present</h1>
          <p className="font-bold mt-4">Responsibilities:</p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>
              Actively contributed to product meetings, collaborating with the
              product team on feature development
            </li>
            <li>
              Analyzed requirements and provided accurate time estimates to
              support effective project planning
            </li>
            <li>
              Designed and implemented innovative technical solutions to meet
              project goals
            </li>
            <li>
              Performed research and development (R&D) to explore innovative
              solutions
            </li>
            <li>
              Implemented new features based on product requirements and user
              feedback
            </li>
            <li>
              Diagnosed and fixed bugs to maintain software reliability and
              stability
            </li>
            <li>
              Reviewed peers' code to ensure quality and adherence to best
              practices
            </li>
            <li>
              Guided and mentored junior developers, fostering their
              professional growth and skill development
            </li>
            <li>
              Developed and updated unit tests to verify code compliance with
              specifications and requirements
            </li>
          </ul>
          <p className="font-bold mt-4">Skills:</p>
          <p className="mt-1">
            Full-Stack Development · Microservices · Spring Boot · Code Review ·
            Oral Communication · Team Management
          </p>
        </div>
      ),
    },
    {
      title: "Software Engineer - L1",
      content: (
        <div>
          <h1 className="text-2xl font-bold italic">2024 - Present</h1>
          <p className="font-bold mt-4">Responsibilities:</p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>
              Actively contributed to product meetings, collaborating with the
              product team on feature development
            </li>
            <li>
              Analyzed requirements and provided accurate time estimates to
              support effective project planning
            </li>
            <li>
              Designed and implemented innovative technical solutions to meet
              project goals
            </li>
            <li>
              Performed research and development (R&D) to explore innovative
              solutions
            </li>
            <li>
              Implemented new features based on product requirements and user
              feedback
            </li>
            <li>
              Diagnosed and fixed bugs to maintain software reliability and
              stability
            </li>
            <li>
              Reviewed peers' code to ensure quality and adherence to best
              practices
            </li>
            <li>
              Guided and mentored junior developers, fostering their
              professional growth and skill development
            </li>
            <li>
              Developed and updated unit tests to verify code compliance with
              specifications and requirements
            </li>
          </ul>
          <p className="font-bold mt-4">Skills:</p>
          <p className="mt-1">
            Full-Stack Development · Microservices · Spring Boot · Code Review ·
            Oral Communication · Team Management
          </p>
        </div>
      ),
    },
  ];
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        My
        <span className="text-purple"> work experience</span>
      </h1>
      <div className="flex flex-col items-center">
        <Timeline data={data} />
      </div>
    </section>
  );
}

export default ExperienceTimeline;
