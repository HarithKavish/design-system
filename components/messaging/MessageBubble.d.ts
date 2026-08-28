export interface MessageBubbleProps {
  from?: 'me' | 'them';
  children?: React.ReactNode;
  timestamp?: string;
}
export declare function MessageBubble(props: MessageBubbleProps): JSX.Element;
