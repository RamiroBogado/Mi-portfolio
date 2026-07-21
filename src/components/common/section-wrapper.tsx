import { cn } from "@/lib/utils";
import { FadeUp } from "./animated";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

export function SectionWrapper({ id, children, className, title, subtitle }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-24 md:py-32",
        className
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <FadeUp>
            <div className="mb-16 md:mb-20">
              {subtitle && (
                <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
                  {subtitle}
                </p>
              )}
              {title && (
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                  {title}
                </h2>
              )}
            </div>
          </FadeUp>
        )}
        {children}
      </div>
    </section>
  );
}
