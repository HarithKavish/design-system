export interface ButtonProps {
  /** primary = solid accent; secondary = transparent, no shadow. */
  variant?: 'primary' | 'secondary';
  /** Renders an anchor instead of a button. */
  href?: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}
export declare function Button(props: ButtonProps): JSX.Element;
