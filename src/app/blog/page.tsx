import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Steve Duval",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-2xl font-bold tracking-tight text-foreground">Blog</h1>
      <p className="mt-4 text-muted">Coming soon.</p>
    </div>
  );
}
