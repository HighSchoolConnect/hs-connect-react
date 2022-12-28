import React from "react"
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Text,
} from "@chakra-ui/react"
import { questions } from "./Questions"

const FAQAccordion = () => {
    return (
        <Box maxW="container.xl" mx="auto" px={4} py={8}>
            <Text fontSize="4xl" fontWeight="bold" textAlign="center" mb={8}>
                Frequently Asked Questions
            </Text>
            <Accordion
                allowToggle
                bg="teal"
                color="white"
                border="white"
                borderRadius={5}
                padding={5}
            >
                {questions.map((question) => (
                    <AccordionItem
                        borderRadius={5}
                        lineHeight={6}
                        key={question.id}
                    >
                        <h2>
                            <AccordionButton
                                _expanded={{ bg: "#00c6d3" }}
                                _hover={{ bg: "#00c6d3" }}
                            >
                                <Box
                                    className="box"
                                    flex="1"
                                    textAlign="left"
                                    fontSize={24}
                                    fontWeight="bold"
                                    lineHeight={10}
                                >
                                    {question.question}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} fontWeight="semibold">
                            {question.answer}
                        </AccordionPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </Box>
    )
}

export default FAQAccordion
