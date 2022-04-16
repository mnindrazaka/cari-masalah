import React from 'react';
import { NativeBaseProvider, extendTheme } from 'native-base';
import ProblemsPage from './pages/problems-page';

const config = {
  useSystemColorMode: false,
  initialColorMode: 'light',
};

export const customTheme = extendTheme({ config });

export const App = () => {
  return (
    <NativeBaseProvider theme={customTheme}>
      <ProblemsPage />
    </NativeBaseProvider>
  );
};

export default App;
