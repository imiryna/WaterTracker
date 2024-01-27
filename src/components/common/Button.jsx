import { Box } from './Box';
export const Button = ({ children, ...props }) => {
  return (
    <Box
      as="button"
      // mt={3}
      bg="button_color"
      color="light_text"
      border="normal"
      borderRadius="normal"
      px={3}
      py={2}
      {...props}
    >
      {children}
    </Box>
  );
};
