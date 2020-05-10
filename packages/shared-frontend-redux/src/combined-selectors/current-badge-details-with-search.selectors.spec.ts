import {
  selectVisibleFoodForBadgeDetailsData
} from './current-badge-details-with-search.selectors';
import { IState } from '../state.interface';

describe('selectVisibleFoodForBadgeDetailsData', () => {
  test('returns visible food for the current badge', () => {
    const result = selectVisibleFoodForBadgeDetailsData({
      currentBadgeDetailsData: {
        data: {
          food: [{
            name: 'food1'
          }, {
            name: 'food2'
          }, {
            name: 'other'
          }]
        }
      },
      ui: {
        searchTerm: 'food'
      }
    } as IState);
    expect(result).toEqual([{
      name: 'food1'
    }, {
      name: 'food2'
    }]);
  });
});
