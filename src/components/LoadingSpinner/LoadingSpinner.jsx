import { Circles } from 'react-loader-spinner';
import { Container } from 'components/Container/Container';

export const LoadingSpinner = () => {
  return (
    <Container>
      <Circles
      height="60"
      width="60"
      color="rgb(52, 112, 255)"
      ariaLabel="circles-loading"
      wrapperClass="spinner"
      wrapperStyle={{display: 'flex', justifyContent: 'center', alignItems: "center", marginTop: '60px'}}
      visible={true}
    />
    </Container>
    
  );
};