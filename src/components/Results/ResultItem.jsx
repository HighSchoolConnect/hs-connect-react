import React from "react";
import {
  Box,
  HStack,
  VStack,
  Image,
  Text,
  Divider,
  Center,
} from "@chakra-ui/react";

import { FaArrowCircleRight } from "react-icons/fa";


const ResultItem = ({id, title, company, location, salary, logo}) => {
  return (
    <Box bg="black" w="fit-content" p={4} color="white" borderRadius={15}>
      <HStack>
        <Image src={logo} type="image/svg" boxSize="75px" />
        <Text fontSize="2xl" fontWeight="bold" ml={4}>
        {title}
        </Text>
        <Center height="50px">
          <Divider orientation="vertical" />
        </Center>
        <VStack>
          <Text fontSize="sm" ml={4}>
            {company}
          </Text>
          <Text fontSize="sm" ml={4}>
            {location}
          </Text>
          <Text fontSize="sm" ml={4}>
            {salary}
          </Text>
        </VStack>
        <Center height="50px">
          <Divider orientation="vertical" />
        </Center>
        <Box>
          <FaArrowCircleRight size={75} color="#00c6d3" />
        </Box>
      </HStack>
    </Box>
  );
};

export default ResultItem;
