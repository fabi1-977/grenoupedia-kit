import * as React from 'react';

/**
 */
export interface MetaBarProps {
  items: { label: string; value: string; alert?: string }[];
}

export declare function MetaBar(props: MetaBarProps): React.JSX.Element | null;
