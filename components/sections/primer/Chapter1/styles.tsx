import styled from "@emotion/styled";

export const Container = styled.div({
  maxWidth: "1024px",
  margin: "0 auto 136px",
  padding: "0 24px",
  ["@media (min-width: 1024px)"]: {
    margin: "0 auto 240px",
    padding: 0,
  },
});

export const Title = styled.h2({
  transform: "rotate(-6deg)",
  fontSize: "40px",
  fontWeight: "lighter",
  textAlign: "center",
  lineHeight: "40px",
  textTransform: "uppercase",
  marginBottom: "48px",
  ["@media (min-width: 1001px)"]: {
    fontSize: "54px",
    lineHeight: "56px",
    marginBottom: "120px",
  },
});

export const Text = styled.div({
  marginBottom: 40,
  ["@media (min-width: 1024px)"]: {
    width: "400px",
    marginBottom: 0,
  },
});

export const Section1 = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "column",
  ["@media (min-width: 1024px)"]: {
    flexDirection: "row",
  },
});

export const Section2= styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "column",
  ["@media (min-width: 1024px)"]: {
    flexDirection: "row",
  },
});

export const Section3= styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "column",
  ["@media (min-width: 1024px)"]: {
    flexDirection: "row",
  },
});

export const Section4= styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "column",
  ["@media (min-width: 1024px)"]: {
    flexDirection: "row",
  },
});

export const AstronautsAndSpiral= styled.img({
  width: "100%",
  ["@media (min-width: 1024px)"]: {
    width: "auto",
  },
});

export const AstronautsAndSpaceship= styled.img({
  width: "100%",
  ["@media (min-width: 1024px)"]: {
    width: "auto",
  },
  marginBottom: 80,
  marginRight: 60,
});

export const AstronautsCircle= styled.img({
  width: 650,
  height: 625,
  ["@media (min-width: 1024px)"]: {
    width: "auto",
  },
  marginLeft: 80,
});

export const ThreeAstronauts= styled.img({
  width: "100%",
  ["@media (min-width: 1024px)"]: {
    width: "auto",
  },
  marginRight: 80,
});


