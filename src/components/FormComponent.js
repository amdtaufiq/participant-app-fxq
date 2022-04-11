import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { FormGroup, Col, Label, Input, Row, Button } from "reactstrap";
import ParticipantValidation from "../validations/ParticipantValidation";

const renderField = ({
    input,
    type,
    placeholder,
    label,
    disabled,
    readOnly,
    meta: { touched, error, warning },
}) => (
    <Row>
        <Col md="12">
            <Label htmlFor="{input}" className="col-form-label">
                {label}
            </Label>
        </Col>
        <Col md="12">
            <Input
                {...input}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                readOnly={readOnly}
            ></Input>
            {touched &&
                ((error && <p style={{ color: "red" }}>{error}</p>) ||
                    (warning && <p style={{ color: "brown" }}>{warning}</p>))}
        </Col>
    </Row>
);

const mapStateToProps = (state) => {
    return {
        initialValues: {
            id: state?.participants?.getParticipantDetail?.data?.id,
            full_name: state?.participants?.getParticipantDetail?.data?.full_name,
            business_name: state?.participants?.getParticipantDetail?.data?.business_name,
            email: state?.participants?.getParticipantDetail?.data?.email,
            phone_number: state?.participants?.getParticipantDetail?.data?.phone_number,
        }
    };
};

class FormComponent extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <FormGroup row>
                    <Col md={6}>
                        <FormGroup>
                            <Field
                                type="text"
                                name="full_name"
                                component={renderField}
                                label="Full Name :"
                            />
                        </FormGroup>
                    </Col>

                    <Col md={6}>
                        <FormGroup>
                            <Field
                                type="text"
                                name="business_name"
                                component={renderField}
                                label="Business Name :"
                            />
                        </FormGroup>
                    </Col>

                    <Col md={6}>
                        <FormGroup>
                            <Field
                                type="text"
                                name="email"
                                component={renderField}
                                label="Email :"
                            />
                        </FormGroup>
                    </Col>

                    <Col md={6}>
                        <FormGroup>
                            <Field
                                type="number"
                                name="phone_number"
                                component={renderField}
                                label="Phone Number :"
                            />
                        </FormGroup>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Col md="12">
                        <FormGroup>
                            <Button
                                color="dark"
                                type="submit"
                                disabled={this.props.submitting}
                            >
                                Submit
                            </Button>
                        </FormGroup>
                    </Col>
                </FormGroup>
            </form>
        );
    }
}

FormComponent = reduxForm({
    form: "formCreateParticipant",
    validate: ParticipantValidation,
    enableReinitialize: true,
})(FormComponent);
export default connect(mapStateToProps, null)(FormComponent);