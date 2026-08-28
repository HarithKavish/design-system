export interface PillProps {
  children?: React.ReactNode;
  /** live/ready = green; progress/planned = amber-brown; neutral = accent tint. */
  tone?: 'neutral' | 'live' | 'progress' | 'planned';
  /** Keeps the author's casing — for names and handles, which must not shout. */
  preserveCase?: boolean;
}
export declare function Pill(props: PillProps): JSX.Element;
/** Maps a status string ("Live", "In progress", "Planned") to a pill tone. */
export declare function statusTone(state: string): 'neutral' | 'live' | 'progress' | 'planned';
