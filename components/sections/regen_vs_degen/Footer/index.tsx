/** @jsx jsx */

import { jsx, css } from "@emotion/core";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-scroll";
import {
  Container,
  Section,
  FooterHeading,
  Icon,
  SocialIcons,
  GitcoinCommunity,
} from "./styles";
import { useTranslation } from "next-i18next";
import { FiAlignCenter } from "react-icons/fi";

const threshold = [0];

const Footer = ({ onChange, data }) => {
  const { t } = useTranslation(["regen_vs_degen"]);
  const [ref, inView, entry] = useInView({ threshold });

 

  return (
    <Container ref={ref}>
      <Section>
        <SocialIcons>
          <FooterHeading><p>{t("page-regen_vs_degen-contents-footer-text")}</p></FooterHeading>
            <ul className="social-icons">
              <li><a target={"_blank"} href="https://youtube.com/c/GitcoinMedia"><Icon src="/images/regen_vs_degen/icons/youtube.svg"></Icon></a></li>
              <li><a target={"_blank"} href="https://twitter.com/GitcoinDAO" ><Icon src="/images/regen_vs_degen/icons/twitter.svg"></Icon></a></li>
              <li><a target={"_blank"} href="https://github.com/gitcoinco"><Icon src="/images/regen_vs_degen/icons/github.svg"></Icon></a></li>
              <li><a target={"_blank"} href="https://discord.gg/gitcoin"><Icon src="/images/regen_vs_degen/icons/discord.svg"></Icon></a></li>
              <li><a target={"_blank"} href="https://form.typeform.com/to/ttNCMt8w?typeform-source=gov.gitcoin.co"><Icon src="/images/regen_vs_degen/icons/mail.svg"></Icon></a></li>
            </ul>        

            <a target={"_blank"} href="https://gitcoin.com">
              <GitcoinCommunity src="/images/regen_vs_degen/section-15-gitcoin-community.svg" />
            </a>
        </SocialIcons>
      </Section>
      </Container>
      );     
};

export default Footer;
