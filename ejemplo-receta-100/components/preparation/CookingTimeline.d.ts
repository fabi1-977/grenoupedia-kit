import * as React from 'react';

/**
 * @startingPoint section="Préparation" subtitle="Infographie de cuisson avec chrono" viewport="700x420"
 */
export interface CookingTimelineProps {
  phases: { from: number; to: number; title: string; text: string; signal?: string }[];
  total?: number;
  note?: string;
  timer?: boolean;
}

export declare function CookingTimeline(props: CookingTimelineProps): React.JSX.Element | null;
