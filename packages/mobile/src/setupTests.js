import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import i18n from 'i18n-js';
import { translationsEn } from '@chrisb-dev/seasonal-shared-models';

i18n.translations = {
  en: translationsEn
};

Enzyme.configure({ adapter: new Adapter() });
