import logo from "./logo.svg";
import "./App.css";
import Header from "./modules/layout/header/header";
import QuestionCard from "./modules/main/questions/questionCard";
import "./assets/style.css";
import StatusCard from "./modules/main/status/statusCard";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { questionAnswerCollection } from "./data/sampleData";
import ProfileData from "./modules/main/profiledata/profiledata";
function App() {
  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col lg={2} xl={2}>
            <ProfileData />
          </Col>
          <Col lg={6} xl={6}>
            <div>
              {questionAnswerCollection.map((item) => (
                <QuestionCard questionAnswerData={item} key={item.question} />
              ))}
            </div>
          </Col>
          <Col lg={4} xl={4}>
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
