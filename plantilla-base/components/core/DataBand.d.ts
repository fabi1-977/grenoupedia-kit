import * as React from 'react';

/**
 */
export interface DataBandProps {
  items: { label: string; value: string }[];
  tone?: 'profond' | 'vert';
}

export declare function DataBand(props: DataBandProps): React.JSX.Element | null;
