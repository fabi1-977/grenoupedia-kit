import * as React from 'react';

/**
 */
export interface PairingCardProps {
  vin?: { name: string; note?: string };
  sansAlcool?: { name: string; note?: string };
}

export declare function PairingCard(props: PairingCardProps): React.JSX.Element | null;
