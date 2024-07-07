import { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import ReviewModal from "./ReviewModal";

export default function WestcottOption() {
  const [visible, setVisible] = useState(false);
  const [reviewVisible, setReviewVisible] = useState(false);

  const handleClose = () => setVisible(false);
  const handleVisible = () => setVisible(true);
  const handleReviewClose = () => setReviewVisible(false);

  return (
    <>
      <Card className="mb-4">
        <Card.Header>Transfer Option #4</Card.Header>
        <Card.Img
          variant="top"
          src="https://imgs.search.brave.com/KKQssDYJ1r21M1x7izuuCfYgd0vgJZ6XIBvfN2ESbxo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93ZXN0/Y290dGNvdXJzZXMu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIyLzA0L3dlc3Rj/b3R0LWxvZ28ucG5n"
          alt="Westcott image"
          style={{ width: "15%" }}
        />
        <Card.Body>
          <Card.Title>WestCott Courses</Card.Title>
          <Card.Text>
            <a href="https://westcottcourses.com/">Westcott Courses</a> are
            self-paced, instructor-led courses with open-book midterms and
            homeworks. The University of Massachusetts Global has formed a
            partnership with Westcott courses for these courses to be available
            for credit. The final, however, is proctored. The courses are
            offered through the University of Massachussets Global.
            <br />
            <br />
            <strong>Good for MATH 230 and MATH 220</strong>
            <br />
            <br />
            <strong>Type: Self Paced with Grade</strong>
          </Card.Text>
          <Button
            variant="outline-info"
            className="me-3"
            onClick={() => setVisible(true)}
          >
            Details
          </Button>
          <Button
            variant="outline-success"
            onClick={() => setReviewVisible(true)}
          >
            Rate or Review this option
          </Button>
        </Card.Body>
      </Card>
      <WestcottModal visible={visible} handleClose={handleClose} />
      <ReviewModal option="westcott" visible={reviewVisible} handleClose={handleReviewClose} />
    </>
  );
}

function WestcottModal({
  visible,
  handleClose,
}: {
  visible: boolean;
  handleClose: () => void;
}) {
  return (
    <Modal show={visible} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Westcott details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h2>Cost</h2>
        <p>
          The courses cost is around $570 plus any remote proctoring fees which
          cost $60.{" "}
        </p>
        <h2>Transfer</h2>
        <p>You can explore other course equivalencies on Westcott by:</p>
        <ol>
          <li>Searching Google for Penn State Transfer Credit Tool </li>
          <li>Click on the Transfer Credit Tool</li>
          <li>Opt for Search by Institution.</li>
          <li>
            Under Institution, enter: University of Massachusetts-Global (CA):
            100121031.
          </li>
          <li>
            For Course, enter the specific course offered by Westcott course
          </li>
          <li>Finally, click on Search</li>
        </ol>
        <h2>Notes</h2>
        The MATH 220 (3 credit) course offered by Westcott called Linear Algebra
        is 4 credits. If you do take this course, in addition to MATH 220
        course, you would be given miscallanous MATH credit (1). From my
        understanding, the MATH 220 course at Penn State is relatively easy
        while the MATH 230 course at Penn State is quite harder. If you are an
        independent learner who likes to learn online, these courses might be
        for you.
        <p> </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
