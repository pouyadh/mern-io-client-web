import * as React from "react";
import LogoText from "../../components/Logo/LogoText";
import { Button, Container, Paper, Stack, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import validationSchema from "./validationSchema";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";
import Progress from "../../components/Progress/Progress";

import { useAuth, withNoUser } from "../../auth";
import { useToaster } from "../../containers/Toaster/Toaster";
import { delay } from "../../utils/delay";

const initialValues = {
  username: "reza",
  email: "reza@reza.com",
  password: "rezareza",
  cpassword: "rezareza",
};

const Signup = () => {
  const navigate = useNavigate();
  const toaster = useToaster();
  const auth = useAuth();

  const handleSubmit = async (values) => {
    const { username, email, password } = values;
    await delay(1000);
    const { error } = await auth.signup(username, email, password);
    if (error) {
      toaster.toast("error", error.message);
      return;
    }
    navigate("/");
  };
  return (
    <Container maxWidth="xs" sx={{ pt: "auto" }}>
      <Paper
        sx={{
          textAlign: "center",
          padding: "auto",
          p: 4,
          mt: 4,
        }}
        elevation={10}
      >
        <Stack direction="column" spacing={2}>
          <LogoText height="24px" />
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {({ submitForm, isSubmitting }) => (
              <Form>
                <Stack direction="column" spacing={2}>
                  <Typography variant="h5" alignSelf="start">
                    {isSubmitting && <Progress sx={{ height: "5px" }} />}
                    Register
                  </Typography>
                  <Field
                    component={Input.Username}
                    type="text"
                    name="username"
                    label="Username"
                  />

                  <Field
                    component={Input.Email}
                    type="email"
                    name="email"
                    label="Email"
                  />
                  <Field
                    component={Input.Password}
                    name="password"
                    label="Password"
                  />
                  <Field
                    component={Input.Password}
                    name="cpassword"
                    label="Confirm Password"
                  />

                  <Button
                    variant="contained"
                    disabled={isSubmitting}
                    onClick={submitForm}
                  >
                    Register
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
          <Button variant="text" onClick={() => navigate("/signin")}>
            Signin
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
};

export default withNoUser(Signup);
