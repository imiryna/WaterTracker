import { Dna } from 'react-loader-spinner';
import { Loading } from './loader.styled';

export const Loader = () => {
  return (
    <Loading>
      <Dna
        visible={true}
        height="200"
        width="300"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </Loading>
  );
};
