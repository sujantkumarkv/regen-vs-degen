import { useTranslation } from "next-i18next";
import {
  Container,
  Title,
  List,
  Item,
  Header,
  Icon,
  Text,
  Body,
} from "./styles";

const Chapter2 = () => {
  // eslint-disable-next-line no-undef
  const { t } = useTranslation(["primer"]);

  return (
    <Container>
      <Title>{t("page-primer-contents-")}</Title>
      <List>
        <Item>
          <Header>
            <Icon src={"/images/primer/section-8-builders.svg"} />
            <Text>{t("page-primer-contents--h3-one")}</Text>
          </Header>
          <Body>
            <p>{t("page-primer-contents--text-one")}</p>
          </Body>
        </Item>
        <Item>
          <Header>
            <Icon src={"/images/primer/section-8-users.svg"} />
            <Text>{t("page-primer-contents--h3-two")}</Text>
          </Header>
          <Body>
            <p>{t("page-primer-contents--text-two")}</p>
          </Body>
        </Item>
        <Item>
          <Header>
            <Icon src={"/images/primer/section-8-you.svg"} />
            <Text>{t("page-primer-contents--h3-three")}</Text>
          </Header>
          <Body>
            <p>{t("page-primer-contents--text-three")}</p>
          </Body>
        </Item>
      </List>
    </Container>
  );
};

export default Chapter2;
