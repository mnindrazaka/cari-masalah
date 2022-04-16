import { Box, Center, Heading, ScrollView } from 'native-base';
import React from 'react';
import { ProblemCardProps } from './problem-card';
import ProblemList from './problem-list';

const items: ProblemCardProps[] = [
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
  {
    variant: 'default',
    title: 'Problem 5',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
];

export function ProblemsPage() {
  return (
    <Box padding="3">
      <Center>
        <Heading>Cari Masalah</Heading>
      </Center>
      <ScrollView marginY="5">
        <ProblemList variant="default" items={items} />
      </ScrollView>
    </Box>
  );
}

export default ProblemsPage;
