import { IHeader } from './Header';

// export interface DefaultSession {
//   user?: {
//     name?: string | null;
//     email?: string | null;
//     image?: string | null;
//   };
//   expires: ISODateString;
// }
// const _session: DefaultSession = {
//   user: { name: 'MockUser', email: 'MockUser@Mock.mo' },
//   expires: '',
// };

const base: IHeader = {};

export const mockHeaderProps = {
  base,
};
