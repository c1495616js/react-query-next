import React from 'react';
import Head from 'next/head';
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';

import { useQuery, useQueryClient, QueryClient, useMutation, QueryClientProvider } from 'react-query';
import { request, gql } from 'graphql-request';

const endpoint = 'http://localhost:3333/graphql';

// login hook
function useLogin() {
  return useMutation(async () => {
    const { signin: data } = await request(
      endpoint,
      gql`
        mutation {
          signin(signinInput: { email: "leo@me.com", password: "password" }) {
            token
            user {
              id
            }
          }
        }
      `
    );
    console.log(data);
    return data;
  });
}

export default function Home() {
  const [session, loading] = useSession();
  const router = useRouter();

  React.useEffect(() => {
    if (!session && !loading) {
      // login
      router.push('/login');
    }
    if (!loading && session) {
      router.push('/post');
    }
  }, [session, loading]);

  return (
    <>
      <div style={{ color: 'white' }}>loading...</div>
    </>
  );
}
