import styled from "styled-components";

export const StyledHeading_1 = styled.h1`
  font-family: var(--font-primary);
  font-weight: 700;
  font-size: 44px;
  line-height: 56px;
  color: var(--grey-1);
`;

export const StyledHeading_2 = styled.h2`
  font-family: var(--font-primary);
  font-weight: 600;
  font-size: 36px;
  line-height: 45px;
  color: var(--grey-1);
`;

export const StyledHeading_3_600 = styled.h3`
  font-family: var(--font-primary);
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  color: var(--grey-1);
`;

export const StyledHeading_3_500 = styled(StyledHeading_3_600)`
  font-weight: 500;
`;

export const StyledHeading_4_600 = styled.h4`
  font-family: var(--font-primary);
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
  color: var(--grey-1);
`;

export const StyledHeading_4_500 = styled(StyledHeading_4_600)`
  font-weight: 500;
`;

export const StyledHeading_5_600 = styled.h5`
  font-family: var(--font-primary);
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  color: var(--grey-1);
`;

export const StyledHeading_5_500 = styled(StyledHeading_5_600)`
  font-weight: 500;
`;

export const StyledHeading_6_600 = styled.h6`
  font-family: var(--font-primary);
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: var(--grey-1);
`;

export const StyledHeading_6_500 = styled(StyledHeading_6_600)`
  font-weight: 500;
`;

export const StyledHeading_7_600 = styled.h6`
  font-family: var(--font-primary);
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: var(--grey-1);
`;

export const StyledHeading_7_500 = styled(StyledHeading_7_600)`
  font-weight: 500;
`;

export const StyledBody_1_600 = styled.p`
  font-family: var(--font-secundary);
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  color: var(--grey-2);
`;

export const StyledBody_1_400 = styled(StyledBody_1_600)`
  font-weight: 400;
`;

export const StyledBody_2_500 = styled.p`
  font-family: var(--font-secundary);
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: var(--grey-2);
`;

export const StyledBody_2_400 = styled(StyledBody_2_500)`
  font-weight: 400;
`;

interface Iprops {
  width?: string;
}
export const StyledLabel = styled.label<Iprops>`
  font-family: var(--font-secundary);
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: var(--grey-2);

  display: flex;
  flex-direction: column;
  gap: 8px;
  width: ${(props) => (props.width ? props.width : "auto")};
`;

export const StyledSpanDetail = styled.span`
  background-color: var(--brand-4);
  border-radius: 4px;
  padding: 4px 8px;
  color: var(--brand-1);
`;

export const TextBody_2_500 = styled.p`
  font-family: var(--font-secundary);
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;
