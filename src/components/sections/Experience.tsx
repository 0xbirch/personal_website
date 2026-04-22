import { workHistory, education } from "@/data/experience";
import { skillGroups } from "@/data/skills";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { Tag } from "@/components/ui/Tag";

export function Experience() {
  return (
    <SectionWrapper id="experience">
      <h2 className="text-2xl font-bold tracking-tight text-foreground">
        Experience
      </h2>

      {/* Work History */}
      <div className="mt-8">
        {workHistory.map((job) => (
          <TimelineItem
            key={`${job.company}-${job.role}`}
            title={job.role}
            subtitle={job.company}
            period={`${job.start} — ${job.end}`}
          >
            <ul className="list-disc space-y-1 pl-4 text-sm text-muted">
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </TimelineItem>
        ))}
      </div>

      {/* Education */}
      <h3 className="mt-12 text-lg font-semibold text-foreground">Education</h3>
      <div className="mt-4">
        {education.map((edu) => (
          <TimelineItem
            key={`${edu.institution}-${edu.degree}`}
            title={`${edu.degree} ${edu.field}`}
            subtitle={edu.institution}
            period={edu.year}
          >
            {(edu.gpa || (edu.courses && edu.courses.length > 0)) && (
              <div className="mt-2 space-y-2">
                {edu.gpa && (
                  <p className="text-sm text-muted">GPA: {edu.gpa}</p>
                )}
                {edu.courses && edu.courses.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course) => (
                      <Tag key={course}>{course}</Tag>
                    ))}
                  </div>
                )}
              </div>
            )}
          </TimelineItem>
        ))}
      </div>

      {/* Skills */}
      <h3 className="mt-12 text-lg font-semibold text-foreground">Skills</h3>
      <div className="mt-4 space-y-4">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <p className="text-sm font-medium text-foreground">
              {group.category}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
