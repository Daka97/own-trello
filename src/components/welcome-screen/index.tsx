import React from 'react';
import NavBar from '@/src/components/navbar';
import { Box, Image, Flex, Text } from '@chakra-ui/react';

const WelcomeScreen = (): JSX.Element => {
  return (
    <>
      <Box bgGradient="linear(darkblue, white)" height="100vh">
        <NavBar />
        <Flex
          alignItems="center"
          flexDirection={['column', 'column', 'row', 'row']}
          justifyContent="center"
          p="4rem">
          <Box>
            <Text
              fontSize={['30px', '30px', '33px', '33px']}
              fontWeight="bold"
              lineHeight="50px"
              marginBottom="10px">
              Trello Клон помогает командам эфективнее делать свою работу.
            </Text>
            <Text
              fontSize={['0.5rem', '0.5rem', '1rem', '1.5rem']}
              width={['100%', '100%', '50%', '50%']}>
              Сотрудничайте, управляйте проектами и достигайте новых вершин продуктивности. От
              высотки до домашнего офиса - ваша команда работает по-своему, и все это можно
              реализовать с помощью Trello клона.
            </Text>
          </Box>
          <Box>
            <Image
              height={['200px', '300px', '400px', '500px']}
              src="/homepage/home-illustration.svg"
              alt="brand logo"></Image>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default WelcomeScreen;
