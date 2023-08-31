"use client";
import { twMerge } from "tailwind-merge";

type ContactButtonProps = {
  className?: string;
};

const ContactButton: React.FC<ContactButtonProps> = ({ className }) => {
  const handleClickScroll = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button onClick={handleClickScroll} className={twMerge("", className)}>
      Kontakt
    </button>
  );
};

export default ContactButton;
