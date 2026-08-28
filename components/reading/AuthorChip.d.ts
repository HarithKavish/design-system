export interface AuthorChipProps {
  handle: string;
  /** Secondary line, e.g. "4 blogs". */
  meta?: string;
  active?: boolean;
  onClick?: () => void;
}
export declare function AuthorChip(props: AuthorChipProps): JSX.Element;
