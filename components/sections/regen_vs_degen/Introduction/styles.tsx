import styled from "@emotion/styled";

export const Container = styled.div({
  maxWidth: "1024px",
  margin: "60px auto 80px",
  padding: "0 24px",
  ["@media (min-width: 1024px)"]: {
    margin: "100px auto 200px",
  },
});

export const Section1 = styled.div({
  display: "flex",
  alignItems: "center",
  marginBottom: 40,
  flexDirection: "column-reverse",
  ["@media (min-width: 1024px)"]: {
    flexDirection: "row",
    marginBottom: 80,
  },
});


export const Section2 = styled.div({
  display: "flex",
  alignItems: "center",
  marginBottom: 40,
  marginLeft: 80,
  flexDirection: "column",
  ["@media (min-width: 1024px)"]: {
    flexDirection: "row",
    marginBottom: 0,
  },
});

export const AstronautAndBull= styled.img({
  width: "100%",
  marginBottom: 40,
  marginLeft: -40,
  ["@media (min-width: 768px)"]: {
    width: "auto",
    marginBottom: 40,
  },
  ["@media (min-width: 1024px)"]: {
    width: "auto",
    marginBottom: 40,
  },
})

export const Text = styled.div({});
