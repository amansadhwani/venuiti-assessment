import React, { FC } from "react";
import { TNotification } from "../../types/user.type";
import "./toaster.css";

const Toaster: FC<TNotification> = ({ message }) => {
  return (
    <div id="toast" data-testid="toast">
      {message}
    </div>
  );
};

export default Toaster;
