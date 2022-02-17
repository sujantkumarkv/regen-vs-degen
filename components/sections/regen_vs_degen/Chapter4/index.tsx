/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Container, Text, Section1, Section2, Section3, Title, 
          CombatOfCards } from "./styles";
import { useTranslation } from "next-i18next";

const Chapter4 = ({ data }) => {
  const { t } = useTranslation(["regen_vs_degen"]);

  return (
    <Container>
      <Title>{t("page-regen_vs_degen-contents-gameplay")}</Title>

        <p>{t("page-regen_vs_degen-contents-gameplay-subheading")}</p>
        <p>{t("page-regen_vs_degen-contents-gameplay-text-one")}</p>
        <p>{t("page-regen_vs_degen-contents-gameplay-text-two")}</p>   
        <p>{t("page-regen_vs_degen-contents-gameplay-text-three")}</p>
        <p>{t("page-regen_vs_degen-contents-gameplay-text-four")}</p>
        <p>{t("page-regen_vs_degen-contents-gameplay-text-five")}</p>


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



        <Title>{t("page-regen_vs_degen-contents-combat")} </Title>
        <CombatOfCards src="https://res.cloudinary.com/dgms3ogr4/image/upload/fl_lossy,q_auto:best/v1644951551/anim_1_jd5cbm.gif" />

        <p>{t("page-regen_vs_degen-contents-combat-subheading-one")}</p>
        <p>{t("page-regen_vs_degen-contents-combat-subheading-one-text")}</p>

        <p>{t("page-regen_vs_degen-contents-combat-subheading-two")}</p>
        <p>{t("page-regen_vs_degen-contents-combat-subheading-two-text")}</p>
        
        <p>{t("page-regen_vs_degen-contents-combat-subheading-three")}</p>
        <p>{t("page-regen_vs_degen-contents-combat-subheading-three-text")}</p>


        <Title>{t("page-regen_vs_degen-contents-playingTx")} </Title>
        <p>{t("page-regen_vs_degen-contents-playingTx-text")}</p>

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
        

    </Container>
  );
};

export default Chapter4;
