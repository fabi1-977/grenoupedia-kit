import * as React from 'react';

/**
 */
export interface ErrorCalloutProps {
  kicker?: string;
  title?: string;
  children?: React.ReactNode;
  /** Mono rule shown under the Ligne. */
  rule?: string;
}

export declare function ErrorCallout(props: ErrorCalloutProps): React.JSX.Element | null;
