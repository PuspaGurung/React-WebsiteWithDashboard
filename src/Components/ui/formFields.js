import React, { Fragment } from "react";

const FormField = ({ id, formData, change }) => {
  const showError = () => {
    let errorMessage = (
      <div className="input-error">
        {formData.validation && !formData.valid
          ? formData.validationMessage
          : null}
      </div>
    );
    return errorMessage;
  };
  const renderTemplate = () => {
    let fornmTemplate = null;
    switch (formData.element) {
      case "input":
        fornmTemplate = (
          <Fragment>
            <input
              {...formData.config}
              value={formData.value}
              onChange={event => change({ event, id })}
            />
            {showError()}
          </Fragment>
        );
        break;

      default:
        fornmTemplate = null;
    }
    return fornmTemplate;
  };

  return <div className="enroll-form__input">{renderTemplate()}</div>;
};

export default FormField;
