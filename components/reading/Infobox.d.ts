export interface InfoboxProps {
  title?: string;
  rows?: Array<{ label: string; value: React.ReactNode }>;
}
export declare function Infobox(props: InfoboxProps): JSX.Element;
