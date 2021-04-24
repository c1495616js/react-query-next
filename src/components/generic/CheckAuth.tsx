import { getSession, signOut } from 'next-auth/client';

export const requirePageAuth = async (context) => {
  {
    const session = await getSession(context);
    try {
      if (!session) throw new Error('No session found. Please log in.');
      return { props: { token: session.token } };
    } catch (error) {
      if (session) {
        signOut();
      }
      return {
        props: {},
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }
  }
};
