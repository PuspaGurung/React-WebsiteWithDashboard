import React, { Fragment } from "react";

const FormField = ({ id, formData, change, className }) => {
  const showError = () => {
    let errorMessage = (
      <div className="input-validation-msg">
        {formData.validation && !formData.valid
          ? formData.validationMessage
          : null}
      </div>
    );
    return errorMessage;
  };
  const renderTemplate = () => {
    let formTemplate = null;
    switch (formData.element) {
      case "input":
        formTemplate = (
          <Fragment>
            <input
              {...formData.config}
              value={formData.value}
              onChange={event => change({ event, id })}
              className="utl-input"
            />
            {/* Error message:: if invalid E-mail format or Submit empty input */}
            {showError()}
          </Fragment>
        );
        break;

      default:
        formTemplate = null;
    }
    return formTemplate;
  };

  return (
    <div className={`${className ? className : null} utl-input-wrapper `}>
      {renderTemplate()}
    </div>
  );
};

export default FormField;
