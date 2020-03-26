export interface IImageGridItem {
  id: string;
  name: string;
  imageUrlSmall: string;
  onClick?: (itemId: string) => void;
  hasBottomBorder?: boolean;
  paddingRight?: string | number;
  paddingLeft?: string |number;
  width?: string | number;
}
