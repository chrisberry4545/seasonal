import { IImageGrid } from '../ImageGrid/ImageGrid.interface';

export interface ISwitchableGridOrListInterface extends IImageGrid {
  isListViewShown: boolean;
  onToggleListView: () => void;
}
