export interface NavLinkProps {
  label: string;
  href?: string;
  /** Adds .is-active: filled pill with a hairline border. */
  active?: boolean;
  onClick?: (event: React.MouseEvent) => void;
}
export declare function NavLink(props: NavLinkProps): JSX.Element;
