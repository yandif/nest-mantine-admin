import { Button, Container, Group, Text, Title } from '@mantine/core';
import { ErrorResponse, useRouteError } from 'react-router-dom';

import { NotFound } from './NotFound';
import classes from './RootErrorBoundary.module.css';

interface IError extends ErrorResponse, Error {}

export type ErrorBoundaryProps = {
  label?: string | number;
  title: string;
  description?: string;
};

export function ErrorBoundary({ label, title, description }: ErrorBoundaryProps) {
  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.label}>{label}</div>
        <Title className={classes.title}>{title}</Title>
        <Text size="lg" ta="center" className={classes.description}>
          {description}
        </Text>
        <Group justify="center">
          <Button variant="white" size="md" onClick={() => window.location.reload()}>
            刷新页面
          </Button>
        </Group>
      </Container>
    </div>
  );
}

export function RootErrorBoundary() {
  const error = useRouteError() as IError;

  if (error.status === 404) {
    return <NotFound key="404" />;
  }

  if (error.status === 500) {
    return (
      <ErrorBoundary
        key="500"
        label="500"
        title="服务器错误"
        description="服务器出现错误，请联系管理员!"
      />
    );
  }

  if (error.status === 503) {
    return (
      <ErrorBoundary
        key="503"
        label="503"
        title="服务器繁忙"
        description="请等待几分钟并刷新页面。"
      />
    );
  }

  return (
    <ErrorBoundary
      key="default"
      label={error.status}
      title={error.statusText || error.message}
      description="程序出现错误，请联系管理员!"
    />
  );
}
