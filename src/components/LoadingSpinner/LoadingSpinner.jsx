import { Circles } from 'react-loader-spinner';
import { Container } from 'components/Container/Container';

export const LoadingSpinner = () => {
  return (
    <Container>
      <Circles
      height="80"
      width="80"
      color="rgb(52, 112, 255)"
      ariaLabel="circles-loading"
      wrapperClass="spinner"
      wrapperStyle={{display: 'flex', justifyContent: 'center', alignItems: "center", marginTop: '60px'}}
      visible={true}
    />
    </Container>
    
  );
};