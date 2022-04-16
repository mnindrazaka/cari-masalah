import { storiesOf } from '@storybook/react-native';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { customTheme } from '../../App';
import ProblemsPage from './ProblemsPage';

storiesOf('Problems Page', module)
  .addDecorator((getStory) => (
    <NativeBaseProvider theme={customTheme}>{getStory()}</NativeBaseProvider>
  ))
  .add('Default', () => <ProblemsPage />);
