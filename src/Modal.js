import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Registration(props) {
    const [validated, setValidated] = useState(false);
    const [isButtonActive, setButtonActive] = useState(false);

    const handleSubmit = event => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            event.preventDefault();
        }

        setValidated(true);
    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Registrierung
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Werde Teil unserer Community!</h4>
                <p>
                    Damit wir dich besser kennenlernen können, brauchen wir ein
                    paar Informationen von dir. Erzähl uns etwas über dich und
                    deine Geschichte – wir freuen uns darauf, mehr über dich zu
                    erfahren!
                </p>
                <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                    onChange={() => setButtonActive(true)}
                >
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>E-Mail-Adresse</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="name@beispiel.ch"
                            autoFocus
                            required
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput2"
                    >
                        <Form.Label>Name</Form.Label>
                        <Form.Control required type="text" placeholder="" />
                    </Form.Group>
                    {/* <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput3"
                    >
                        <Form.Label>Telefonnummer</Form.Label>
                        <Form.Control
                            type="tel"
                            placeholder="+41"
                            maxLength="12"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            required
                        />
                    </Form.Group> */}
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>
                            Kurze Beschreibung über dich (optional: z. B. deine
                            Interessen oder deine Geschichte)
                        </Form.Label>
                        <Form.Control as="textarea" rows={4} />
                    </Form.Group>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={props.onHide}>
                            Abbrechen
                        </Button>
                        <Button
                            type="submit"
                            disabled={!isButtonActive}
                            style={{
                                backgroundColor: 'rgba(228, 62, 12, 0.85)',
                                borderColor: 'rgba(228, 62, 12, 0)',
                            }}
                        >
                            Absenden
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default Registration;
