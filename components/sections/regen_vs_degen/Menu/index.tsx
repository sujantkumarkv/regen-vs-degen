import { useTranslation } from "next-i18next";
import { useState } from "react";
import { Link } from "react-scroll";
import {
  Root,
  Inner,
  Header,
  List,
  ListContainer,
  Item,
  ButtonText,
  Circle,
} from "./styles";

const Menu = () => {
  const { t } = useTranslation(["regen_vs_degen"]);
  const [active, setActiveState] = useState(false);
  return (
    <Root>
      <Inner isActive={active}>
        <Header
          isActive={active}
          onClick={() => {
            active ? setActiveState(false) : setActiveState(true);
          }}>
          <ButtonText>{t("page-regen_vs_degen-contents-btn")}</ButtonText>
          <Circle className="menu__circle" />
        </Header>
        <List isActive={active}>
          <ListContainer isActive={active}>

            <Item>
              <Link
                activeClass="active"
                to="introduction"
                spy
                smooth
                offset={-50}
                duration={500}
                onClick={() => {
                  setActiveState(false);
                }}>
                {t("page-regen_vs_degen-contents-intro")}
              </Link>
            </Item>

            <Item>
              <Link
                activeClass="active"
                to="chapter1"
                spy
                ignoreCancelEvents={true}
                smooth
                offset={-50}
                duration={500}
                onClick={() => {
                  setActiveState(false);
                }}>
                {t("page-regen_vs_degen-contents-gamezone")}
              </Link>
            </Item>

            <Item>
              <Link
                activeClass="active"
                to="chapter2"
                spy
                smooth
                offset={-50}
                duration={500}
                onClick={() => {
                  setActiveState(false);
                }}>
                {t("page-regen_vs_degen-contents-cardtypes")}
              </Link>
            </Item>

            <Item>
              <Link
                activeClass="active"
                to="chapter3"
                spy
                smooth
                offset={-50}
                duration={500}
                onClick={() => {
                  setActiveState(false);
                }}>
                {t("page-regen_vs_degen-contents-terminology")}
              </Link>
            </Item>
            
            <Item>
              <Link
                activeClass="active"
                to="chapter4"
                spy
                smooth
                offset={-50}
                duration={500}
                onClick={() => {
                  setActiveState(false);
                }}>
                {t("page-regen_vs_degen-contents-gameplay")}
              </Link>
            </Item>

            <Item>
              <Link
                activeClass="active"
                to="Chapter5"
                spy
                smooth
                offset={-50}
                duration={500}
                onClick={() => {
                  setActiveState(false);
                }}>
                {t("page-regen_vs_degen-contents-socials")}
              </Link>
            </Item>
            
          </ListContainer>
        </List>
      </Inner>
    </Root>
  );
};

export default Menu;
