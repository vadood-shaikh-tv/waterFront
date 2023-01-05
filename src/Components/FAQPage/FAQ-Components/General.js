import "./faqCommon.scss";
import Accordion from "react-bootstrap/Accordion";

export default function General({ questions }) {
    return (
        <div>
            <div className="accordion" id="accordionExample ">
                <Accordion defaultActiveKey="0">
                    {questions ? (
                        questions.map((item) => {
                            return (
                                <Accordion.Item eventKey={item._id}>
                                    <Accordion.Header>{item.question}</Accordion.Header>
                                    <Accordion.Body>{item.answer}</Accordion.Body>
                                </Accordion.Item>
                            );
                        })
                    ) : (
                        <>No data found </>
                    )}
                </Accordion>
            </div>
        </div>
    );
}
