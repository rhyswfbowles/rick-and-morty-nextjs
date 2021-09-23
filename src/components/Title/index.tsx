import React from 'react';
import { TitleH1 } from './index.styles';

interface ITitleProps {
  text: string;
}

const Title: React.FunctionComponent<ITitleProps> = ({
  text
}) => {
  return <TitleH1>{text}</TitleH1>;
};

export default Title;
