import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const WhatsApp = () => {
  return (
    <div className="p-3 fixed bottom-0 right-0">
      <FloatingWhatsApp
        phoneNumber="+8801643820208"
        accountName="Shahin Mahmud"
        allowEsc
        allowClickAway
        notification
        notificationSound
      />
    </div>
  );
};

export default WhatsApp;
