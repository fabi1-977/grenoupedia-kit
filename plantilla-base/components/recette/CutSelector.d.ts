import * as React from 'react';

/**
 */
export interface CutSelectorProps {
  value?: string;
  defaultValue?: string;
  onChange?: (id: string) => void;
  cuts?: string[];
}

export declare function CutSelector(props: CutSelectorProps): React.JSX.Element | null;
