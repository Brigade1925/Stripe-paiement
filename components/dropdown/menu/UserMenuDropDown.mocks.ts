import { ISODateString, Session } from 'next-auth';
import { IUser } from '../../../types';
import { IUserMenuDropDown } from './UserMenuDropDown';

export interface DefaultSession {
  user?: IUser;
  expires: ISODateString;
}
const _session: Session = {
  expires: '',
  user: undefined,
};

const base: IUserMenuDropDown = {
  session: _session!,
};

export const mockUserMenuDropDownProps = {
  base,
};
