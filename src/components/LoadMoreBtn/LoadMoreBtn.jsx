import PropTypes from 'prop-types';
import { LoadMoreBtn } from './LoadMoreBtn.styled';

export const LoadMoreButton = ({ handleLoadMoreButton }) => {
  return (
    <LoadMoreBtn onClick={handleLoadMoreButton} id="load-more">
      Load More
    </LoadMoreBtn>
  );
};

LoadMoreButton.propTypes = {
  handleLoadMoreButton: PropTypes.func.isRequired,
};