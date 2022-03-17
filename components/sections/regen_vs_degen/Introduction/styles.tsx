import styled from "@emotion/styled";

export const Container = styled.div({
  maxWidth: "1024px",
  margin: "0px auto 0px",
  padding: "0 24px",
  ["@media (min-width: 1024px)"]: {
    margin: "100px auto 200px",
  },
});

export const Section1 = styled.div({
  display: "flex",
  alignItems: "center",
  marginBottom: 0,
  flexDirection: "column-reverse",
  ["@media (min-width: 1024px)"]: {
    flexDirection: "row",
    marginBottom: 0,
  },
});


export const Section2 = styled.div({
  display: "flex",
  alignItems: "center",
  marginBottom: 80,
  marginLeft: 0,
  flexDirection: "column",
  ["@media (min-width: 1024px)"]: {
    flexDirection: "row",
    marginBottom: 80,
  },
});

export const AstronautAndBull= styled.img({
  width: "100%",
  marginLeft: 0,
  ["@media (min-width: 768px)"]: {
    width: "auto",
  },
  ["@media (min-width: 1024px)"]: {
    width: "auto",
  },
})

export const Text = styled.div({});
