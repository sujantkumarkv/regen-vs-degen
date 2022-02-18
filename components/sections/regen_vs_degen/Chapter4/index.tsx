/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Container, Text, Section, Title, 
        GitcoinTablets,
        CombatOfCards_one, CombatOfCards_two, CombatOfCards_three, CombatOfCards_four,
        FixedAbilitiesCard, ActivatedAbilitiesCard, PaidAbilitiesCard } from "./styles";
import { useTranslation } from "next-i18next";

const Chapter4 = ({ data }) => {
  const { t } = useTranslation(["regen_vs_degen"]);

  return (
    <Container>
      <GitcoinTablets src="/images/regen_vs_degen/gitcoin-tablets.svg" />
      <Title>{t("page-regen_vs_degen-contents-gameplay")}</Title>

        <p>{t("page-regen_vs_degen-contents-gameplay-subheading")}</p>
        <p>{t("page-regen_vs_degen-contents-gameplay-text-one")}</p>
        <p>{t("page-regen_vs_degen-contents-gameplay-text-two")}</p>   
        <p>{t("page-regen_vs_degen-contents-gameplay-text-three")}</p>
        <p>{t("page-regen_vs_degen-contents-gameplay-text-four")}</p>
        <p>{t("page-regen_vs_degen-contents-gameplay-text-five")}</p>

        <h3 className="regen_vs_degen__heading">
              {t("page-regen_vs_degen-contents-playingTx")}</h3>

        <p>{t("page-regen_vs_degen-contents-playingTx-text")}</p>

        <GitcoinTablets src="/images/regen_vs_degen/gitcoin-tablets.svg" />
        <Title>{t("page-regen_vs_degen-contents-yourturn")} </Title>
        <p>{t("page-regen_vs_degen-contents-yourturn-subheading-one")}</p>
        <p>{t("page-regen_vs_degen-contents-yourturn-subheading-one-text-one")}</p>
        <p>{t("page-regen_vs_degen-contents-yourturn-subheading-one-text-two")}</p>
        <p>{t("page-regen_vs_degen-contents-yourturn-subheading-one-text-three")}</p>
        <p>{t("page-regen_vs_degen-contents-yourturn-subheading-one-text-four")}</p>

        <p>{t("page-regen_vs_degen-contents-yourturn-subheading-two")}</p>
        <p>{t("page-regen_vs_degen-contents-yourturn-subheading-two-text-one")}</p>
        <p>{t("page-regen_vs_degen-contents-yourturn-subheading-two-text-two")}</p>
        <p>{t("page-regen_vs_degen-contents-yourturn-subheading-two-text-three")}</p>
        
        <p>{t("page-regen_vs_degen-contents-yourturn-subheading-three")}</p>
        <p>{t("page-regen_vs_degen-contents-yourturn-subheading-three-text-one")}</p>

        <p>{t("page-regen_vs_degen-contents-yourturn-subheading-four")}</p>
        <p>{t("page-regen_vs_degen-contents-yourturn-subheading-four-text-one")}</p>
        <p>{t("page-regen_vs_degen-contents-yourturn-subheading-four-text-two")}</p>


        <GitcoinTablets src="/images/regen_vs_degen/gitcoin-tablets.svg" />
        <Title>{t("page-regen_vs_degen-contents-combat")} </Title>
        <Section>
        <CombatOfCards_one src="https://res.cloudinary.com/dgms3ogr4/image/upload/fl_lossy,q_auto:best/v1645053251/anim_1_split_1_el3xpk.gif" />
        <CombatOfCards_two src="https://res.cloudinary.com/dgms3ogr4/image/upload/fl_lossy,q_auto:best/v1645054482/anim_2_split_2_gaz0x7.gif" />
        </Section>

        <Section>
        <CombatOfCards_three src="https://res.cloudinary.com/dgms3ogr4/image/upload/fl_lossy,q_auto:best/v1645056811/anim_1_split_3_kwjlri.gif" />
        <CombatOfCards_four src="https://res.cloudinary.com/dgms3ogr4/image/upload/fl_lossy,q_auto:best/v1645056524/anim_1_split_4_wm6pvb.gif" />
        </Section>
        

        <p>{t("page-regen_vs_degen-contents-combat-subheading-one")}</p>
        <p>{t("page-regen_vs_degen-contents-combat-subheading-one-text")}</p>

        <p>{t("page-regen_vs_degen-contents-combat-subheading-two")}</p>
        <p>{t("page-regen_vs_degen-contents-combat-subheading-two-text")}</p>
        
        <p>{t("page-regen_vs_degen-contents-combat-subheading-three")}</p>
        <p>{t("page-regen_vs_degen-contents-combat-subheading-three-text")}</p>

        <GitcoinTablets src="/images/regen_vs_degen/gitcoin-tablets.svg" />
        <Title>{t("page-regen_vs_degen-contents-abilities")} </Title>
        <Section>
          <FixedAbilitiesCard src="/images/regen_vs_degen/17-fixed-abilities-card.svg"/>
          <Text><p>{t("page-regen_vs_degen-contents-abilities-text-one")} </p></Text>
        </Section>
        <Section>
          <ActivatedAbilitiesCard src="/images/regen_vs_degen/18-activated-abilities-card.svg"/>
          <Text><p>{t("page-regen_vs_degen-contents-abilities-text-two")} </p></Text>
        </Section>
        <Section>
          <PaidAbilitiesCard src="/images/regen_vs_degen/19-paid-abilities-card.svg"/>
          <Text><p>{t("page-regen_vs_degen-contents-abilities-text-three")} </p></Text>
        </Section> 


        <GitcoinTablets src="/images/regen_vs_degen/gitcoin-tablets.svg" />
        <Title>{t("page-regen_vs_degen-contents-multiplayer")} </Title>
        <p>{t("page-regen_vs_degen-contents-multiplayer-subheading-one")}</p>
        <p>{t("page-regen_vs_degen-contents-multiplayer-subheading-one-text-one")}</p>
        <p>{t("page-regen_vs_degen-contents-multiplayer-subheading-one-text-two")}</p>
        
        <p>{t("page-regen_vs_degen-contents-multiplayer-subheading-two")}</p>        
        <p>{t("page-regen_vs_degen-contents-multiplayer-subheading-two-text-one")}</p> 
        <p>{t("page-regen_vs_degen-contents-multiplayer-subheading-two-text-two")}</p>
        <p>{t("page-regen_vs_degen-contents-multiplayer-subheading-two-text-three")}</p>
        <p>{t("page-regen_vs_degen-contents-multiplayer-subheading-two-text-four")}</p>
        <p>{t("page-regen_vs_degen-contents-multiplayer-subheading-two-text-five")}</p>
        <p>{t("page-regen_vs_degen-contents-multiplayer-subheading-two-text-six")}</p>
        <p>{t("page-regen_vs_degen-contents-multiplayer-subheading-two-text-seven")}</p>
        <p>{t("page-regen_vs_degen-contents-multiplayer-subheading-two-text-eight")}</p>
        <p>{t("page-regen_vs_degen-contents-multiplayer-subheading-two-text-nine")}</p>
        <p>{t("page-regen_vs_degen-contents-multiplayer-subheading-two-text-ten")}</p>
        <GitcoinTablets src="/images/regen_vs_degen/gitcoin-tablets.svg" />

    </Container>
  );
};

export default Chapter4;
