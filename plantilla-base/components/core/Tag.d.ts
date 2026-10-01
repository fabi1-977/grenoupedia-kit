import * as React from 'react';

/**
 */
export interface TagProps {
  variant?: 'neutre' | 'allergene' | 'controle' | 'alerte' | 'gamme';
  /** Only for variant="gamme": adds the range colour marker. */
  gamme?: 'iqf' | 'coupes' | 'collection' | 'club';
  children?: React.ReactNode;
}

export declare function Tag(props: TagProps): React.JSX.Element | null;
