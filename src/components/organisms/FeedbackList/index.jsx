import React, { useState, useEffect } from 'react'; 
import PropTypes from 'prop-types';

import Feedback from '@components/molecules/Feedback';
import Button from '@components/molecules/Button';

import { Container, ButtonWrapper } from './style';

const FeedbackList = ({ items, itemsPerPage }) => {
  const [page, setPage] = useState(1);
  const [slicedItems, setSlicedItems] = useState([]);
  const [buttonLoading, setButtonLoading] = useState([]);

  function handleLoadMore() {
    setButtonLoading(true);

    setTimeout(() => {
      setButtonLoading(false);
      setPage(page+1);
    }, 500);
  }

  useEffect(() => {
    setSlicedItems(items.slice(0, page*itemsPerPage));
  }, [page]);

  useEffect(() => {
    setPage(1);
  }, [items]);

  return (
    <Container>
      {slicedItems.map(item => (
        <Feedback
          key={item.id}
          text={item.message}
        />
      ))}

      {items.length > itemsPerPage*page && (
        <ButtonWrapper>
          <Button onClick={handleLoadMore} loading={buttonLoading} disabled={buttonLoading}>Load More</Button>
        </ButtonWrapper>
      )}
    </Container>
  );
};

FeedbackList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any),
  itemsPerPage: PropTypes.number,
};

FeedbackList.defaultProps = {
  items: [],
  itemsPerPage: 20,
};

export default FeedbackList;
