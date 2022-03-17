/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Container, Text, Section, Title, 
        GitcoinTablets,
        GameplayRocket1, GameplayRocket2, GameplayRobot, GameplayThunder,
        YourturnBulb1, YourturnThunder, YourturnBulb2, YourturnBulb3,
        CombatOfCards_one, CombatOfCards_two, CombatOfCards_three, CombatOfCards_four,
        FixedAbilitiesCard, ActivatedAbilitiesCard, PaidAbilitiesCard } from "./styles";
import { useTranslation } from "next-i18next";

const Chapter4 = ({ data }) => {
  const { t } = useTranslation(["regen_vs_degen"]);

  return (
    <Container>
      <div className="regen_vs_degen__gitcoin_tablets" ><GitcoinTablets src="/images/regen_vs_degen/gitcoin-tablets.svg" /></div>
      
      <Section>
        <GameplayRocket1 src="/images/regen_vs_degen/13-gameplay-rocket-1.svg" />
        <Title>{t("page-regen_vs_degen-contents-gameplay")}</Title>
        <GameplayRocket2 src="/images/regen_vs_degen/13-gameplay-rocket-2.svg" />
      </Section>
      
      <p dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-gameplay-subheading", {
                interpolation: { escapeValue: false },
              }),}}></p>
      <li style={{marginBottom: "10px"}} dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-gameplay-text-one", {
                interpolation: { escapeValue: false },
              }),}} 
            />
      <li style={{marginBottom: "10px"}} dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-gameplay-text-two", {
                interpolation: { escapeValue: false },
              }),}} 
            />
      <li style={{marginBottom: "10px"}} dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-gameplay-text-three", {
                interpolation: { escapeValue: false },
              }),}} 
            />
      <li style={{marginBottom: "10px"}} dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-gameplay-text-four", {
                interpolation: { escapeValue: false },
              }),}} 
            />
      <li style={{marginBottom: "10px"}} dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-gameplay-text-five", {
                interpolation: { escapeValue: false },
              }),}} 
            />

        <div className="regen_vs_degen__gameplay_gameplayrobot" ><GameplayRobot src="/images/regen_vs_degen/13-gameplay-robot.svg" /></div>

        <p>{t("page-regen_vs_degen-contents-gameplay-text-six")}</p>
        <p>{t("page-regen_vs_degen-contents-gameplay-text-seven")}</p>
        <p>{t("page-regen_vs_degen-contents-gameplay-text-eight")}</p>
        <p>{t("page-regen_vs_degen-contents-gameplay-text-nine")}</p>

        <Section>
        <GameplayRocket1 src="/images/regen_vs_degen/13-gameplay-rocket-1.svg" />
        <GameplayThunder src="/images/regen_vs_degen/13-gameplay-thunder.svg" />
        <GameplayRocket2 src="/images/regen_vs_degen/13-gameplay-rocket-2.svg" />
      </Section>


        <h3 className="regen_vs_degen__heading">
              {t("page-regen_vs_degen-contents-playingTx")}</h3>

        <p>{t("page-regen_vs_degen-contents-playingTx-text")}</p>

        <div className="regen_vs_degen__gitcoin_tablets" ><GitcoinTablets src="/images/regen_vs_degen/gitcoin-tablets.svg" /></div>

        <Title>{t("page-regen_vs_degen-contents-yourturn")} </Title>
        <Section style={{width: "720px"}} > 
        <YourturnBulb1 src="/images/regen_vs_degen/14-yourturn-bulb1.svg" />
          <Text>
          <p dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-yourturn-subheading-one", {
                interpolation: { escapeValue: false },
              }),}}></p>
          <li style={{marginBottom: "10px"}} dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-yourturn-subheading-one-text-one", {
                interpolation: { escapeValue: false },
              }),}} 
            />
          <li style={{marginBottom: "10px"}} dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-yourturn-subheading-one-text-two", {
                interpolation: { escapeValue: false },
              }),}} 
            />
          <li style={{marginBottom: "10px"}} dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-yourturn-subheading-one-text-three", {
                interpolation: { escapeValue: false },
              }),}} 
            />
          <li style={{marginBottom: "10px"}} dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-yourturn-subheading-one-text-four", {
                interpolation: { escapeValue: false },
              }),}} 
            />
          </Text>
        </Section>

        <Section style={{width: "720px"}}>
          <YourturnThunder src="/images/regen_vs_degen/14-yourturn-thunder.svg" />
          <Text>
          <p dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-yourturn-subheading-two", {
                interpolation: { escapeValue: false },
              }),}}></p>
          <li style={{marginBottom: "10px"}} dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-yourturn-subheading-two-text-one", {
                interpolation: { escapeValue: false },
              }),}} 
            />
          <li style={{marginBottom: "10px"}} dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-yourturn-subheading-two-text-two", {
              interpolation: { escapeValue: false },
            }),}} 
          />
          </Text>
        </Section>

        <Section style={{width: "720px"}}>
          <YourturnBulb2 src="/images/regen_vs_degen/14-yourturn-bulb2.svg" />
          <Text>
          <p dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-yourturn-subheading-three", {
                interpolation: { escapeValue: false },
              }),}}></p>
          <li style={{marginBottom: "10px"}} dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-yourturn-subheading-three-text-one", {
                interpolation: { escapeValue: false },
              }),}} 
            />
          </Text>
        </Section>
        
        <Section style={{width: "720px"}}>
          <YourturnBulb3 src="/images/regen_vs_degen/14-yourturn-bulb3.svg" />
          <Text>
          <p dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-yourturn-subheading-four", {
                interpolation: { escapeValue: false },
              }),}}></p>
          <li style={{marginBottom: "10px"}} dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-yourturn-subheading-four-text-one", {
                interpolation: { escapeValue: false },
              }),}} 
            />
          <li style={{marginBottom: "10px"}} dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-yourturn-subheading-four-text-two", {
                interpolation: { escapeValue: false },
              }),}} 
            />
          </Text>
        </Section>


        <div className="regen_vs_degen__gitcoin_tablets" ><GitcoinTablets src="/images/regen_vs_degen/gitcoin-tablets.svg" /></div>
        <Title>{t("page-regen_vs_degen-contents-combat")} </Title>
        <Section>
        <CombatOfCards_one src="https://res.cloudinary.com/dgms3ogr4/image/upload/fl_lossy,q_auto:best/v1645379720/split1_650px_mcwygf.gif" />
        <CombatOfCards_two src="https://res.cloudinary.com/dgms3ogr4/image/upload/fl_lossy,q_auto:best/v1645378870/split2_650px_g0kzwj.gif" />
        </Section>

        <Section>
        <CombatOfCards_three src="https://res.cloudinary.com/dgms3ogr4/image/upload/fl_lossy,q_auto:best/v1645380764/split3_650px_rufvmk.gif" />
        <CombatOfCards_four src="https://res.cloudinary.com/dgms3ogr4/image/upload/fl_lossy,q_auto:best/v1645380505/split4_650px_m3nng8.gif" />
        </Section>
        
        <p dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-combat-subheading-one", {
                interpolation: { escapeValue: false },
              }),}}></p>
        <p dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-combat-subheading-one-text", {
                interpolation: { escapeValue: false },
              }),}}></p>

        <p dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-combat-subheading-two", {
                interpolation: { escapeValue: false },
              }),}}></p>
        <p dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-combat-subheading-two-text", {
                interpolation: { escapeValue: false },
              }),}}></p>
        
        <p dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-combat-subheading-three", {
                interpolation: { escapeValue: false },
              }),}}></p>
        <p dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-combat-subheading-three-text", {
                interpolation: { escapeValue: false },
              }),}}></p>

        <div className="regen_vs_degen__gitcoin_tablets" ><GitcoinTablets src="/images/regen_vs_degen/gitcoin-tablets.svg" /></div>
        <Title>{t("page-regen_vs_degen-contents-abilities")} </Title>
        <Section>
          <FixedAbilitiesCard src="/images/regen_vs_degen/16-fixed-abilities-card.svg"/>
          <Text>
          <p dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-abilities-text-one", {
                interpolation: { escapeValue: false },
              }),}}></p>
          </Text>
        </Section>
        <Section>
          <ActivatedAbilitiesCard src="/images/regen_vs_degen/16-activated-abilities-card.svg"/>
          <Text>
          <p dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-abilities-text-two", {
                interpolation: { escapeValue: false },
              }),}}></p>
          </Text>
        </Section>
        <Section>
          <PaidAbilitiesCard src="/images/regen_vs_degen/16-paid-abilities-card.svg"/>
          <Text>
          <p dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-abilities-text-three", {
                interpolation: { escapeValue: false },
              }),}}></p>
          </Text>
        </Section> 


        <div className="regen_vs_degen__gitcoin_tablets" ><GitcoinTablets src="/images/regen_vs_degen/gitcoin-tablets.svg" /></div>
        <Title>{t("page-regen_vs_degen-contents-multiplayer")} </Title>
        <p dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-multiplayer-subheading-one", {
                interpolation: { escapeValue: false },
              }),}} />
        <li dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-multiplayer-subheading-one-text-one", {
                interpolation: { escapeValue: false },
              }),}} />
        <li dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-multiplayer-subheading-one-text-two", {
                interpolation: { escapeValue: false },
              }),}} />


        <p dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-multiplayer-subheading-two", {
                interpolation: { escapeValue: false },
              }),}}></p>
        <li dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-multiplayer-subheading-two-text-one", {
                interpolation: { escapeValue: false },
              }),}} />
        <li dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-multiplayer-subheading-two-text-two", {
                interpolation: { escapeValue: false },
              }),}} />
        <li dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-multiplayer-subheading-two-text-threee", {
                interpolation: { escapeValue: false },
              }),}} />
        <li dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-multiplayer-subheading-two-text-four", {
                interpolation: { escapeValue: false },
              }),}} />
        <p dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-multiplayer-subheading-two-text-five", {
                interpolation: { escapeValue: false },
              }),}}></p>
        <p dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-multiplayer-subheading-two-text-six", {
                interpolation: { escapeValue: false },
              }),}}></p>
        <p dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-multiplayer-subheading-two-text-seven", {
                interpolation: { escapeValue: false },
              }),}}></p>
        <p dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-multiplayer-subheading-two-text-eight", {
                interpolation: { escapeValue: false },
              }),}}></p>
        <p dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-multiplayer-subheading-two-text-nine", {
                interpolation: { escapeValue: false },
              }),}}></p>
        <li dangerouslySetInnerHTML={{__html: t("page-regen_vs_degen-contents-multiplayer-subheading-two-text-ten", {
                interpolation: { escapeValue: false },
              }),}} />
              
        <div className="regen_vs_degen__gitcoin_tablets" ><GitcoinTablets src="/images/regen_vs_degen/gitcoin-tablets.svg" /></div>
    </Container>
  );
};

export default Chapter4;
