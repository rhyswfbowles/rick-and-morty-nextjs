import Head from 'next/head';
import React from 'react';


interface IMetaProps {
  title: string;
}

const Meta: React.FunctionComponent<IMetaProps> = ({
  title
}) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default Meta;
