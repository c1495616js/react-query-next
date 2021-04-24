import React from 'react';
import Head from 'next/head';
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';

export default function Home() {
  const [session, loading] = useSession();
  const router = useRouter();

  React.useEffect(() => {
    if (!session && !loading) {
      // login
      router.push('/login');
    }
    if (!loading && session) {
      router.push('/me');
    }
  }, [session, loading]);

  return (
    <>
      <div style={{ color: 'white' }}>loading...</div>
    </>
  );
}
