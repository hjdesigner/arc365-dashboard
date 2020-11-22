import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, StandardButton } from 'components';

const Login = () => {
  const [firstInteraction] = useState(true);

  return (
    <>
      {firstInteraction ? (
        <Container>
          <LeftPainel>
            <Title>Arc 365 Dashboard</Title>
          </LeftPainel>
          <RightPainel>
            <Form>
              <SubTitle>Crie sua conta</SubTitle>
              <Input name="name" text="Nome" type="text" placeholder="digite seu nome" />
              <Input
                name="lastname"
                text="Sobrenome"
                type="text"
                placeholder="digite seu sobrenome"
              />
              <Input name="email" text="Email" type="email" placeholder="digite seu email" />
              <Input name="password" text="Senha" type="password" placeholder="" />
              <ActionForm>
                <Button>Criar conta</Button>
              </ActionForm>
            </Form>
          </RightPainel>
        </Container>
      ) : (
        `<h1>Login</h1>`
      )}
    </>
  );
};

const Container = styled.div`
  display: flex;
  height: 100%;
`;
const LeftPainel = styled.section`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.pink};
  display: flex;
  height: 100%;
  justify-content: center;
  width: 60%;
`;
const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;
const RightPainel = styled.section`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  padding: ${({ theme }) => theme.space.large};
  width: 40%;
`;
const SubTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  margin: ${({ theme }) => theme.space.large} 0;
  width: 100%;
`;
const Form = styled.form`
  width: 100%;
`;
const ActionForm = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Button = styled(StandardButton)`
  text-transform: uppercase;
`;

export default Login;
