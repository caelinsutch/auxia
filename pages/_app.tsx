import { ChakraProvider } from '@chakra-ui/react'
import {NextPage} from 'next';

const App: NextPage = ({ Component, pageProps }: any) => (
  <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default App
