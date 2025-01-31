import Button from "./components/Button";
import Card from "./components/Card";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    background: linear-gradient(135deg, #f6f9fc 0%, #eef2f7 100%);
    min-height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
  }
`;

const PlaygroundContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 64px 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainTitle = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  color: #1a1a1a;
  text-align: center;
  margin: 0 0 2rem;
  letter-spacing: -0.03em;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.03), 0 1px 2px rgba(0, 0, 0, 0.02);
  padding: 48px 32px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 24px 16px;
  }
`;

const ComponentSection = styled.section`
  margin: 48px 0;
  width: 100%;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  text-align: left;
`;

const ComponentGroup = styled.div`
  display: flex;
  gap: 16px;
  margin: 24px 0;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const CardGrid = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: minmax(0, 1fr);
  width: 100%;
  max-width: calc(100% - 2px); /* border'ı hesaba katmak için */
  box-sizing: border-box;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <PlaygroundContainer>
        <MainTitle>Playground</MainTitle>

        <ContentContainer>
          <ComponentSection>
            <SectionTitle>Buttons</SectionTitle>
            <ComponentGroup>
              <Button
                variant="primary"
                onClick={() => alert("Primary clicked")}
              >
                Primary Button
              </Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
            </ComponentGroup>

            <ComponentGroup>
              <Button size="small">Small Button</Button>
              <Button size="medium">Medium Button</Button>
              <Button size="large">Large Button</Button>
            </ComponentGroup>
          </ComponentSection>

          <ComponentSection>
            <SectionTitle>Cards</SectionTitle>
            <CardGrid>
              <Card
                title="Card"
                variant="elevated"
                padding="large"
                fullWidth
                textAlign="left"
                backgroundColor="#ffffff"
                minHeight="120px"
                maxWidth="100%"
              >
                This is a basic card example. Cards are used for content
                display, grouping, and information organization. They can be
                customized with different variations and styles.
              </Card>

              <Card
                title="Clickable Card"
                variant="default"
                padding="large"
                fullWidth
                textAlign="left"
                backgroundColor="#f8f9ff"
                minHeight="120px"
                maxWidth="100%"
                onClick={() => console.log("Card clicked")}
              >
                You can click this card. When clicked, a log message will be
                written to the console. The hover effect shows that it is
                clickable.
              </Card>
            </CardGrid>
          </ComponentSection>
        </ContentContainer>
      </PlaygroundContainer>
    </>
  );
};

export default App;
