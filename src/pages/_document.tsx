import { Html, Head, Main, NextScript } from 'next/document';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Document = () => {
  return (
    <Html lang="en">
      <Head></Head>
      <body className='text-black bg-white dark:bg-gray-900 dark:text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document;