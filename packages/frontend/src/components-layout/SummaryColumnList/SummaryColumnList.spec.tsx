import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { SummaryColumnList } from '../SummaryColumnList/SummaryColumnList';
import { ISummaryColumn } from '../SummaryColumn/SummaryColumn.interface';

jest.mock('../SummaryColumn', () => ({
  SummaryColumn: () => 'SummaryColumn'
}));

describe('<SummaryColumnList />', () => {
  let wrapper: ShallowWrapper;
  const columns = [{
    title: 't1'
  }, {
    title: 't2'
  }] as ISummaryColumn[];

  beforeEach(() =>
    wrapper = shallow(
      <SummaryColumnList columns={columns} />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
