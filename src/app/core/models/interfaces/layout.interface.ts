export declare interface LayoutConfig {
  preset: LayoutPresetType;
  primary: string;
  surface?: string | undefined | null;
  darkTheme?: boolean;
  menuNav?: boolean;
}

export type LayoutPresetType = 'Aura' | 'Material' | 'Lara' | 'Nora';
export declare interface LayoutPalette {
  name?: string;
  palette?: {
    0?: string;
    50?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
    950?: string;
  };
}

export interface IPresets {
  name: string;
  value: string;
}

export interface Pagination {
  skip: number;
  limit: number;
  total: number;
}

export interface PageEvent {
  skip: number;
  limit: number;
}

export interface StateOptions {
  label: string;
  value: string;
}
