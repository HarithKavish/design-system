export interface StatusRowProps {
  label: string;
  /** "Live" | "In progress" | "Planned" | "Ready" */
  state: string;
  detail?: string;
}
export declare function StatusRow(props: StatusRowProps): JSX.Element;
