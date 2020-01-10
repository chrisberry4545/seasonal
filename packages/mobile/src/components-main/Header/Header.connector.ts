import { connect } from 'react-redux';
import {
  Header
} from './Header';
import {
  openMenu, closeMenu
} from '@chrisb-dev/seasonal-shared';
import { IHeaderDispatchProps } from './Header.interface';
import { Dispatch } from 'redux';

const mapStateToProps = () => ({});

const mapDispatchToProps = (
  dispatch: Dispatch
): IHeaderDispatchProps => ({
  onMenuClose: () => dispatch(closeMenu()),
  onMenuOpen: () => dispatch(openMenu())
});

export const HeaderConnecter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
