import * as React from 'react';

/**
 */
export interface IngredientListProps {
  groups: { title?: string; items: { name: string; qty: string; allergen?: string }[] }[];
}

export declare function IngredientList(props: IngredientListProps): React.JSX.Element | null;
