/**
 * Lumina OS Type Definitions
 */

export type NavigationSection = 'platform' | 'features' | 'hardware' | 'enterprise';

export type LegalDocType = 'terms' | 'privacy' | 'legal';

export type ShowcaseTabId = 'neural' | 'volumetric' | 'quantum' | 'haptic';

export interface ShowcaseTab {
  id: ShowcaseTabId;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
}

export type HapticMaterial = 'glass' | 'carbon' | 'silk';

export interface SystemToggleState {
  neuralMesh: boolean;
  raytracedCaustics: boolean;
  submillimeterHaptics: boolean;
  superpositionBuffer: boolean;
  quantumEntanglement: boolean;
  gazeInterrupts: boolean;
}

export type SystemToggleAction =
  | { type: 'TOGGLE'; key: keyof SystemToggleState }
  | { type: 'SET_ALL'; value: boolean }
  | { type: 'RESET' };

export interface SpecItem {
  label: string;
  value: string;
}

export interface SpecCategory {
  title: string;
  specs: SpecItem[];
}
