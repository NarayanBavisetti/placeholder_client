import React, { useState } from "react";
import PropTypes from "prop-types";
import "./modal.css";

const Modal = (props) => {
  const [visible, setVisible] = useState(true);

  // Close modal function
  const closeModal = () => {
    setVisible(false);

    // Set timeout to make the transition visible
    setTimeout(() => {
      props.close();
    }, 300);
  };

  return (
    <React.Fragment>
      <div className={"modal-cont " + (visible ? "show" : null)}>
        <div className="modal-content">
          <div className="modal-body">
            {props.icon ? <img src={props.icon} alt="Status Icon" /> : null}
            <p>{props.message}</p>
            <div className="buttons">
              {props.buttons.map((button, i) => {
                return (
                  <button
                    type="button"
                    onClick={() => {
                      // Close modal(if it does)
                      if (button.close) closeModal();

                      // Perform other actions(if any)
                      button.actions.map((func) => {
                        func();
                      });
                    }}
                    style={{
                      // Set color and background color(if other than default)
                      color: button.color,
                      backgroundColor: button.backgroundColor,
                    }}
                    key={i}
                  >
                    {button.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

Modal.propTypes = {
  message: PropTypes.string.isRequired,
  buttons: PropTypes.array.isRequired,
  close: PropTypes.func.isRequired,
};

export default Modal;
