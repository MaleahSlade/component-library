import type { FC } from "react";
import type { AlertBoxProps } from "../../types";

// Displays a styled alert for success, error, warning, or info messages.
// Shows a close button when `onClose` is provided; `children` render below the message.
export const AlertBox: FC<AlertBoxProps> = ({ type, message, onClose, children }) => {
  return (
    <div className={`alert alert-${type}`} role="alert">
      <div className="alert-row">
        <p>{message}</p>
        {onClose && (
          <button type="button" className="alert-close" onClick={onClose} aria-label="Close alert">
            ×
          </button>
        )}
      </div>
      {children}
    </div>
  );
};

export default AlertBox;
