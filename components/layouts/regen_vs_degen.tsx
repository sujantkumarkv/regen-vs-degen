import Head, { HeadProps } from "components/primitives/head";
import Nav, { NavProps } from "components/sections/nav";
import { Box, SxStyleProp } from "theme-ui";
import { FC } from "react";

type Props = {
  headProps?: HeadProps;
  isDark?: boolean;
  navProps?: NavProps;
  pushContentSx?: SxStyleProp;
};

const PageLayout: FC<Props> = ({
  children,
  headProps,
  isDark,
  navProps,
  pushContentSx,
}) => (
  <>
    <Head {...headProps} />
    <Nav
      isregen_vs_degen
      {...(navProps ? navProps : { background: isDark ? "black" : "white" })}
    />
    <Box
      as="main"
      sx={{ position: "relative", overflow: "hidden", ...pushContentSx }}>
      {children}
    </Box>
    <style global jsx>{`
      @font-face {
        font-family: 'Miriam Libre', sans-serif;
        src: url('https://fonts.googleapis.com/css2?family=Miriam+Libre&display=swap');
        font-weight: 100;
        font-style: normal;
      }

      @font-face {
        font-family: 'Miriam Libre', sans-serif;
        src: url('https://fonts.googleapis.com/css2?family=Miriam+Libre&display=swap');
        font-weight: normal;
        font-style: normal;
      }

      @font-face {
        font-family: 'Miriam Libre', sans-serif;
        src: url('https://fonts.googleapis.com/css2?family=Miriam+Libre&display=swap');
        font-weight: normal;
        font-style: normal;
      }

      .regen_vs_degen {
        font-family: 'Miriam Libre', sans-serif;
        font-size: 18px;
        line-height: 28px;
      }

      .regen_vs_degen__gitcoin_tablets {
        width: 150vw;
        padding: 0;
        margin-left: -20vw;
      }
      .regen_vs_degen__gameplay_gameplayrobot {
        text-align: center;
        display: block;
        justify-content: center;
        align-items: center;
        width: 100%;
      }

      .regen_vs_degen-main-title {
        font-family: 'Miriam Libre', sans-serif;
        font-size: 90px;
        line-height: 100px;
        margin-left: -40px;
      }
      .regen_vs_degen h1,
      .regen_vs_degen h2,
      .regen_vs_degen h3,
      .regen_vs_degen h4,
      .regen_vs_degen h5,
      .regen_vs_degen h6 {
        font-weight: normal;
        font-family: 'Miriam Libre', sans-serif;
        margin-top: 0;
      }

      .regen_vs_degen h2 {
        font-weight: lighter;
      }

      .regen_vs_degen__heading {
        font-size: 28px;
        font-weight: bold;
        line-height: 38px;
        margin-bottom: 16px;
      }

      .regen_vs_degen p {
        margin-bottom: 20px;
        margin-top: 0;
      }

      .regen_vs_degen ul {
        margin-bottom: 11px;
        margin-top: 0;
      }

      

      .regen_vs_degen .bg {
        transition: background-color 0.6s;
        background-color: #97f2ef;
        width: 100vw;
        position: fixed;
        height: 100vh;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        z-index: 0;
      }
      .regen_vs_degen .introduction {
        background-color: #B3FFED;
        transition: background-color 0.6s;
      }
      .regen_vs_degen .chapter1 {
        background-color: #FAADBF;
        transition: background-color 0.6s;
      }
      .regen_vs_degen .chapter2 {
        background-color: #B3FFED;
        transition: background-color 0.6s;
      }
      .regen_vs_degen .chapter3 {
        background-color: #FAADBF;
        transition: background-color 0.6s;
      }
      .regen_vs_degen .chapter4 {
        background-color: #FAADBF;
        transition: background-color 0.6s;
      }
      .regen_vs_degen .chapter5 {
        background-color: #B3FFED;
        transition: background-color 0.6s;
      }
      .regen_vs_degen .chapter6 {
        background-color: #B3FFED;
        transition: background-color 0.6s;
      }
      .regen_vs_degen .chapter7 {
        background-color: #B3FFED;
        transition: background-color 0.6s;
      }


      .social-icons li{
        display: inline-block;
        margin-bottom: 40px;
        padding: 15px;
        vertical-align: middle;
      }
     

    }
    `}</style>
  </>
);

export default PageLayout;
