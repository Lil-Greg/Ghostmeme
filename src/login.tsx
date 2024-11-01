import { FormEvent } from "react";
import { Container, Form, InputGroup } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";

export default function Login() {
    let showPassword = false;

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Check Username and Password for Validity
    }
    return (
        <>
            <Container>
                <h1>Login</h1>
                <hr />
                <Form onSubmit={handleSubmit}>
                    <FloatingLabel controlId="floatingInputUsername" label="Username" className="mb-3">
                        <Form.Control type="text" placeholder="Username" autoComplete="off" />
                    </FloatingLabel>
                    <InputGroup>
                        <FloatingLabel controlId="floatingInputPassword" label="Password">
                            <Form.Control type={showPassword ? "text" : "password"} placeholder="Password" />
                        </FloatingLabel>
                        <InputGroup.Text style={{ cursor: "pointer" }} onClick={() => showPassword = !showPassword}>
                            {showPassword ? (<FaRegEyeSlash />) : (<FaRegEye />)}
                        </InputGroup.Text>
                    </InputGroup>
                </Form>
            </Container>
        </>
    )
}