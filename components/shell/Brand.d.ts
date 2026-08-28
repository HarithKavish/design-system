export interface BrandProps {
  /** Business or surface name. */
  name?: string;
  /** Quiet second line, e.g. "Independent software business". Hidden below 760px. */
  descriptor?: string;
  /** Path to the HK mark (assets/logo.png). Omitted renders type only. */
  logoSrc?: string;
  href?: string;
  /** Type-only lockup, for surfaces that do not carry the mark. */
  wordmarkOnly?: boolean;
}
export declare function Brand(props: BrandProps): JSX.Element;
