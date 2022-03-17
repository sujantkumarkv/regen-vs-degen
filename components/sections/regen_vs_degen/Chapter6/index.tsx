/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useTranslation } from "next-i18next";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Container, Section, Title, Text, GitcoinTablets, 
         Kudos, MoonshotBot, AnonsBot, Stewards, DYOR, RecruiterParty,
         OPSEC, Greenpill, FDD, Tipparty, Solarpunk, MoonshotCollective,
         QuadraticLands} from "./styles";

const threshold = [0.1];

const Chapter6 = ({ onChange }) => {
  const { t } = useTranslation(["regen_vs_degen"]);
  const [ref, inView, entry] = useInView({ threshold });

  useEffect(() => {
    if (inView) {
      onChange();
    }
  }, [inView]);

  return (

      <Container>

        <Section>
          <Kudos src="/images/regen_vs_degen/19-terms-kudos.svg" />
            <Text>
            <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-terms-one", {
                interpolation: { escapeValue: false },
              }),}}></p>
            <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-terms-one-text", {
                interpolation: { escapeValue: false },
              }),}}></p>
            </Text>   
        </Section>  

        <Section>
            <Text>
            <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-terms-two", {
                interpolation: { escapeValue: false },
              }),}}></p>
            <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-terms-two-text", {
                interpolation: { escapeValue: false },
              }),}}></p>
            </Text>  
          <MoonshotBot src="/images/regen_vs_degen/19-terms-moonshotbot.svg" /> 
        </Section>    
        
        <Section>
          <AnonsBot src="/images/regen_vs_degen/19-terms-anonsbot.svg" />
            <Text>
            <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-terms-three", {
                interpolation: { escapeValue: false },
              }),}}></p>
            <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-terms-three-text", {
                interpolation: { escapeValue: false },
              }),}}></p>
            </Text>   
        </Section>  
        
        <Section>
            <Text>
            <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-terms-four", {
                interpolation: { escapeValue: false },
              }),}}></p>
            <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-terms-four-text", {
                interpolation: { escapeValue: false },
              }),}}></p>
            </Text>  
          <Stewards src="/images/regen_vs_degen/19-terms-stewards.svg" /> 
        </Section>

        <Section>
          <DYOR src="/images/regen_vs_degen/19-terms-dyor.svg" />
            <Text>
            <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-terms-five", {
                interpolation: { escapeValue: false },
              }),}}></p>
            <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-terms-five-text", {
                interpolation: { escapeValue: false },
              }),}}></p>
            </Text>   
        </Section>  
        
        <Section>
            <Text>
            <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-terms-six", {
                interpolation: { escapeValue: false },
              }),}}></p>
            <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-terms-six-text", {
                interpolation: { escapeValue: false },
              }),}}></p>
            </Text>  
          <RecruiterParty src="/images/regen_vs_degen/19-terms-recruiter.svg" /> 
        </Section>

        <Section>
          <OPSEC src="/images/regen_vs_degen/19-terms-opsec.svg" />
            <Text>
            <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-terms-seven", {
                interpolation: { escapeValue: false },
              }),}}></p>
            <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-terms-seven-text", {
                interpolation: { escapeValue: false },
              }),}}></p>
            </Text>   
        </Section>  
        
        <Section>
            <Text>
            <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-terms-eight", {
                interpolation: { escapeValue: false },
              }),}}></p>
            <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-terms-eight-text", {
                interpolation: { escapeValue: false },
              }),}}></p>
            </Text>  
          <Greenpill src="/images/regen_vs_degen/19-terms-greenpill.svg" /> 
        </Section>

        <Section>
          <FDD src="/images/regen_vs_degen/19-terms-fdd.svg" /> 
            <Text>
            <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-terms-nine", {
                interpolation: { escapeValue: false },
              }),}}></p>
            <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-terms-nine-text", {
                interpolation: { escapeValue: false },
              }),}}></p>
            </Text>  
        </Section>

        <Section>
            <Text>
            <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-terms-ten", {
                interpolation: { escapeValue: false },
              }),}}></p>
            <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-terms-ten-text", {
                interpolation: { escapeValue: false },
              }),}}></p>
            </Text>   
            <Tipparty src="/images/regen_vs_degen/19-terms-tipparty.svg" />
        </Section>  
        
        <Section>
          <Solarpunk src="/images/regen_vs_degen/19-terms-solarpunk.svg" /> 
            <Text>
            <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-terms-eleven", {
                interpolation: { escapeValue: false },
              }),}}></p>
            <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-terms-eleven-text", {
                interpolation: { escapeValue: false },
              }),}}></p>
            </Text>  
        </Section> 
        
        <Section>
            <Text>
            <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-terms-twelve", {
                interpolation: { escapeValue: false },
              }),}}></p>
            <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-terms-twelve-text", {
                interpolation: { escapeValue: false },
              }),}}></p>
            </Text>  
          <MoonshotCollective src="/images/regen_vs_degen/19-terms-mc.svg" /> 
        </Section>

        <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-terms-thirteen", {
                interpolation: { escapeValue: false },
              }),}}></p>
        <p  dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-terms-thirteen-text", {
                interpolation: { escapeValue: false },
              }),}}></p>
        <QuadraticLands src="/images/regen_vs_degen/20-quadratic-lands.svg" />


        <div className="regen_vs_degen__gitcoin_tablets" ><GitcoinTablets src="/images/regen_vs_degen/gitcoin-tablets.svg" /></div>
      </Container>

  );
};

export default Chapter6;
