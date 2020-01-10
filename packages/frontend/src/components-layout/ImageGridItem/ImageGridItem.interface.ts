export interface IImageGridItem {
  id: string;
  name: string;
  imageUrlSmall: string;
  skipAnimation?: boolean;
  hasBottomBorder?: boolean;
  onClick?: (itemId: string) => void;
}
