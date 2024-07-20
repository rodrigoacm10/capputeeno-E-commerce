import styled from "styled-components";
import { BackIcon } from "./icons/BackIcon";
import { InputHTMLAttributes } from "react";
import { useRouter } from "next/navigation";

const Button = styled.button`
  color: var(--secondary-text);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  background: transparent;
  border: none;
  cursor: pointer;
`;

// interface BackButtonProps extends InputHTMLAttributes<HTMLInputElement> {}

interface BackButtonProps {
  navigate: string;
}

export function BackButton({ navigate }: BackButtonProps) {
  const router = useRouter();
  const handleNavigate = () => {
    router.push(navigate);
  };

  return (
    <Button onClick={handleNavigate}>
      <BackIcon />
      Voltar
    </Button>
  );
}
