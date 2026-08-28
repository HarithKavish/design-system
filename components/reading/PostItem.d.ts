export interface PostItemProps {
  title: string;
  date?: string;
  summary?: string;
  tags?: string[];
  href?: string;
}
export declare function PostItem(props: PostItemProps): JSX.Element;
