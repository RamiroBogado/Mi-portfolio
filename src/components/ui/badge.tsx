import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary/10 text-accent border border-primary/20",
        outline: "border border-border text-muted",
        secondary: "bg-card text-foreground border border-border",
        dot: "bg-primary/10 text-accent border border-primary/20 gap-1.5",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean;
}

export function Badge({ className, variant, dot, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(badgeVariants({ variant: dot ? "dot" : variant, className }))}
      {...props}
    >
      {dot && <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />}
      {children}
    </span>
  );
}
