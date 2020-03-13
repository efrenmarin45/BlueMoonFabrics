import React from 'react'
import {
    FormGroup,
    ControlLabel,
    FormControl,
    HelpBlock,
    Button,
    Col
} from "react-bootstrap"

export const login = (props) => {

    function FieldGroup({ id, label, help, ...props }) {
        return (
            <FormGroup controlId={id}>
                <ControlLabel>{label}</ControlLabel>
                <FormControl {...props} onChange={props.change} />
                {help && <HelpBlock>{help}</HelpBlock>}
            </FormGroup>
        )
    }
    return <div className="container" style={{ textAlign: "left" }}>
        <Col md={2} />
        <Col md={8}>
            <form>
                <FieldGroup id="formControlsEmail" type="text" label="Email" />
                <FieldGroup id="formControlsPassword" type="password" label="Password" />
                <Button type="button" bsStyle="success" onClick={() => {
                    props.login(this.email.value, this.password.value)
                }}>
                    Login
                </Button>
            </form>
            <br />
            <br />
        </Col>
        <Col md={2} />
    </div>
};

//export default login