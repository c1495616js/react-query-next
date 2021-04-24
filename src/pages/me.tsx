import React from 'react';
import { GetServerSideProps } from 'next';
import { useQuery } from 'react-query';
import { gql } from 'graphql-request';
import { signOut } from 'next-auth/client';

import { requirePageAuth } from '@/components/generic/CheckAuth';
import graphqlClient from 'src/utils/graphQLClient';

interface IProps {
  token: string;
}

function useMe(token: string) {
  return useQuery('me', async () => {
    const { me: data } = await graphqlClient(token).request(
      gql`
        query {
          me {
            email
            role
          }
        }
      `
    );
    return data;
  });
}

const Me: React.FC<IProps> = ({ token }) => {
  const { status, data, error, isFetching } = useMe(token);

  return (
    <div className="container mx-auto h-full flex flex-1 justify-center items-center">
      <div className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
        <div className="flex flex-1 justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        </div>
        <div className="ml-6 pt-1">
          <h4 className="text-xl text-gray-900 leading-tight">Email: {data?.email}</h4>
          <p className="text-base text-gray-600 leading-normal">Role: {data?.role}</p>
        </div>
      </div>
    </div>
  );
};

export default Me;

export const getServerSideProps: GetServerSideProps = requirePageAuth;
