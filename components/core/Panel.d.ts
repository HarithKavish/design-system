export interface PanelProps {
  title?: string;
  body?: string;
  /** Spans all three grid columns — for prose-heavy panels (legal, details). */
  wide?: boolean;
  children?: React.ReactNode;
}
export declare function Panel(props: PanelProps): JSX.Element;
