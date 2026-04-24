import { projects } from "@/data/projects";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Tag } from "@/components/ui/Tag";
import { ExternalLink } from "@/components/ui/ExternalLink";

export function Projects() {
  return (
    <SectionWrapper id="projects">
      <h2 className="text-2xl font-bold tracking-tight text-foreground">
        Projects
      </h2>
      <div className="mt-8 space-y-8">
        {projects.map((project) => {
          const baseClass =
            "rounded-xl border border-border bg-card p-6";
          const inner = (
            <>
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-semibold text-foreground">
                  {project.title}
                </h3>
                <span className="shrink-0 rounded-full bg-foreground/5 px-2.5 py-0.5 text-xs font-medium text-muted">
                  {project.year}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
              {project.paperUrl && (
                <div className="mt-4 flex gap-4 text-sm">
                  <ExternalLink href={project.paperUrl}>
                    {project.paperCitation ?? "View Paper"}
                  </ExternalLink>
                </div>
              )}
            </>
          );

          const href = project.codeUrl ?? project.paperUrl;
          return href ? (
            <a
              key={project.title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${baseClass} block transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-foreground/20`}
            >
              {inner}
            </a>
          ) : (
            <article key={project.title} className={baseClass}>
              {inner}
            </article>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
