import * as React from 'react';

/**
 */
export interface BreadcrumbsProps {
  items: { label: string; href?: string }[];
}

export declare function Breadcrumbs(props: BreadcrumbsProps): React.JSX.Element | null;
