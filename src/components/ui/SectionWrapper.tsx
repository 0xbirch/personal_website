interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionWrapper({ id, children, className }: SectionWrapperProps) {
  return (
    <section id={id} className={`py-20 px-6 ${className ?? ""}`}>
      <div className="mx-auto max-w-3xl">{children}</div>
    </section>
  );
}
