import { Root, Container, Body, Heading, Subheading, RegenVsDegenLogo, Arrow } from "./styles";

const Masthead = ({ title, mainTitle }) => {
  return (
    <Root>
      <Container>
        <Body>
          <Subheading>{title}</Subheading>
          <Heading className="regen_vs_degen-main-title" >{mainTitle}</Heading>

          <RegenVsDegenLogo src="/images/regen_vs_degen/1-regen-vs-degen-logo.svg" />
        </Body>

        <Arrow>
          <svg viewBox="0 0 22 14">
            <polyline
              fill="none"
              points="1,2 11,12 21,2"
              stroke="black"
              strokeMiterlimit="10"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </Arrow>
        
      </Container>
    </Root>
  );
};

export default Masthead;
