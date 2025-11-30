import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import type { ButtonHTMLAttributes } from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
  {
    variants: {
      variant: {
        default:
          'bg-blue-600 text-white shadow hover:bg-blue-700 theme-dark:bg-blue-500 theme-dark:hover:bg-blue-600',
        destructive:
          'bg-red-600 text-white shadow-sm hover:bg-red-700 theme-dark:bg-red-500 theme-dark:hover:bg-red-600',
        outline:
          'border border-gray-300 bg-white shadow-sm hover:bg-gray-200 theme-dark:border-gray-700 theme-dark:bg-gray-800 theme-dark:hover:bg-gray-700 theme-dark:text-white ',
        secondary:
          'bg-gray-100 text-gray-900 shadow-sm hover:bg-gray-200 theme-dark:bg-gray-800 theme-dark:text-gray-100 theme-dark:hover:bg-gray-700',
        ghost: 'hover:bg-gray-100 hover:text-gray-900 theme-dark:hover:bg-gray-800 theme-dark:hover:text-gray-100',
        link: 'text-blue-600 underline-offset-4 hover:underline theme-dark:text-blue-400',
      },
      size: {
        default: 'h-10 !px-5 !py-2.5',
        sm: 'h-9 rounded-md !px-4 !py-2 text-xs',
        lg: 'h-12 rounded-lg !px-8 !py-3',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'