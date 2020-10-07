import styled from 'styled-components'; 
import { Blue, Primary } from '@assets/styles/colors';
import { lighten } from 'polished';

export const Container = styled.div`
  position: relative;
  padding: 16px 164px;
  margin-bottom: 16px;
  text-align: center;
  background: ${lighten(0.85, Primary)};
`;

export const Text = styled.p``;

export const Actions = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
`;

export const LikesWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LikesCount = styled.span`
  display: block;
`;

export const LikeWrapper = styled.div`
  margin-left: 8px;

  .icon-wrapper span {
    color: ${({ active }) => active ? Blue : Primary}
  }
`;