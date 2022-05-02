import React from "react";

export const ContactData = ({ title, value }) => {
  return (
    <div>
      {title}:{value || "null"}
    </div>
  );
};
