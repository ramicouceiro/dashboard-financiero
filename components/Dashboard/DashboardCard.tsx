'use client'

import React from 'react';
import { useTheme } from '../../app/ThemeContext';

interface DashboardCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function DashboardCard({ children, className = '' }: DashboardCardProps) {
    const { theme } = useTheme();
    return (
      <div className={`${theme === 'dark' ? 'shadow-neomorphicDark' : 'shadow-neomorphic'} ${theme === 'dark' ? 'hover:shadow-neomorphicInsetDark' : 'hover:shadow-neomorphicInset'} transition duration-150 ease-in-out border-none rounded-xl bg-background ${className}`}>
        <div className="transition-transform duration-300 ease-in-out hover:scale-95">
          {children}
        </div>
      </div>
    );
  }