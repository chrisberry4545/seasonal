import {
  IImageGridItem
} from '../ImageGridItem/ImageGridItem.interface';

export interface IImageGrid {
  data: IImageGridItem[] | undefined;
  onClick?: (itemId: string) => void;
  skipAnimation?: boolean;
  'data-e2e'?: string;
}
