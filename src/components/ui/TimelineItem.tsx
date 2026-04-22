interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  children?: React.ReactNode;
}

export function TimelineItem({ title, subtitle, period, children }: TimelineItemProps) {
  return (
    <div className="relative border-l-2 border-border pl-6 pb-8 last:pb-0">
      <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full border-2 border-border bg-background" />
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <h3 className="font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted">{subtitle}</p>
        </div>
        <span className="text-sm text-muted whitespace-nowrap">{period}</span>
      </div>
      {children && <div className="mt-2">{children}</div>}
    </div>
  );
}
