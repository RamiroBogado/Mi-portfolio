import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          404
        </p>
        <h1 className="mt-2 text-4xl font-bold text-foreground sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-base text-muted">
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-10 items-center justify-center rounded-lg bg-primary px-6 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
