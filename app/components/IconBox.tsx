import { RiWifiFill } from "react-icons/ri";
import { BiSolidCameraHome } from "react-icons/bi";
import { TbToolsKitchen2 } from "react-icons/tb";
import { AiFillCar } from "react-icons/ai";
import { GiFlowerEmblem, GiStairs } from "react-icons/gi";
import {
  FaShower,
  FaPhoneVolume,
  FaTemperatureHigh,
  FaBed,
} from "react-icons/fa";
import { BsDoorOpenFill } from "react-icons/bs";
import { MdOutlineLocalLaundryService, MdMonitor } from "react-icons/md";
import { GrFacebook } from "react-icons/gr";
import { GoMail } from "react-icons/go";
import { twMerge } from "tailwind-merge";

type IconBoxProps = {
  icon: string;
  content: string;
  pClassName?: string;
  iconClassName?: string;
  containerClass?: string;
  size?: number;
};

const IconBox: React.FC<IconBoxProps> = ({
  icon,
  content,
  pClassName,
  iconClassName,
  containerClass,
  size,
}) => {
  return (
    <div
      className={twMerge(
        "pr-4 pl-3 py-2 sm:pr-8 sm:pl-6 sm:py-3 bg-secondary text-main flex items-center justify-between rounded-xl font-montserrat font-bold",
        containerClass
      )}
    >
      {icon === "wifi" && (
        <RiWifiFill
          size={size || 32}
          className={twMerge("mr-3 sm:mr-6", iconClassName)}
        />
      )}
      {icon === "camera" && (
        <BiSolidCameraHome
          size={size || 32}
          className={twMerge("mr-3 sm:mr-6", iconClassName)}
        />
      )}
      {icon === "kitchen" && (
        <TbToolsKitchen2
          size={size || 32}
          className={twMerge("mr-3 sm:mr-6", iconClassName)}
        />
      )}
      {icon === "car" && (
        <AiFillCar
          size={size || 32}
          className={twMerge("mr-3 sm:mr-6", iconClassName)}
        />
      )}
      {icon === "garden" && (
        <GiFlowerEmblem
          size={size || 32}
          className={twMerge("mr-3 sm:mr-6", iconClassName)}
        />
      )}
      {icon === "shower" && (
        <FaShower
          size={size || 32}
          className={twMerge("mr-3 sm:mr-6", iconClassName)}
        />
      )}
      {icon === "door" && (
        <BsDoorOpenFill
          size={size || 32}
          className={twMerge("mr-3 sm:mr-6", iconClassName)}
        />
      )}
      {icon === "laundry" && (
        <MdOutlineLocalLaundryService
          size={size || 32}
          className={twMerge("mr-3 sm:mr-6", iconClassName)}
        />
      )}
      {icon === "heating" && (
        <FaTemperatureHigh
          size={size || 32}
          className={twMerge("mr-3 sm:mr-6", iconClassName)}
        />
      )}
      {icon === "stairs" && (
        <GiStairs
          size={size || 32}
          className={twMerge("mr-3 sm:mr-6", iconClassName)}
        />
      )}
      {icon === "bed" && (
        <FaBed
          size={size || 32}
          className={twMerge("mr-3 sm:mr-6", iconClassName)}
        />
      )}
      {icon === "tv" && (
        <MdMonitor
          size={size || 32}
          className={twMerge("mr-3 sm:mr-6", iconClassName)}
        />
      )}
      {icon === "phone" && (
        <FaPhoneVolume
          size={size || 32}
          className={twMerge("mr-3 sm:mr-6", iconClassName)}
        />
      )}
      {icon === "mail" && (
        <GoMail
          size={size || 32}
          className={twMerge("mr-3 sm:mr-6", iconClassName)}
        />
      )}
      {icon === "fb" && (
        <GrFacebook
          size={size || 32}
          className={twMerge("mr-3 sm:mr-6", iconClassName)}
        />
      )}
      <p className={twMerge("", pClassName)}>{content}</p>
    </div>
  );
};

export default IconBox;
