import * as React from 'react';

/**
 */
export interface CalibreRuleProps {
  calibres?: string[];
  /** Calibre that receives the repère. */
  active?: string;
  unit?: string;
  tone?: 'clair' | 'fonce';
}

export declare function CalibreRule(props: CalibreRuleProps): React.JSX.Element | null;
