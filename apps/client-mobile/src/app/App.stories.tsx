import { storiesOf } from '@storybook/react-native';
import React from 'react';
import App from './App';

storiesOf('App', module)
  .addDecorator((getStory) => <>{getStory()}</>)
  .add('Default', () => <App />);
