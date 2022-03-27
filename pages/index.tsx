import { useState } from "react";
import { Box } from "theme-ui";
import { Element } from "react-scroll";
import PageLayout from "components/layouts/regen_vs_degen";
import { HeadProps } from "components/primitives/head";
import Masthead from "components/sections/regen_vs_degen/Masthead";
import Introduction from "components/sections/regen_vs_degen/Introduction";
import Chapter1 from "components/sections/regen_vs_degen/Chapter1";
import Chapter2 from "components/sections/regen_vs_degen/Chapter2";
import Chapter3 from "components/sections/regen_vs_degen/Chapter3";
import Chapter4 from "components/sections/regen_vs_degen/Chapter4";
import Chapter5 from "components/sections/regen_vs_degen/Chapter5";
import Chapter6 from "components/sections/regen_vs_degen/Chapter6";
import Chapter7 from "components/sections/regen_vs_degen/Chapter7";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const regen_vs_degen = ({ data }) => {
  const { t } = useTranslation(["regen_vs_degen"]);
  const { locale } = useRouter();
  const [section, setActiveSection] = useState("introduction");
  const onChange = (section) => {
    setActiveSection(section);
  };

  const headProps: HeadProps = {
    meta: {
      title: t("page-regen_vs_degen-meta-title"),
      description: t("page-primer-meta-description"),
      url: "https://gitcoin.co",
      siteName: "Regen VS Degen Card game",
      image:
        "",
      twitterUsername: "@GitcoinDAO",
    },
  };

  return (
    <PageLayout
      navProps={{ background: "translucent", isInmersive: true }}
      headProps={headProps}
    >
      <Box className="regen_vs_degen" sx={{}}>
        <Box className={`bg ${section}`} />
        <Element name="top" />
        <Box id="containerElement" style={{ position: "relative", zIndex: 10 }}>
          <Masthead
            title={t("page-regen_vs_degen-title")}
            mainTitle={t("page-regen_vs_degen-main-title")}
          />

          <Element name="introduction">
            <Introduction onChange={() => onChange("introduction")} />
          </Element>

          <Element name="chapter1">
            <Chapter1 onChange={() => onChange("chapter1")} />
          </Element>

          <Element name="chapter2">
            <Chapter2 onChange={() => onChange("chapter2")} />
          </Element>

          <Element name="chapter3">
            <Chapter3 onChange={() => onChange("chapter3")} />
          </Element>

          <Element name="chapter4">
            <Chapter4 data={data} />
          </Element>

          <Element name="chapter5">
            <Chapter5 onChange={() => onChange("chapter5")} />
          </Element>

          <Element name="chapter6">
            <Chapter6 onChange={() => onChange("chapter6")} />
          </Element>

          <Element name="chapter7">
            <Chapter7 onChange={() => onChange("chapter7")} data={undefined} />
          </Element>

        </Box>
      </Box>
    </PageLayout>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["regen_vs_degen"])), //earlier was "common" & "home" too since we had .json files for them too but we need only "primer"
      locale,
      data: {},
    },
    revalidate: 1,
  };
}

export default regen_vs_degen;
