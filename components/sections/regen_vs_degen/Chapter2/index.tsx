/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useTranslation } from "next-i18next";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Root, Container, Section, Title, Text, 
        GtcLogo, EthLogo, BtcLogo, 
        InvestorCard, InvestmentCard, InvestmentBondCard, TransactionCard, EpicCard} from "./styles";

const threshold = [0.1];

const Chapter2 = ({ onChange }) => {
  const { t } = useTranslation(["regen_vs_degen"]);
  const [ref, inView, entry] = useInView({ threshold });

  useEffect(() => {
    if (inView) {
      onChange();
    }
  }, [inView]);

  return (
    <Root ref={ref}>
      <Container>
        <Title>{t("page-regen_vs_degen-contents-cardtypes")}</Title>

        <Section>
          <GtcLogo src="/images/regen_vs_degen/5-gtc-logo.svg" />
            <Text>
              <p>{t("page-regen_vs_degen-contents-cardtypes-card-one")}</p>
              <p>{t("page-regen_vs_degen-contents-cardtypes-text-one")}</p>
            </Text> 
        </Section>
        
        <Section>
          <EthLogo src="/images/regen_vs_degen/5-eth-logo.svg" />
            <Text>
              <p>{t("page-regen_vs_degen-contents-cardtypes-card-two")}</p>
              <p>{t("page-regen_vs_degen-contents-cardtypes-text-two")}</p>
              </Text>

          <BtcLogo src="/images/regen_vs_degen/5-btc-logo.svg" />
        </Section>

        <Section>
          <InvestorCard src="/images/regen_vs_degen/6-gtc-investor-card.svg" />
            <Text>
              <p>{t("page-regen_vs_degen-contents-cardtypes-card-three")}</p>
              <p>{t("page-regen_vs_degen-contents-cardtypes-text-three")}</p>
              <p>{t("page-regen_vs_degen-contents-cardtypes-text-three-2")}</p>
            </Text> 
        </Section>
        
        <Section>
            <Text>
              <p>{t("page-regen_vs_degen-contents-cardtypes-card-four")}</p>
              <p>{t("page-regen_vs_degen-contents-cardtypes-text-four")}</p>
            </Text> 
            <InvestmentCard src="/images/regen_vs_degen/7-gtc-investment-card.svg" />
        </Section>
        
        <Section>
          <InvestmentBondCard src="/images/regen_vs_degen/8-gtc-bond-card.svg" />
            <Text>
              <p>{t("page-regen_vs_degen-contents-cardtypes-card-five")}</p>
              <p>{t("page-regen_vs_degen-contents-cardtypes-text-five")}</p>
            </Text> 
        </Section>
        
        <Section>
            <Text>
              <p>{t("page-regen_vs_degen-contents-cardtypes-card-six")}</p>
              <p>{t("page-regen_vs_degen-contents-cardtypes-text-six")}</p>
            </Text> 
            <TransactionCard src="/images/regen_vs_degen/9-gtc-transaction-card.svg" />
        </Section>
        
        <Section>
          <EpicCard src="/images/regen_vs_degen/10-epic-mc-card.svg" />
            <Text>
              <p>{t("page-regen_vs_degen-contents-cardtypes-card-seven")}</p>
              <p>{t("page-regen_vs_degen-contents-cardtypes-text-seven")}</p>
            </Text> 
        </Section>

      </Container>
    </Root>
  );
};

export default Chapter2;
