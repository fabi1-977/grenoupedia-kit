import * as React from 'react';

/**
 */
export interface LigneProps {
  /** Repère position in % — fixed at 74 by the Brand Book; do not change in brand pieces. */
  repere?: number;
  tone?: 'acier' | 'vert' | 'blanc' | 'noir';
  /** Mono label under the repère. */
  label?: string;
  weight?: number;
  style?: React.CSSProperties;
}

export declare function Ligne(props: LigneProps): React.JSX.Element | null;
