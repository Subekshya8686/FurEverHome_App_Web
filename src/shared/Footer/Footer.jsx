import React from "react";

const Footer = ({ footerRef }) => {
  return (
    <div
      ref={footerRef}
      className="py-4 text-center"
      style={{
        backgroundColor: "#FCDDC9",
        // position: "absolute",
        bottom: 0,
        width: "100%",
      }}
    >
      <p className="text-sm text-[#A35E47] font-lora">
        © 2025 Animal Adoption Platform. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
