import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import { enableFetchMocks } from 'jest-fetch-mock';
enableFetchMocks();

Enzyme.configure({ adapter: new Adapter() });
