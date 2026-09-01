import HardHatIcon from "./HardHatIcon";
import RefreshIcon from "./RefreshIcon";
import CarIcon from "./CarIcon";
import BoltIcon from "./BoltIcon";
import CheckIcon from "./CheckIcon";
import PhoneIcon from "./PhoneIcon";
import HandsIcon from "./HandsIcon";
import ClipboardIcon from "./ClipboardIcon";
import MapPinIcon from "./MapPinIcon";
import NewspaperIcon from "./NewspaperIcon";
import BadgeCheckIcon from "./BadgeCheckIcon";
import ClockIcon from "./ClockIcon";

export const iconMap = {
  hardHat: HardHatIcon,
  refresh: RefreshIcon,
  car: CarIcon,
  bolt: BoltIcon,
  check: CheckIcon,
  phone: PhoneIcon,
  hands: HandsIcon,
  clipboard: ClipboardIcon,
  mapPin: MapPinIcon,
  newspaper: NewspaperIcon,
  badgeCheck: BadgeCheckIcon,
  clock: ClockIcon,
} as const;

export type IconName = keyof typeof iconMap;
