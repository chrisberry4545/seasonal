import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import { initLocalization } from './helpers/init-localization';

initLocalization();

Enzyme.configure({ adapter: new Adapter() });
