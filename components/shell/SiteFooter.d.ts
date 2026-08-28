export interface SiteFooterProps {
  owner?: string;
  year?: number;
  links?: Array<{ label: string; href?: string }>;
  activeLabel?: string;
}
export declare function SiteFooter(props: SiteFooterProps): JSX.Element;
