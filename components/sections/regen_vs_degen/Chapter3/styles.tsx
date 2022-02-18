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
  transform: "rotate(-3deg)",
  fontSize: "50px",
  textAlign: "center",
  lineHeight: "60px",
  fontWeight: 100,
  position: "relative",
  textTransform: "uppercase",
  marginBottom: 40,
  ["@media (min-width: 1024px)"]: {
    
    marginBottom: 40,
  },
});

export const Section = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "column",
  ["@media (min-width: 1024px)"]: {
    flexDirection: "row",
  },
});


export const Text = styled.div({
  marginBottom: 40,
  ["@media (min-width: 1024px)"]: {
    width: "550px",
    marginBottom: 20,
  },
});


export const GitcoinTablets = styled.img({
  width: "100%",
  height: "auto",
  marginBottom: 80,
  ["@media (min-width: 768px)"]: {
    width: "auto",
  },
  ["@media (min-width: 1024px)"]: {
    width: "100%",
    marginBottom: 80,
  },
});

export const SpendingCards= styled.img({
  width: "100%",
  marginBottom: 40,
  marginTop: 40,
  marginLeft: 40,

  ["@media (min-width: 1024px)"]: {
    width: "auto",
    marginBottom: 40,
       
  },
})
export const VerticalHorizontalCards= styled.img({
  width: "100%",
  marginBottom: 40,
  marginTop: 40,
  marginLeft: 0,

  ["@media (min-width: 1024px)"]: {
    width: "auto",
    marginBottom: 40,
       
  },
})