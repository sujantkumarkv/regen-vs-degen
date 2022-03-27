/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useTranslation } from "next-i18next";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Container, Section, Title, Text, GitcoinTablets, 
          GraphicImage,
         Attack, Tendies, ImpermanentLoss, FUD, PaperHands, RugPull, MtGox, 
         BruteforceAttack, BuyTheDip, SybilAttack, Bagholder, Byzantine, Moloch } from "./styles";

const threshold = [0.1];

const Chapter5 = ({ onChange }) => {
  const { t } = useTranslation(["regen_vs_degen"]);
  const [ref, inView, entry] = useInView({ threshold });

  useEffect(() => {
    if (inView) {
      onChange();
    }
  }, [inView]);

  return (

      <Container>
        
        <Title>{t("page-regen_vs_degen-contents-learn")}</Title>

        <Section>
          <GraphicImage src="/images/regen_vs_degen/18-learn-attack.svg" />
            <Text>
            <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-learn-one", {
                interpolation: { escapeValue: false },
              }),}}></p>
            <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-learn-one-text-one", {
                interpolation: { escapeValue: false },
              }),}}></p>
            </Text>   
        </Section>  

        <Section>
            <Text>
            <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-learn-two", {
                interpolation: { escapeValue: false },
              }),}}></p>
            <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-learn-two-text-one", {
                interpolation: { escapeValue: false },
              }),}}></p>
            </Text>  
          <GraphicImage src="/images/regen_vs_degen/18-learn-chicken-tendies.svg" /> 
        </Section>    
        
        <Section>
          <GraphicImage src="/images/regen_vs_degen/18-learn-impermanent-loss.svg" />
            <Text>
            <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-learn-three", {
                interpolation: { escapeValue: false },
              }),}}></p>
            <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-learn-three-text-one", {
                interpolation: { escapeValue: false },
              }),}}></p>
            </Text>   
        </Section>  
        
        <Section>
            <Text>
            <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-learn-four", {
                interpolation: { escapeValue: false },
              }),}}></p>
            <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-learn-four-text-one", {
                interpolation: { escapeValue: false },
              }),}}></p>
            </Text>  
          <GraphicImage src="/images/regen_vs_degen/18-learn-fud.svg" /> 
        </Section> 

        <Section>
          <GraphicImage src="/images/regen_vs_degen/18-learn-paper-hands.svg" />
            <Text>
            <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-learn-five", {
                interpolation: { escapeValue: false },
              }),}}></p>
            <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-learn-five-text-one", {
                interpolation: { escapeValue: false },
              }),}}></p>
            </Text>   
        </Section>  
        
        <Section>
            <Text>
            <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-learn-six", {
                interpolation: { escapeValue: false },
              }),}}></p>
            <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-learn-six-text-one", {
                interpolation: { escapeValue: false },
              }),}}></p>
            </Text>  
          <GraphicImage src="/images/regen_vs_degen/18-learn-rugpull.svg" /> 
        </Section>   


        <Section>
          <GraphicImage src="/images/regen_vs_degen/18-learn-mtgox.svg" />
            <Text>
            <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-learn-seven", {
                interpolation: { escapeValue: false },
              }),}}></p>
            <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-learn-seven-text-one", {
                interpolation: { escapeValue: false },
              }),}}></p>
            </Text>   
        </Section>  
        
        <Section>
            <Text>
            <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-learn-eight", {
                interpolation: { escapeValue: false },
              }),}}></p>
            <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-learn-eight-text-one", {
                interpolation: { escapeValue: false },
              }),}}></p>
            </Text>  
          <GraphicImage src="/images/regen_vs_degen/18-learn-brute-force-attack.svg" /> 
        </Section>

        <Section>
          <GraphicImage src="/images/regen_vs_degen/18-learn-buythedip.svg" /> 
            <Text>
            <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-learn-nine", {
                interpolation: { escapeValue: false },
              }),}}></p>
            <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-learn-nine-text-one", {
                interpolation: { escapeValue: false },
              }),}}></p>
            </Text>  
        </Section>

        <Section>
            <Text>
            <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-learn-ten", {
                interpolation: { escapeValue: false },
              }),}}></p>
            <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-learn-ten-text-one", {
                interpolation: { escapeValue: false },
              }),}}></p>
            </Text>   
            <GraphicImage src="/images/regen_vs_degen/18-learn-sybil-attack.svg" />
        </Section>  
        
        <Section>
          <GraphicImage src="/images/regen_vs_degen/18-learn-bagholder.svg" /> 
            <Text>
            <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-learn-eleven", {
                interpolation: { escapeValue: false },
              }),}}></p>
            <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-learn-eleven-text-one", {
                interpolation: { escapeValue: false },
              }),}}></p>
            </Text>  
        </Section> 
        
        <Section>
            <Text>
            <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-learn-twelve", {
                interpolation: { escapeValue: false },
              }),}}></p>
            <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-learn-twelve-text-one", {
                interpolation: { escapeValue: false },
              }),}}></p>
            </Text>  
          <GraphicImage src="/images/regen_vs_degen/18-learn-byzantine.svg" /> 
        </Section>

        <Section>
          <GraphicImage src="/images/regen_vs_degen/18-learn-moloch.svg" />
            <Text>
            <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-learn-thirteen", {
                interpolation: { escapeValue: false },
              }),}}></p>
            <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-learn-thirteen-text-one", {
                interpolation: { escapeValue: false },
              }),}}></p>
            </Text>   
        </Section>  
        <div className="regen_vs_degen__gitcoin_tablets" ><GitcoinTablets src="/images/regen_vs_degen/gitcoin-tablets.svg" /></div>
      </Container>

  );
};

export default Chapter5;
