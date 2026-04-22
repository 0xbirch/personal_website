import { siteConfig } from "@/data/site";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Mail } from "lucide-react";

export function Contact() {
  return (
    <SectionWrapper id="contact">
      <h2 className="text-2xl font-bold tracking-tight text-foreground">
        Contact
      </h2>
      <p className="mt-4 text-muted">
        Interested in collaborating or have a question? Feel free to reach out.
      </p>
      <div className="mt-8 space-y-4">
        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors"
        >
          <Mail size={18} />
          {siteConfig.email}
        </a>
        <div className="flex gap-4">
          {siteConfig.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
