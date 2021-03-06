import React from 'react';
import { TextProps } from 'react-native';
import { MarginProps } from 'styled-system';
import { Typography } from '@motionhungry-ui/core';
import { useTheme } from '@motionhungry-ui/hooks';
import { HeadingSize } from '@motionhungry-ui/themes';

type HeadingProps = {
  size: HeadingSize;
  textAlign?: 'left' | 'center' | 'right';
  children: TextProps['children'];
} & MarginProps;

const Heading = ({
  size,
  children,
  textAlign = 'left',
  ...props
}: HeadingProps): JSX.Element => {
  const theme = useTheme();
  return (
    <Typography
      textAlign={textAlign}
      {...theme.components.Heading[size]}
      {...props}
    >
      {children}
    </Typography>
  );
};

Heading.displayName = 'Heading';

export { Heading };
