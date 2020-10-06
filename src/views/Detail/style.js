import styled from 'styled-components';
import { lighten } from 'polished';
import { HeadingLarge, LabelLarge } from '@assets/styles/typography';
import { Primary } from '@assets/styles/colors';

export const PageWrapper = styled.div`
  max-width: 1080px;
  margin: 40px auto 64px;
`;

export const LoaderWrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileWrapper = styled.div`
  margin-bottom: 32px
`;

export const AvatarWrapper = styled.div`
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
`;

export const Name = styled.h2`
  ${HeadingLarge};
  margin-bottom: 8px;
  text-align: center;
`;

export const Text = styled.span`
  display: block;
  color: ${lighten(0.5, Primary)};
  text-align: center;
`;

export const Strong = styled.span`
  ${LabelLarge};
  color: ${Primary};
  text-align: center;
`;