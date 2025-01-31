import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "remoteComponents/Header";
import Button from "remoteComponents/Button";
import Card from "remoteComponents/Card";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  #root {
    width: 100%;
    min-height: 100%;
    background: #f5f5f5;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh - 64px); /* viewport height - header height */
  position: relative;
  top: 64px;
  width: 100%;
`;

const Layout = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  background: #fff;
  margin: 0;
  padding: 0;
  min-height: calc(100vh - 64px);
`;

const Sidebar = styled.aside`
  width: 260px;
  background: #fff;
  border-right: 1px solid #f0f0f0;
  padding: 24px 0;
  height: 100vh;
  overflow-y: auto;
  position: sticky;
  top: 0;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 24px 40px;
  background: #fff;
  overflow-y: auto;
  min-height: 100%;
`;

const ComponentGroup = styled.div`
  margin-bottom: 24px;
`;

const GroupTitle = styled.h3`
  color: #666;
  font-size: 13px;
  padding: 8px 16px;
  margin: 0;
`;

const ComponentLink = styled.a<{ active?: boolean }>`
  display: flex;
  align-items: center;
  padding: 8px 24px;
  color: ${(props) => (props.active ? "#5394ad" : "#454545")};
  font-size: 14px;
  text-decoration: none;
  background: ${(props) => (props.active ? "#e6f4ff" : "transparent")};
  border-right: 3px solid
    ${(props) => (props.active ? "#5394ad" : "transparent")};

  &:hover {
    color: #5394ad;
    background: #e6f4ff;
  }

  span.version {
    margin-left: auto;
    font-size: 12px;
    color: #8c8c8c;
  }
`;

const PageTitle = styled.h1`
  font-size: 30px;
  margin: 0 0 24px;
  font-weight: 500;
  color: #262626;
`;

const ComponentSection = styled.section`
  margin-bottom: 48px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin: 0 0 16px;
  font-weight: 500;
  color: #262626;
`;

const ComponentDisplay = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ExampleSection = styled.div`
  margin-bottom: 32px;
`;

const ExampleTitle = styled.h3`
  font-size: 18px;
  color: #262626;
  margin-bottom: 16px;
`;

const ExampleRow = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 24px;
`;

const CodeBlock = styled.pre`
  background: #f6f8fa;
  color: #333;
  padding: 16px;
  border-radius: 8px;
  margin-top: 16px;
  overflow-x: auto;
  font-family: monospace;
`;

function App() {
  const [activeComponent, setActiveComponent] = useState("Button");

  const renderComponentContent = (activeComponent: string) => {
    switch (activeComponent) {
      case "Button":
        return (
          <ComponentDisplay>
            <ExampleSection>
              <ExampleTitle>Button Variants</ExampleTitle>
              <ExampleRow>
                <Button variant="primary">Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="outline">Outline Button</Button>
              </ExampleRow>
              <CodeBlock>{`<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="outline">Outline Button</Button>`}</CodeBlock>
            </ExampleSection>

            <ExampleSection>
              <ExampleTitle>Button Sizes</ExampleTitle>
              <ExampleRow>
                <Button size="small">Small</Button>
                <Button size="medium">Medium</Button>
                <Button size="large">Large</Button>
              </ExampleRow>
              <CodeBlock>{`<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>`}</CodeBlock>
            </ExampleSection>

            <ExampleSection>
              <ExampleTitle>Special Cases</ExampleTitle>
              <ExampleRow>
                <Button disabled>Disabled Button</Button>
                <Button fullWidth>Full Width Button</Button>
              </ExampleRow>
              <CodeBlock>{`<Button disabled>Disabled Button</Button>
<Button fullWidth>Full Width Button</Button>`}</CodeBlock>
            </ExampleSection>
          </ComponentDisplay>
        );

      case "Card":
        return (
          <ComponentDisplay>
            <ExampleSection>
              <ExampleTitle>Card Variants</ExampleTitle>
              <ExampleRow>
                <Card title="Default Card" variant="default">
                  This is a default card.
                </Card>
                <Card title="Elevated Card" variant="elevated">
                  This is an elevated card.
                </Card>
                <Card title="Outlined Card" variant="outlined">
                  This is an outlined card.
                </Card>
              </ExampleRow>
              <CodeBlock>{`<Card title="Default Card" variant="default">
  This is a default card.
</Card>

<Card title="Elevated Card" variant="elevated">
  This is an elevated card.
</Card>

<Card title="Outlined Card" variant="outlined">
  This is an outlined card.
</Card>`}</CodeBlock>
            </ExampleSection>

            <ExampleSection>
              <ExampleTitle>Card Sizes</ExampleTitle>
              <ExampleRow>
                <Card title="Small Padding" padding="small">
                  Small Padded Card
                </Card>
                <Card title="Medium Padding" padding="medium">
                  Medium Padded Card
                </Card>
                <Card title="Large Padding" padding="large">
                  Large Padded Card
                </Card>
              </ExampleRow>
              <CodeBlock>{`<Card title="Small Padding" padding="small">
  Small Padded Card
</Card>

<Card title="Medium Padding" padding="medium">
  Medium Padded Card
</Card>

<Card title="Large Padding" padding="large">
  Large Padded Card
</Card>`}</CodeBlock>
            </ExampleSection>

            <ExampleSection>
              <ExampleTitle>Custom Styles</ExampleTitle>
              <ExampleRow>
                <Card
                  title="Custom Styled Card"
                  backgroundColor="#f0f9ff"
                  textColor="#0369a1"
                  maxWidth="300px"
                >
                  Custom Styled Card
                </Card>
                <Card
                  title="Clickable Card"
                  onClick={() => alert("Karta tıklandı!")}
                  variant="elevated"
                >
                  Clickable Card
                </Card>
              </ExampleRow>
              <CodeBlock>{`<Card 
  title="Custom Styled Card" 
  backgroundColor="#f0f9ff" 
  textColor="#0369a1"
  maxWidth="300px"
>
  Custom Styled Card
</Card>

<Card 
  title="Clickable Card" 
  onClick={() => alert('Karta tıklandı!')}
  variant="elevated"
>
  Clickable Card
</Card>`}</CodeBlock>
            </ExampleSection>
          </ComponentDisplay>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header title="Micro Frontend Host App" />
        <Layout>
          <Sidebar>
            <ComponentGroup>
              <GroupTitle>General</GroupTitle>
              <ComponentLink
                href="#button"
                active={activeComponent === "Button"}
                onClick={() => setActiveComponent("Button")}
              >
                Button
              </ComponentLink>
              <ComponentLink
                href="#card"
                active={activeComponent === "Card"}
                onClick={() => setActiveComponent("Card")}
              >
                Card
              </ComponentLink>
            </ComponentGroup>

            <ComponentGroup>
              <GroupTitle>Layout</GroupTitle>
              <ComponentLink href="#divider">
                Divider
                <span className="version">1.0.0</span>
              </ComponentLink>
              <ComponentLink href="#grid">
                Grid
                <span className="version">1.0.0</span>
              </ComponentLink>
              <ComponentLink href="#space">
                Space
                <span className="version">1.0.0</span>
              </ComponentLink>
            </ComponentGroup>

            <ComponentGroup>
              <GroupTitle>Navigation</GroupTitle>
              <ComponentLink href="#breadcrumb">Breadcrumb</ComponentLink>
              <ComponentLink href="#menu">Menu</ComponentLink>
              <ComponentLink href="#pagination">Pagination</ComponentLink>
            </ComponentGroup>
          </Sidebar>

          <MainContent>
            <PageTitle>Component Design Guide</PageTitle>

            <ComponentSection>
              <SectionTitle>
                {activeComponent === "Button"
                  ? "Button Component"
                  : activeComponent === "Card"
                  ? "Card Component"
                  : "General Components"}
              </SectionTitle>
              {renderComponentContent(activeComponent)}
            </ComponentSection>
          </MainContent>
        </Layout>
      </Container>
    </>
  );
}

export default App;
