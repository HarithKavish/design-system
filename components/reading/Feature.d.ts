export interface FeatureProps {
  eyebrow?: string;
  title: string;
  summary?: string;
  /** Author handle, shown in a case-preserving pill. */
  handle?: string;
  date?: string;
  href?: string;
  onClick?: (event: React.MouseEvent) => void;
}
export declare function Feature(props: FeatureProps): JSX.Element;
