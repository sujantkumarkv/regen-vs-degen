import { css } from "@emotion/core";
import { useTranslation } from "next-i18next";
import * as React from 'react';
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Container, Title, Text,
          Section1, Section2,
          GitcoinTablets, CardsGame, CardLayout} from "./styles";

const threshold = [0.5];

const Chapter1 = ({ onChange }) => {
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
      <Title>{t("page-regen_vs_degen-contents-gamezone")}</Title>
      <Section1>
        <CardsGame src="/images/regen_vs_degen/3-cards-game.svg" />
      </Section1>

      <p style={{marginBottom: "10px"}} dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-gamezone-text-one", {
                interpolation: { escapeValue: false },
              }),}}></p>
      <p style={{marginBottom: "10px"}} dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-gamezone-text-two", {
                interpolation: { escapeValue: false },
              }),}}></p>
      <p style={{marginBottom: "10px"}} dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-gamezone-text-three", {
                interpolation: { escapeValue: false },
              }),}}></p>
      <p style={{marginBottom: "10px"}} dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-gamezone-text-four", {
                interpolation: { escapeValue: false },
              }),}}></p>
      <div className="regen_vs_degen__gitcoin_tablets" ><GitcoinTablets src="/images/regen_vs_degen/gitcoin-tablets.svg" /></div>
      
        <Title>{t("page-regen_vs_degen-contents-cardlayout")}</Title>
       <Section2>
          <CardLayout src="/images/regen_vs_degen/4-cardlayout.svg" />
          <Text>
            <p>{t("page-regen_vs_degen-contents-cardlayout-text-one")}</p>
            <p>{t("page-regen_vs_degen-contents-cardlayout-text-two")}</p>
            <p>{t("page-regen_vs_degen-contents-cardlayout-text-three")}</p>
            <p>{t("page-regen_vs_degen-contents-cardlayout-text-four")}</p>
            <p>{t("page-regen_vs_degen-contents-cardlayout-text-five")}</p>
            <p>{t("page-regen_vs_degen-contents-cardlayout-text-six")}</p>
          </Text>
       </Section2>

    </Container>
  );
};

export default Chapter1;
