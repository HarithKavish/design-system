export interface HeroProps {
  eyebrow?: string;
  /** Short and terminal: "Products." "Status." "Specialized software services." */
  title: string;
  lead?: string;
  actions?: React.ReactNode;
  children?: React.ReactNode;
}
export declare function Hero(props: HeroProps): JSX.Element;
