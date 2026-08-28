export interface CardProps {
  /** Status word; drives the topline pill's tone. */
  status?: string;
  /** Right side of the topline: a path, a subdomain, or a date. */
  route?: string;
  title?: string;
  /** One line on what it is for. */
  meta?: string;
  /** Two or three sentences of substance. */
  body?: string;
  details?: string[];
  link?: { href: string; label: string };
  /** Adds the 2px hover lift. Use only when the whole card is a link. */
  interactive?: boolean;
  children?: React.ReactNode;
}
export declare function Card(props: CardProps): JSX.Element;
