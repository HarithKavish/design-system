export interface SiteHeaderNavItem { label: string; href?: string; onClick?: () => void }
export interface SiteHeaderProps {
  brand?: { name?: string; descriptor?: string; href?: string; wordmarkOnly?: boolean };
  logoSrc?: string;
  navigation?: SiteHeaderNavItem[];
  /** Label of the current page, matched against navigation labels. */
  activeLabel?: string;
  theme?: 'light' | 'dark';
  onToggleTheme?: () => void;
  /** 0–100. Renders the 2px reading-progress hairline on the header's bottom edge. */
  progress?: number;
  /** Extra actions placed left of the hamburger (e.g. an account avatar). */
  children?: React.ReactNode;
}
export declare function SiteHeader(props: SiteHeaderProps): JSX.Element;
