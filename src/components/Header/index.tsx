import React from 'react';
import { HeaderDiv } from './index.styles';

interface IHeader {
  className?: any;
  children?: any;
}

const Header: React.FunctionComponent<IHeader> = ({
  children,
  className
}) => {
  return <HeaderDiv className={className}>{children}</HeaderDiv>;
};

export default Header;
