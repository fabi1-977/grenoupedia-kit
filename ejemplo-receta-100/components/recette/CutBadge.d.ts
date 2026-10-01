import * as React from 'react';

/**
 * @startingPoint section="Recette" subtitle="Découpe officielle avec filet de gamme" viewport="700x200"
 */
export interface CutBadgeProps {
  cut?: 'premium' | 'g1' | 'perle' | 'grenouchup' | 'lollifrog';
  size?: 'md' | 'sm';
  showDesc?: boolean;
  tone?: 'clair' | 'fonce';
}

export declare function CutBadge(props: CutBadgeProps): React.JSX.Element | null;

export declare const CUTS: Record<string, { name: string; desc: string; usage: string; gamme: string | null }>;
