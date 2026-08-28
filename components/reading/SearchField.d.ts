export interface SearchFieldProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  /** Result count line, e.g. "12 of 42 blogs". */
  count?: React.ReactNode;
}
export declare function SearchField(props: SearchFieldProps): JSX.Element;
