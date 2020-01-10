export interface IImageGridItem {
  id: string;
  evenGridItem?: boolean;
  name: string;
  imageUrlSmall: string;
  onClick?: (itemId: string) => void;
  hasBottomBorder?: boolean;
}
