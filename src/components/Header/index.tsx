import React from 'react';
import { HeaderDiv } from './index.styles';

interface IHeader {
  className?: string;
  children?: React.FC | HTMLElement;
}

const Header: React.FunctionComponent<IHeader> = ({
  children,
  className,
}) => {
  return <HeaderDiv className={className}>{children}</HeaderDiv>;
};

export default Header;
