export interface MessageComposerProps {
  value?: string;
  onChange?: (value: string) => void;
  onSend?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}
export declare function MessageComposer(props: MessageComposerProps): JSX.Element;
