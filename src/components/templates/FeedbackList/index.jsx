import React, { useState, useEffect } from 'react'; 
import PropTypes from 'prop-types';

import useLocalStorage from '@utils/storage';

import Feedback from '@components/organisms/Feedback';
import Button from '@components/molecules/Button';

import { Container, ButtonWrapper } from './style';

const FeedbackList = ({ items, itemsPerPage, collaboratorId }) => {
  const [page, setPage] = useState(1);
  const [slicedItems, setSlicedItems] = useState([]);
  const [buttonLoading, setButtonLoading] = useState([]);
  const [storageLikes, setStorageLikes] = useLocalStorage('likes', []);

  function saveLikeOnStorage(feedbackId) {
    const found = storageLikes.find(sl => sl.feedbackId === feedbackId && sl.collaboratorId === collaboratorId);
    if (found) {
      const newStorageLikes = storageLikes.filter(sl => {
        return sl.feedbackId !== feedbackId || sl.collaboratorId !== collaboratorId;
      });
      setStorageLikes(newStorageLikes);
    } else {
      const newItem = [{ collaboratorId, feedbackId }];
      const newStorageLikes = [...storageLikes, ...newItem];
      setStorageLikes(newStorageLikes);
    }
  }

  function verifyLikeActive(feedbackId) {
    if (!storageLikes.length) return false;
    const found = storageLikes.find(sl => sl.collaboratorId === collaboratorId && sl.feedbackId === feedbackId);
    return found;
  }

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
          like={item.like}
          collaboratorId={collaboratorId}
          feedbackId={item.id}
          saveLikeOnStorage={() => saveLikeOnStorage(item.id)}
          verifyLikeActive={() => verifyLikeActive(item.id)}
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
  collaboratorId: PropTypes.string.isRequired,
};

FeedbackList.defaultProps = {
  items: [],
  itemsPerPage: 20,
};

export default FeedbackList;
