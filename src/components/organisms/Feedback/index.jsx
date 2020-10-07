import React, { useState } from 'react'; 
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import CollaboratorsService from '@api/services/collaborator';
import { getErrorMessageByRequest } from '@modules/errors';

import Button from '@components/molecules/Button';

import {
  Container,
  Text,
  Actions,
  LikesWrapper,
  LikesCount,
  LikeWrapper,
} from './style';

const Feedback = ({ text, like, collaboratorId, feedbackId, saveLikeOnStorage, verifyLikeActive }) => {
  const notifyError = (msg) => toast.error(msg);
  const [loading, setLoading] = useState(false);
  const [likesCount, setLikesCount] = useState(like);

  async function handleLike() {
    setLoading(true);

    const isLiked = verifyLikeActive();
    const newLikesCount = isLiked ? likesCount - 1 : likesCount + 1

    try {
      const res = await CollaboratorsService.like(collaboratorId, feedbackId, { like: newLikesCount });
      const { data } = res;
      setLikesCount(data.like);
      saveLikeOnStorage();
    } catch(err) {
      const errorMessage = getErrorMessageByRequest(err);
      notifyError(errorMessage);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <Text>
        &quot;
        {text}
        &quot;
      </Text>
      <Actions>
        <LikesWrapper>
          <LikesCount>{likesCount}</LikesCount>
          <LikeWrapper active={verifyLikeActive()}>
            <Button
              type="ghost"
              icon="thumbs-up"
              shape="circle"
              loading={loading}
              disabled={loading}
              onClick={handleLike}
            />
          </LikeWrapper>
        </LikesWrapper>
        <Button type="ghost" icon="trash-2" shape="circle" />
      </Actions>
    </Container>
  );
};

Feedback.propTypes = {
  text: PropTypes.string.isRequired,
  collaboratorId: PropTypes.string.isRequired,
  feedbackId: PropTypes.string.isRequired,
  like: PropTypes.number.isRequired,
  saveLikeOnStorage: PropTypes.func.isRequired,
  verifyLikeActive: PropTypes.func.isRequired,
};

Feedback.defaultProps = {
};

export default Feedback;
