import {
  SessionContextValue,
  signIn,
  signOut,
  useSession,
} from 'next-auth/react';
export interface IAuthButton extends React.ComponentPropsWithoutRef<'button'> {}

const AuthButton: React.FC<IAuthButton> = ({ className, ...buttonProps }) => {
  const data: SessionContextValue = useSession();
  // const session: Session = data.data!;
  // const loading = data.status === 'loading';

  // function delay(time: number) {
  //   return new Promise((resolve) => setTimeout(resolve, time));
  // }

  // delay(5000).then(() => console.log('ran after 1 second1 passed'));

  const authenticated = data.status === 'authenticated';

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        // authenticated ? signOut() : router.push('/etoiliste');
        authenticated
          ? signOut({
              callbackUrl: `${window.location.origin}/`,
            })
          : signIn('facebook', {
              callbackUrl: `${window.location.origin}/etoiliste`,
            });
      }}
      className={`${className}`}
      {...buttonProps}
    >
      {authenticated ? 'Sign Out' : 'Join Us'}
    </button>
  );
};

export default AuthButton;
