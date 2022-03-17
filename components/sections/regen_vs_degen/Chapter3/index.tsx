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
      <div className="regen_vs_degen__gitcoin_tablets" ><GitcoinTablets src="/images/regen_vs_degen/gitcoin-tablets.svg" /></div>
      <Title>{t("page-regen_vs_degen-contents-terminology")} </Title>
      <Section>
          <Text>
            <p style={{ paddingRight: 40}} dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-terminology-text-one", {
                interpolation: { escapeValue: false },
              }),}}></p>
            </Text>
          <SpendingCards src="https://res.cloudinary.com/dgms3ogr4/image/upload/fl_lossy,q_auto:best/v1645031531/anim_2_fvpt78.gif" />
      </Section>
          
          <p dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-terminology-text-two", {
                interpolation: { escapeValue: false },
              }),}}></p>
          <VerticalHorizontalCards src="/images/regen_vs_degen/12-vertical-horizontal-cards.svg" />
          <p dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-terminology-text-three", {
                interpolation: { escapeValue: false },
              }),}}></p>
          <p dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-terminology-text-four", {
                interpolation: { escapeValue: false },
              }),}}></p>
          <p dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-terminology-text-five", {
                interpolation: { escapeValue: false },
              }),}}></p>

    </Container>
  );
};

export default Chapter3;
