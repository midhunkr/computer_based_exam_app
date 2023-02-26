import logo from "./logo.svg";
import "./App.css";
import Header from "./modules/layout/header/header";
import QuestionCard from "./modules/main/questions/questionCard";
import "./assets/style.css";
import StatusCard from "./modules/main/status/statusCard";
import { Container, Row, Col } from "react-bootstrap";
import { questionAnswerCollection } from "./data/sampleData";
import ProfileData from "./modules/main/profiledata/profiledata";
import { useState } from "react";
import { Button } from "antd";

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const handleBackNavigation = () => {
    if (questionIndex !== 0) {
      setQuestionIndex((prev) => prev - 1);
    }
  };
  const handleShowNextQuestion = () => {
    if (questionIndex != questionAnswerCollection.length - 1) {
      setQuestionIndex((prev) => prev + 1);
    }
  };
  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col lg={12} xl={2}>
            <ProfileData />
          </Col>
          <Col lg={12} xl={7}>
            <div className="d-flex justify-content-center">
              <div className="mt-2">
                <div>
                  <QuestionCard
                    questionAnswerData={questionAnswerCollection[questionIndex]}
                  />
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <Button type="primary" onClick={handleBackNavigation}>
                    Back
                  </Button>
                  <Button type="primary" onClick={handleShowNextQuestion}>
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={12} xl={3}>
            <div className="d-flex align-items-center justify-content-center">
              <StatusCard />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
