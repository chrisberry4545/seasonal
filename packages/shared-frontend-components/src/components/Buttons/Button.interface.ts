export interface IButton {
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  'data-e2e'?: string;
}
