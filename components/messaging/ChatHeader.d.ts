export interface ChatHeaderProps {
  peer?: string;
  /** Connection or auth state, e.g. "Signed out". */
  status?: React.ReactNode;
  /** Shown only on narrow layouts, where the list and conversation swap. */
  onBack?: () => void;
  /** Replaces the status slot when richer controls are needed. */
  actions?: React.ReactNode;
}
export declare function ChatHeader(props: ChatHeaderProps): JSX.Element;
