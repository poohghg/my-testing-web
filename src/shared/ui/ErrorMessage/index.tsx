interface Props {
  children: string;
}

export default function ErrorMessage({ children }: Props) {
  return <div>{children}</div>;
}