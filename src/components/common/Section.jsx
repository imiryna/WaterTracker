import { Box } from '.';
export const Section = ({ title, children }) => {
  return (
    <Box>
      <h2>{title}</h2>
      {children}
    </Box>
  );
};
