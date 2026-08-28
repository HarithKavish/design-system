export interface InputWithButtonProps {
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  placeholder?: string;
  /** Defaults to the → arrow character. */
  buttonLabel?: React.ReactNode;
  type?: string;
  name?: string;
}
export declare function InputWithButton(props: InputWithButtonProps): JSX.Element;
