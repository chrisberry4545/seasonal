export interface IButton {
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  e2eTag?: string;
}
