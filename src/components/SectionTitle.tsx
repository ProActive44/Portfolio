import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'react';

interface SectionTitleProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
}

export function SectionTitle({ title, subtitle, className, ...props }: SectionTitleProps) {
  return (
    <div className={cn('flex flex-col items-center justify-center mb-12', className)} {...props}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 theme-dark:text-white mb-4 text-center">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 theme-dark:text-gray-300 max-w-2xl text-center">
          {subtitle}
        </p>
      )}
    </div>
  );
}