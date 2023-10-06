"use client";
import {
  Center,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  RadioGroup,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";

import Head from "next/head";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";

type Question = {
  id: number;
  question: string;
  options: string[];
  correct_option_index: number;
  questioncategory: string;
};
interface QuizQuestionsProps {
  params: {
    authToken: string;
  };
}

const QuizQuestions: React.FC<QuizQuestionsProps> = ({ params }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  useEffect(() => {
    const apiUrl = "https://mcq-project-uzai.onrender.com/questions";
    const headers = {
      Authorization: `${decodeURIComponent(params.authToken)}`,
    };

    axios
      .get<Question[]>(apiUrl, { headers })
      .then(response => {
        setQuestions(response.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <Container
      maxW="7xl"
      mt={5}
      mb={5}
      borderWidth="1px"
      borderRadius="lg"
      p={6}
      boxShadow="xl"
    >
      <Center flexDirection="column">
        <Heading>NewGenCo</Heading>
      </Center>
      <Text mt={4}>Well it's little tough to explain</Text>
      <Heading mt={4} size="lg">
        Questions:
      </Heading>
      <Divider
        mt={4}
        mb={4}
        css={{
          boxShadow: "1px 1px #888888",
        }}
      />
      <Formik initialValues={{}} onSubmit={() => {}}>
        {props => (
          <Form>
            {questions.map((singleQuiz, key) => (
              <Field name={singleQuiz.id} key={key}>
                {({ field }: { field: Question }) => (
                  <FormControl
                    as="fieldset"
                    isRequired={true}
                    mb={{ base: 4, md: 0 }}
                  >
                    <FormLabel as="legend">{singleQuiz.question}</FormLabel>
                    <RadioGroup>
                      <SimpleGrid minChildWidth="120px" mb={2}>
                        {singleQuiz.options.map((option, subkey) => (
                          <HStack key={subkey}>
                            <Field
                              {...field}
                              type="radio"
                              name={singleQuiz.id}
                              value={option}
                            />
                            <Text>{option}</Text>
                          </HStack>
                        ))}
                      </SimpleGrid>
                    </RadioGroup>
                  </FormControl>
                )}
              </Field>
            ))}
            <Center mt={10}>
              <Button type="submit">Submit</Button>
            </Center>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default QuizQuestions;
