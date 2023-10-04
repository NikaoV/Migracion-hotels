import { Button } from "@mui/material";

export const MainButton = ({ children, ...props }) => {
  return <Button  {...props}> {children}</Button>;
};
