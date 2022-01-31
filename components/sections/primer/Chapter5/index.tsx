/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

import {
  Container,
  Section,
  Heading,
  Button,
  Title,
  List,
  Header,
  Item,
  Icon,
  Rocket,
  SocialIcons,
  GitcoinCommunity,
} from "./styles";
import { useTranslation } from "next-i18next";
import { FiAlignCenter } from "react-icons/fi";

const threshold = [0];

const Chapter5 = ({ onChange, data }) => {
  const { t } = useTranslation(["primer"]);
  const [ref, inView, entry] = useInView({ threshold });

  useEffect(() => {
    if (inView) {
      onChange();
    }
  }, [inView]);

  return (
    <Container ref={ref}>
      <Title>{t("page-primer-contents-involved-h2")}</Title>
      <Section>
        <div
          css={css`
            @media (min-width: 1024px) {
              max-width: 330px;
              margin-right: 80px;
            }
          `}>
          <p
            dangerouslySetInnerHTML={{
              __html: t("page-primer-contents-involved-text-one", {
                interpolation: { escapeValue: false },

              }),
            }}
          />
        </div>
        <Rocket src="https://res.cloudinary.com/dgms3ogr4/image/upload/fl_lossy,q_auto:best/v1643391458/rocket_less_compression_nyygsj.gif" />
      </Section>

      <Section>
        <List>

          <Item>
            <p style={{ marginBottom: 57 }}>{t("page-primer-contents-involved-build")}</p>
            <Link href="" passHref>
              <Button target="_blank" style={{ marginBottom: 20 }}>
                {t("page-primer-contents-involved-build-btn")}
              </Button>
            </Link>
          </Item>

          <Item>
            <p style={{ marginBottom: 57 }}>{t("page-primer-contents-involved-discord")}</p>
            <Link href="" passHref>
              <Button target="_blank" style={{ marginBottom: 20 }}>{t("page-primer-contents-involved-discord-btn")}
              </Button>
            </Link>
          </Item>

          <Item>
            <p style={{ marginBottom: 0 }}>{t("page-primer-contents-involved-contribute")}</p>
            <Link href="" passHref>
              <Button target="_blank" style={{ marginBottom: 20 }}>{t("page-primer-contents-involved-contribute-btn")}
              </Button>
            </Link>
          </Item>

          <Item>
            <p style={{ marginBottom: 27 }}>{t("page-primer-contents-involved-grants")}</p>
            <Link href="" passHref>
              <Button target="_blank" style={{ marginBottom: 20 }}>{t("page-primer-contents-involved-grants-btn")}
              </Button>
            </Link>
          </Item> 

        </List>
      </Section>

      <Section>
        <SocialIcons>
          <p>{t("page-primer-contents-involved-text-two")} </p>
            <ul className="social-icons">
              <li><a target={"_blank"} href="https://youtube.com"><Icon src="/images/primer/icons/youtube.svg"></Icon></a></li>
              <li><a target={"_blank"} href="" ><Icon src="/images/primer/icons/twitter.svg"></Icon></a></li>
              <li><a target={"_blank"} href=""><Icon src="/images/primer/icons/github.svg"></Icon></a></li>
              <li><a target={"_blank"} href=""><Icon src="/images/primer/icons/mail.svg"></Icon></a></li>
              <li><a target={"_blank"} href=""><Icon src="/images/primer/icons/discord.svg"></Icon></a></li>
            </ul>        

            <GitcoinCommunity src="/images/primer/section-15-gitcoin-community.svg"/>
        </SocialIcons>
        
      </Section>
      

      
    </Container>
  );
};

export default Chapter5;
