import Image from "next/image";
import { siteConfig } from "@/data/site";
import { FileDown, Mail } from "lucide-react";

export function Intro() {
  return (
    <section className="flex min-h-[70vh] items-center px-6 py-20">
      <div className="mx-auto flex max-w-3xl w-full items-center gap-12">
        {/* Text */}
        <div className="flex-1">
          <p className="text-sm font-medium tracking-wide text-muted uppercase">
            Hello, I&apos;m
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {siteConfig.name}
          </h1>
          <p className="mt-2 text-xl text-muted">{siteConfig.tagline}</p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            {siteConfig.bio}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/80"
            >
              <Mail size={16} />
              Get in touch
            </a>
            {siteConfig.resumeUrl && (
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
              >
                <FileDown size={16} />
                Resume
              </a>
            )}
            {siteConfig.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        {/* Headshot */}
        <div className="hidden sm:block shrink-0">
          <div className="relative h-48 w-48 overflow-hidden rounded-full border-2 border-border">
            <Image
              src="/headshot.jpeg"
              alt={`${siteConfig.name} headshot`}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
