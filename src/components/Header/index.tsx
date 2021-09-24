import React from 'react';
import { HeaderDiv } from './index.styles';

interface IHeader {
  className?: any;
  children?: any;
  padding?: string;
}

const Header: React.FunctionComponent<IHeader> = ({
  children,
  className,
  padding
}) => {
  return <HeaderDiv className={className} padding={padding}>{children}</HeaderDiv>;
};

export default Header;
