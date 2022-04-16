import { storiesOf } from '@storybook/react-native';
import { Box, NativeBaseProvider } from 'native-base';
import React from 'react';
import { customTheme } from '../../../App';
import ProblemCard from './ProblemCard';

storiesOf('Problem Card', module)
  .addDecorator((getStory) => (
    <NativeBaseProvider theme={customTheme}>
      <Box flex={1} justifyContent="center" alignItems="center" padding="3">
        {getStory()}
      </Box>
    </NativeBaseProvider>
  ))
  .add('Default', () => (
    <ProblemCard
      variant="default"
      title="Problem 1"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    />
  ))
  .add('Loading', () => <ProblemCard variant="loading" />);
