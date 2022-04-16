import { storiesOf } from '@storybook/react-native';
import { Box, NativeBaseProvider } from 'native-base';
import React from 'react';
import { customTheme } from '../../../App';
import ProblemList from './problem-list';

storiesOf('Problem List', module)
  .addDecorator((getStory) => (
    <NativeBaseProvider theme={customTheme}>
      <Box padding="3" flex={1}>
        {getStory()}
      </Box>
    </NativeBaseProvider>
  ))
  .add('Default', () => (
    <ProblemList
      variant="default"
      items={[
        {
          variant: 'default',
          title: 'Problem 1',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
        {
          variant: 'default',
          title: 'Problem 2',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
        {
          variant: 'default',
          title: 'Problem 3',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
        {
          variant: 'default',
          title: 'Problem 4',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
      ]}
    />
  ))
  .add('Empty', () => <ProblemList variant="default" items={[]} />)
  .add('Loading', () => <ProblemList variant="loading" />)
  .add('Error', () => (
    <ProblemList variant="error" message="Server return 500" />
  ));
