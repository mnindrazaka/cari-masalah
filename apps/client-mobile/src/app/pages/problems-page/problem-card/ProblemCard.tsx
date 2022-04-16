import React from 'react';
import { Box, Center, Heading, Skeleton, Stack, Text } from 'native-base';

function Content(props: ProblemCardProps) {
  switch (props.variant) {
    case 'default': {
      return (
        <>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              {props.title}
            </Heading>
          </Stack>
          <Text fontWeight="400">{props.content}</Text>
        </>
      );
    }
    case 'loading': {
      return (
        <Center>
          <Skeleton mb="4" />
          <Skeleton.Text />
        </Center>
      );
    }
    default: {
      const _exhaustive: never = props;
      return null;
    }
  }
}

export type ProblemCardProps =
  | { variant: 'default'; title: string; content: string }
  | { variant: 'loading' };

export default function ProblemCard(props: ProblemCardProps) {
  return (
    <Box
      rounded="lg"
      overflow="hidden"
      borderColor="coolGray.500"
      backgroundColor="gray.50"
      width="100%"
    >
      <Stack p="4" space={3}>
        <Content {...props} />
      </Stack>
    </Box>
  );
}
