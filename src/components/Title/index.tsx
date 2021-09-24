import React from 'react';
import { TitleH1 } from './index.styles';

interface ITitleProps {
  text: string;
  alignDesktop?: string;
  alignMobile?: string;
  fontSizeEm?: string;
}

const Title: React.FunctionComponent<ITitleProps> = ({
  text,
  alignDesktop,
  alignMobile,
  fontSizeEm
}) => {
  return <TitleH1 alignDesktop={alignDesktop} alignMobile={alignMobile} fontSizeEm={fontSizeEm}>{text}</TitleH1>;
};

export default Title;
