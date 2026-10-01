import * as React from 'react';

/**
 * @startingPoint section="Recette" subtitle="Fiche technique de découpe" viewport="700x420"
 */
export interface FicheTechniqueProps {
  cut?: 'premium' | 'g1' | 'perle' | 'grenouchup' | 'lollifrog';
  calibres?: string[];
  calibre?: string;
  rows?: { label: string; value: string }[];
  origine?: string;
  sku?: string;
  note?: string;
}

export declare function FicheTechnique(props: FicheTechniqueProps): React.JSX.Element | null;
