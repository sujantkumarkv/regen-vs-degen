import { useTranslation } from "next-i18next";
import * as React from 'react';
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Container, Text, Title, Section, GitcoinTablets, SpendingCards, VerticalHorizontalCards} from "./styles";

const threshold = [0.5];

const Chapter3 = ({ onChange }) => {
  /*it was "common" before indicating to use translations from common.json which I deleted & 
    only regen_vs_degen.json is needed for us. */
  const { t } = useTranslation(["regen_vs_degen"]);
  const [ref, inView, entry] = useInView({ threshold });

  useEffect(() => {
    if (inView) {
      onChange();
    }
  }, [inView]);

  return (
    <Container ref={ref}>
      <GitcoinTablets src="/images/regen_vs_degen/gitcoin-tablets.svg" />
      <Title>{t("page-regen_vs_degen-contents-terminology")} </Title>
      <Section>
          <Text><p style={{ paddingRight: 40}} >{t("page-regen_vs_degen-contents-terminology-text-one")}</p></Text>
          <SpendingCards src="https://res.cloudinary.com/dgms3ogr4/image/upload/fl_lossy,q_auto:best/v1645031531/anim_2_fvpt78.gif" />
      </Section>
          
          <p>{t("page-regen_vs_degen-contents-terminology-text-two")}</p>
          <VerticalHorizontalCards src="/images/regen_vs_degen/12-vertical-horizontal-cards.svg" />
          <p style={{ marginBottom: 40}} >{t("page-regen_vs_degen-contents-terminology-text-three")}</p>
          <p style={{ marginBottom: 40}}>{t("page-regen_vs_degen-contents-terminology-text-four")}</p>
          <p style={{ marginBottom: 40}}>{t("page-regen_vs_degen-contents-terminology-text-five")}</p>


    </Container>
  );
};

export default Chapter3;
