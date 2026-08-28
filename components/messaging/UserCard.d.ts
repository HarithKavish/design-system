export interface UserCardProps {
  name?: string;
  email?: string;
  avatarSrc?: string;
  /** Shown centred when there is no signed-in user. */
  emptyLabel?: string;
}
export declare function UserCard(props: UserCardProps): JSX.Element;
