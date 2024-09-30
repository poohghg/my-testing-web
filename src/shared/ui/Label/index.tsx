import { ReactNode } from 'react';

interface LabelProps {
  htmlFor: string;
  children: ReactNode;
}


export default function Label({ children, htmlFor }: LabelProps) {
  return (
    <Label htmlFor={htmlFor}>
      {children}
    </Label>
  );
}