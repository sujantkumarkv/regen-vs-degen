/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useTranslation } from "next-i18next";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  Container,
  Section1,
  Section2,
  AstronautAndBull,
} from "./styles";

const threshold = [0.1];

const Introduction = ({ onChange }) => {
  const { t } = useTranslation(["regen_vs_degen"]);
  const [ref, inView, entry] = useInView({ threshold });

  useEffect(() => {
    if (inView) {
      onChange();
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <Container>
        <Section1>
          
          <div
            css={css`
              margin-bottom: 40px;
              @media (min-width: 1024px) {
                margin-bottom: 0;
              },
            `}>
            <h3 className="regen_vs_degen__heading">
              {t("page-regen_vs_degen-contents-intro-text-one")}
            </h3>
            <p>{t("page-regen_vs_degen-contents-intro-text-two")}</p>
            <p>{t("page-regen_vs_degen-contents-intro-text-three")}</p>
            <p>{t("page-regen_vs_degen-contents-intro-text-four")}</p>
          </div>
        </Section1>
        <Section2>
          <AstronautAndBull src="/images/regen_vs_degen/2-astronaut-and-bull.svg" />
        </Section2>
        
        
      </Container>
    </div>
  );
};

export default Introduction;
