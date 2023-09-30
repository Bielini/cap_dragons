import * as React from "react";
import { Stack, Typography, Container, TextField, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import bean from "../camera/bean.png";
import { useContext, useState } from "react";
import { useForm, FormProvider } from 'react-hook-form';

const defaultValues = {
  email: '',
  password: ''
};

const schema = object({
  email: string().nullable().required(),
  password: string().nullable().required()
});

export const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [ isError, setIsError ] = useState(false);
  const form = useForm({
    defaultValues,
    resolver: yupResolver(schema)
  });
  const handleSubmit = async (values) => {
    try {
      const response = await fetch('URL_ВАШЕГО_АПИ', {
        method: 'POST', // Используйте метод POST для отправки данных
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'YOUR_ACCESS_TOKEN',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const user = await response.json();
        console.log(user);
        // login(user);
        navigate('/1');
      } else {
        setIsError(true);
      }
    } catch (error) {
      console.error('Error:', error);
      setIsError(true);
    }
  };

  return (
    <Container maxWidth="xs">
      <FormProvider {...form}>

        <Stack sx={{ alignItems: 'center' }}>

          <img src={bean} alt="bean" />
          <Typography variant="h3" color="primary" mb={3}>
            Rejestracja
          </Typography>

          <Typography variant="h6" >
            Dobrze Cię widzieć!
          </Typography>
        </Stack>

        <Stack
          noValidate
          spacing={2}
          mt={2}
          component="form"
          // onSubmit={}
          onSubmit={handleSubmit}
        >

          <TextField
            required
            type="email"
            name="email"
            label="Email"
            placeholder="Email"
          />

          <TextField
            required
            type="password"
            name="password"
            label="Hasło"
            placeholder="Hasło"
          />

          {/*{isError &&*/}
          {/*  <>*/}
          {/*    <Typography align="center" color="error">*/}
          {/*      Login details are not correct*/}
          {/*    </Typography>*/}
          {/*  </>*/}
          {/*}*/}

          <Button
            type="submit"
            variant="contained"
            size="large"
            color="secondary"
          >
            Zaloguj mnie!
          </Button>

        </Stack>
      </FormProvider>
    </Container>
  )
}