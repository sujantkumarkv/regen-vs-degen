import styled from "@emotion/styled";

export const Container = styled.div({
  maxWidth: "1024px",
  margin: "0 auto 6px",
  padding: "0 24px",
  ["@media (min-width: 1024px)"]: {
    margin: "0 auto 240px",
    padding: 0,
  },
});

export const Title = styled.h2({
  transform: "rotate(-6deg)",
  fontSize: "50px",
  fontWeight: 100,
  textAlign: "center",
  lineHeight: "60px",
  textTransform: "uppercase",
  marginBottom: "48px",
  marginRight: "40px",
  paddingTop: "80px",
  ["@media (min-width: 1001px)"]: {
    
    marginBottom: "40px",
  },
});

export const Text = styled.div({
  marginBottom: 40,
  ["@media (min-width: 1024px)"]: {
    width: "400px",
    marginBottom: 40,
  },
});

export const Section1 = styled.div({
  display: "flex",
  alignItems: "center",
  marginBottom: 40,
  flexDirection: "column-reverse",
  ["@media (min-width: 1024px)"]: {
    flexDirection: "row",
    marginBottom: 40,
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


export const GitcoinTablets = styled.img({
  width: "100%",
  height: "auto",
  padding: 0,
  marginBottom: 40,
  ["@media (min-width: 768px)"]: {
    width: "auto",
    padding: 0,
  },
  ["@media (min-width: 1024px)"]: {
    width: "100%",
    marginBottom: 40,
    padding: 0,
  },
});

export const CardsGame= styled.img({
  width: "100%",
  ["@media (min-width: 1024px)"]: {
    width: "auto",
  },
});

export const CardLayout= styled.img({
  width: "100%",
  height: "auto",
  ["@media (min-width: 1024px)"]: {
    width: "auto",
   
  },
  marginTop: 80,
  marginBottom: 0,
  marginRight: 0,
});

