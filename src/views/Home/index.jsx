import React, { useEffect, useContext, useState } from 'react';
import { toast } from 'react-toastify';

import CollaboratorsService from '@api/services/collaborator';
import { getErrorMessageByRequest } from '@modules/errors';

import AppContext from '@context/appContext';
import { SET_COLLABORATORS } from '@context/consts';

import Loader from '@components/atoms/Loader';
import Page from '@components/templates/Page';
import List from '@components/organisms/List';

import {
  PageWrapper,
  LoaderWrapper,
  CollaboratorsWrapper,
} from './style';

const Home = () => {
  const { state, dispatch } = useContext(AppContext);
  const notifyError = (msg) => toast.error(msg);

  const [loading, setLoading] = useState(false);

  async function getCollaborators() {
    setLoading(true);

    try {
      const res = await CollaboratorsService.getCollaborators();
      const { data } = res;

      dispatch({ type: SET_COLLABORATORS, payload: data });
    } catch(err) {
      const errorMessage = getErrorMessageByRequest(err);
      notifyError(errorMessage);
    } finally {
      // for better loading experience
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }

  useEffect(() => {
    getCollaborators();
  }, []);

  return (
    <Page title="Home" description="Welcome to Feedback Portal!">
      <PageWrapper>
        {loading ? (
          <LoaderWrapper>
            <Loader size="large" />
          </LoaderWrapper>
        ) : (
          <CollaboratorsWrapper>
            <List items={state.collaborators} />
          </CollaboratorsWrapper>
        )}
      </PageWrapper>
    </Page>
  )
}

export default Home;