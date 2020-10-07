import React, { useEffect, useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { useParams, useHistory } from 'react-router-dom';

import CollaboratorsService from '@api/services/collaborator';
import { getErrorMessageByRequest } from '@modules/errors';
import AppContext from '@context/appContext';
import { SET_MODAL_OPENED } from '@context/consts';

import Loader from '@components/atoms/Loader';
import Avatar from '@components/atoms/Avatar';
import Button from '@components/molecules/Button';
import FeedbackList from '@components/templates/FeedbackList';
import NewFeedbackModal from '@components/templates/Modals/NewFeedback';
import Page from '@components/templates/Page';

import {
  PageWrapper,
  LoaderWrapper,
  ProfileWrapper,
  AvatarWrapper,
  Name,
  Text,
  Strong,
  ActionsContainer,
  BackWrapper,
  BackText,
  ButtonWrapper,
} from './style';

const Detail = () => {
  const { dispatch } = useContext(AppContext);
  const notifyError = (msg) => toast.error(msg);
  const [infoLoading, setInfoLoading] = useState(false);
  const [feedbacksLoading, setFeedbacksLoading] = useState(false);
  const [collaborator, setCollaborator] = useState({});
  const [feedbacks, setFeedbacks] = useState([]);
  const { id } = useParams();
  const history = useHistory();

  function handleNewFeedback() {
    dispatch({ type: SET_MODAL_OPENED, component: NewFeedbackModal })
  }

  async function getCollaborator() {
    setInfoLoading(true);
    try {
      const res = await CollaboratorsService.getCollaborator(id);
      const { data } = res;

      setCollaborator(data);
    } catch(err) {
      const errorMessage = getErrorMessageByRequest(err);
      notifyError(errorMessage);
    } finally {
      // for better loading experience
      setTimeout(() => {
        setInfoLoading(false);
      }, 500);
    }
  }

  async function getCollaboratorFeedbacks() {
    setFeedbacksLoading(true);
    try {
      const res = await CollaboratorsService.getCollaboratorFeedbacks(id);
      const { data } = res;

      setFeedbacks(data);
    } catch(err) {
      const errorMessage = getErrorMessageByRequest(err);
      notifyError(errorMessage);
    } finally {
      // for better loading experience
      setTimeout(() => {
        setFeedbacksLoading(false);
      }, 500);
    }
  }

  useEffect(() => {
    async function fetchData() {
      await getCollaborator();
      await getCollaboratorFeedbacks();
    }

    fetchData();
  }, []);

  return (
    <Page title="Detail" description="Collaborator Details">
      <PageWrapper>
        {infoLoading ? (
          <LoaderWrapper>
            <Loader size="large" />
          </LoaderWrapper>
        ) : (
          <>
            <ActionsContainer>
              <BackWrapper onClick={() => history.push('/')} aria-hidden="true">
                <Button type="ghost" icon="arrow-left" shape="circle" />
                <BackText>Back</BackText>
              </BackWrapper>
              <ButtonWrapper>
                <Button onClick={handleNewFeedback}>New Feedback</Button>
              </ButtonWrapper>
            </ActionsContainer>
            <ProfileWrapper>
              <AvatarWrapper>
                <Avatar imageSrc={collaborator.avatar} size="big" />
              </AvatarWrapper>
              <Name>{collaborator.name}</Name>
              <Text>
                <Strong>{collaborator.role}</Strong> 
                {' at '}
                <Strong>{collaborator.company}</Strong>
              </Text>
            </ProfileWrapper>

            {feedbacksLoading ? (
              <LoaderWrapper>
                <Loader size="large" />
              </LoaderWrapper>
            ) : (
              <FeedbackList items={feedbacks} collaboratorId={id} />
            )}
          </>
        )}
      </PageWrapper>
    </Page>
  )
}

export default Detail;