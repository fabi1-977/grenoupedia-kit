import * as React from 'react';

/**
 * @startingPoint section="Actions" subtitle="Bouton vert, contour, inverse, lien" viewport="700x200"
 */
export interface ButtonProps {
  /** Visual treatment. */
  variant?: 'primary' | 'secondary' | 'inverse' | 'ghost';
  size?: 'md' | 'sm';
  /** Appends « → » (CTA convention). */
  arrow?: boolean;
  disabled?: boolean;
  /** Renders an <a> when set. */
  href?: string;
  onClick?: (e: any) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Button(props: ButtonProps): React.JSX.Element | null;
