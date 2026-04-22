interface TagProps {
  children: React.ReactNode;
}

export function Tag({ children }: TagProps) {
  return (
    <span className="inline-block rounded-full bg-foreground/5 px-3 py-1 text-xs font-medium text-muted">
      {children}
    </span>
  );
}
