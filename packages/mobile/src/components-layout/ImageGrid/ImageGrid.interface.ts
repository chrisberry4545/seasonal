import {
  IImageGridItem
} from '../ImageGridItem/ImageGridItem.interface';

export interface IImageGrid {
  data: IImageGridItem[] | undefined;
  onClick?: (itemId: string) => void;
  maxItemsPerRow?: number;
  noResultsMessage?: string;
}
