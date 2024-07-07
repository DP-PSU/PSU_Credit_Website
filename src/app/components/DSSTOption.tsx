import { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import ReviewModal from "./ReviewModal";

export default function DSSTOption() {
  const [visible, setVisible] = useState(false);
  const [reviewVisible, setReviewVisible] = useState(false);

  const handleClose = () => setVisible(false);
  const handleVisible = () => setVisible(true);
  const handleReviewClose = () => setReviewVisible(false);

  return (
    <>
      <Card className="mb-4">
        <Card.Header>Transfer Option #5</Card.Header>
        <Card.Img
          variant="top"
          src="https://getcollegecredit.com/wp-content/uploads/2022/08/logo-1.png"
          alt="DSST Image"
          style={{ width: "25%" }}
        />
        <Card.Body>
          <Card.Title>DSST Exams</Card.Title>
          <Card.Text>
            {" "}
            <a href="https://getcollegecredit.com/">DSST Exams</a> offer a set
            of exams that allow you to gain college credit for your
            bachelor&apos;s degree, bypassing the need to take longer courses.
            These DSST tests have some more topics than CLEP exams, so they are
            worth looking into. <br />
            <br />
            <strong>
              Good for Fundamentals of Cybersecurity Exam for SRA 221
            </strong>
            <br />
            <br />
            <strong>Good for Certain General Education Coursework</strong>
            <br />
            <br />
            <strong>Type: Exam (Pass / Fail)</strong>
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
      <DSSTModal visible={visible} handleClose={handleClose} />
      <ReviewModal
        option="dsst"
        visible={reviewVisible}
        handleClose={handleReviewClose}
      />
    </>
  );
}

function DSSTModal({
  visible,
  handleClose,
}: {
  visible: boolean;
  handleClose: () => void;
}) {
  return (
    <Modal show={visible} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>DSST details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h2>Cost</h2>
        <p>
          {" "}
          DSST exams are $100 each on comparison with CLEP exams. However,
          members of the military may able to register for the exams free.{" "}
        </p>
        <h2>Transfer</h2>
        <p>
          You can explore other course equivalencies{" "}
          <a href="https://admissions.psu.edu/academics/credit/dsst/">here</a>.
        </p>
        <h2>Notes</h2>
        <p>
          For majors in the College of IST, you can get credit for SRA 221 by
          recieving a passing score on the Fundamentals of Cybersecurity exam
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
