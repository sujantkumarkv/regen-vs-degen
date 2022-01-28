import { useTranslation } from "next-i18next";
import * as React from 'react';
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Container, Text, Section, AstronautsBalloons } from "./styles";

const threshold = [0.5];

const Chapter3 = ({ onChange }) => {
  /*it was "common" before indicating to use translations from common.json which I deleted & 
    only primer.json is needed for us. */
  const { t } = useTranslation(["primer"]);
  const [ref, inView, entry] = useInView({ threshold });

  useEffect(() => {
    if (inView) {
      onChange();
    }
  }, [inView]);

  return (
    <Container ref={ref}>
      <Section>
        <AstronautsBalloons src="/images/primer/section-10-astronauts-balloons.svg" />
        <Text>
            <p>{t("page-primer-contents-token-text-three")}</p>
            <p>
                <ul>* {t("page-primer-contents-token-text-four")}</ul>
                <ul>* {t("page-primer-contents-token-text-five")}</ul>
                <ul>* {t("page-primer-contents-token-text-six")}</ul>
            </p>
                        
        </Text>
      </Section>
    </Container>
  );
};

export default Chapter3;
