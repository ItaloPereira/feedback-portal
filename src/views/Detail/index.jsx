import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

import CollaboratorsService from '@api/services/collaborator';
import { getErrorMessageByRequest } from '@modules/errors';

import Loader from '@components/atoms/Loader';
import Avatar from '@components/atoms/Avatar';
import FeedbackList from '@components/templates/FeedbackList';
import Page from '@components/templates/Page';

import {
  PageWrapper,
  LoaderWrapper,
  ProfileWrapper,
  AvatarWrapper,
  Name,
  Text,
  Strong,
} from './style';

const Detail = () => {
  const notifyError = (msg) => toast.error(msg);
  const [infoLoading, setInfoLoading] = useState(false);
  const [feedbacksLoading, setFeedbacksLoading] = useState(false);
  const [collaborator, setCollaborator] = useState({});
  const [feedbacks, setFeedbacks] = useState([]);
  const { id } = useParams();

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