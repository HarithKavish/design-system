export interface TocItem { id: string; label: string; level?: 2 | 3 }
export interface TocProps {
  title?: string;
  items?: TocItem[];
  /** Id of the section currently in view. */
  activeId?: string;
}
export declare function Toc(props: TocProps): JSX.Element;
