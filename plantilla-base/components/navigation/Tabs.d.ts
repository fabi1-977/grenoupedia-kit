import * as React from 'react';

/**
 */
export interface TabsProps {
  items: { id: string; label: string; meta?: string }[];
  value?: string;
  defaultValue?: string;
  onChange?: (id: string) => void;
  tone?: 'clair' | 'fonce';
}

export declare function Tabs(props: TabsProps): React.JSX.Element | null;
