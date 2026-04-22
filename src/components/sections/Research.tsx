import { researchProjects } from "@/data/research";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Tag } from "@/components/ui/Tag";
import { ExternalLink } from "@/components/ui/ExternalLink";

export function Research() {
  return (
    <SectionWrapper id="research">
      <h2 className="text-2xl font-bold tracking-tight text-foreground">
        Research
      </h2>
      <div className="mt-8 space-y-8">
        {researchProjects.map((project) => (
          <article
            key={project.title}
            className="rounded-xl border border-border bg-card p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-semibold text-foreground">{project.title}</h3>
              <div className="flex shrink-0 items-center gap-2">
                {project.status === "unpublished" && (
                  <span className="rounded-full bg-foreground/5 px-2.5 py-0.5 text-xs font-medium text-muted">
                    Unpublished
                  </span>
                )}
                <span className="rounded-full bg-foreground/5 px-2.5 py-0.5 text-xs font-medium text-muted">
                  {project.year}
                </span>
              </div>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            {(project.paperUrl || project.codeUrl) && (
              <div className="mt-4 flex gap-4 text-sm">
                {project.paperUrl && (
                  <ExternalLink href={project.paperUrl}>Paper</ExternalLink>
                )}
                {project.codeUrl && (
                  <ExternalLink href={project.codeUrl}>Code</ExternalLink>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
