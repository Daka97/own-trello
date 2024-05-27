import React from 'react';
import { Box } from '@chakra-ui/react';

const Boards = (): JSX.Element => {
  return (
    <Box minHeight="50vh" flexGrow={3} mx="2%" boxShadow="base" rounded="lg" bg="white" p="1rem">
      <h1>Вы можете посетить страницу Панели, чтобы увидеть функциональность Trello-KZ.</h1>
    </Box>
  );
};

export default Boards;
