import { memo, FC, ReactNode } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
  isLoading?: boolean;
};

export const PrimaryButton: FC<Props> = memo(
  ({ children, onClick, isLoading, disabled }) => {
    return (
      <Button
        bg="teal.400"
        color="white"
        onClick={onClick}
        _hover={{ opacity: 0.8 }}
        disabled={disabled || isLoading}
        isLoading={isLoading}
      >
        {children}
      </Button>
    );
  }
);
