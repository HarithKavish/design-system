export interface ArticleHeadProps {
  /** Uppercase category above the title. */
  kicker?: string;
  title: string;
  lead?: string;
  /** Byline facts, separated automatically by hairline dividers. */
  meta?: React.ReactNode[];
}
export declare function ArticleHead(props: ArticleHeadProps): JSX.Element;
