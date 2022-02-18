import styled from "@emotion/styled";



export const Container = styled.div({
  maxWidth: 1024,
  margin: "0 auto 11px",
  padding: "11px 11px 0",
  overflow: "hidden",
  ["@media (min-width: 1024px)"]: {
    padding: 0,
    overflow: "initial",
    margin: "0 auto 51px",
  },
});

export const Title = styled.h2({
  transform: "rotate(3deg)",
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
  flexDirection: "column",
  padding: "24px",
  justifyContent: "space-between",
  ["@media (min-width: 1024px)"]: {
    flexDirection: "row",
  },
});


export const Text = styled.div({

  marginBottom: 40,
  ["@media (min-width: 1024px)"]: {
    width: "500px",
    marginBottom: 0,
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


export const GtcLogo= styled.img({
  width: "100%",
  marginLeft: "40px",
  ["@media (min-width: 768px)"]: {
    width: "auto",
  },
});

export const EthBtcLogo= styled.img({
  width: "100%",
  marginLeft: "40px",
  padding: "24px",
  ["@media (min-width: 768px)"]: {
    width: "auto",
  },
});


export const InvestorCard= styled.img({
  width: "100%",
  height: "auto",
  padding: "24px",
  ["@media (min-width: 1024px)"]: {
    width: "auto",
  },
});

export const InvestmentCard= styled.img({
  width: "100%",
  height: "auto",
  padding: "24px",
  ["@media (min-width: 1024px)"]: {
    width: "auto",
  },
});

export const InvestmentBondCard= styled.img({
  width: "100%",
  height: "auto",
  padding: "24px",
  ["@media (min-width: 1024px)"]: {
    width: "auto",
  },
});

export const TransactionCard= styled.img({
  width: "100%",
  height: "auto",
  padding: "24px",
  ["@media (min-width: 1024px)"]: {
    width: "auto",
  },
});

export const EpicCard= styled.img({
  width: "100%",
  height: "auto",
  padding: "24px",
  ["@media (min-width: 1024px)"]: {
    width: "auto",
  },
});
