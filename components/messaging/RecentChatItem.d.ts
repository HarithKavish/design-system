export interface RecentChatItemProps {
  name?: string;
  email?: string;
  avatarSrc?: string;
  active?: boolean;
  onClick?: () => void;
}
export declare function RecentChatItem(props: RecentChatItemProps): JSX.Element;
