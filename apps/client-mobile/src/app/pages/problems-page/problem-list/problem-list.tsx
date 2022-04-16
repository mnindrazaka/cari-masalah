import React from 'react';
import { Box, Heading, Stack, Text } from 'native-base';
import ProblemCard, { ProblemCardProps } from '../problem-card';

export type ProblemListProps =
  | { variant: 'default'; items: ProblemCardProps[] }
  | { variant: 'error'; message: string }
  | { variant: 'loading' };

export const ProblemList = (props: ProblemListProps) => {
  switch (props.variant) {
    case 'default': {
      return props.items.length > 0 ? (
        <Stack space="3">
          {props.items.map((item, index) => (
            <ProblemCard key={index} {...item} />
          ))}
        </Stack>
      ) : (
        <Box flex={1} justifyContent="center" alignItems="center">
          <Heading>Oops, the problems is empty</Heading>
        </Box>
      );
    }
    case 'loading': {
      return (
        <Stack space="3">
          <ProblemCard variant="loading" />
          <ProblemCard variant="loading" />
          <ProblemCard variant="loading" />
          <ProblemCard variant="loading" />
        </Stack>
      );
    }
    case 'error': {
      return (
        <Box flex={1} justifyContent="center" alignItems="center">
          <Heading>Oops, failed to get problems</Heading>
          <Text>{props.message}</Text>
        </Box>
      );
    }
    default: {
      const _exhaustive: never = props;
      return null;
    }
  }
};

export default ProblemList;
