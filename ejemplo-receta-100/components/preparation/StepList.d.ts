import * as React from 'react';

/**
 */
export interface StepListProps {
  steps: { title: string; text: string; control?: string; signal?: string }[];
}

export declare function StepList(props: StepListProps): React.JSX.Element | null;
