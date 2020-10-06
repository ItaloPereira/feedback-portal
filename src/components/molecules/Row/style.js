import styled from 'styled-components'; 
import { lighten } from 'polished';
import { LabelMedium, LabelLarge, ParagraphSmall } from '@assets/styles/typography';
import { Primary } from '@assets/styles/colors';

export const Container = styled.div`
  padding: 10px 16px;
  box-shadow: 0 4px 8px 0 ${lighten(0.75, Primary)};
  border: 1px solid ${lighten(0.75, Primary)};
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  transition: .25s;

  &:hover {
    background: ${lighten(0.8, Primary)};
    box-shadow: 0 2px 4px 0 ${lighten(0.75, Primary)};
  }
`;

export const ContentWrapper = styled.div`
  margin-left: 16px;
`;

export const Title = styled.h3`
  ${LabelLarge};
  color: ${Primary};
`;

export const Text = styled.span`
  ${ParagraphSmall};
  display: block;
  color: ${lighten(0.5, Primary)};
`;

export const Strong = styled.span`
  ${LabelMedium};
  color: ${Primary};
`;