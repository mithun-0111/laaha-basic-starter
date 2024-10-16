import { FC } from 'react';

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Container: FC<Props> = ({ className, children }) => (
  <div className={`container ${className ? className : ''}`}>{children}</div>
);

export default Container;
