// Import all images at the top
import fireIcon from "../assets/images/Elements/Fire.webp";
import iceIcon from "../assets/images/Elements/Ice.webp";
import physicalIcon from "../assets/images/Elements/Physical.webp";
import windIcon from "../assets/images/Elements/Wind.webp";
import quantumIcon from "../assets/images/Elements/Quantum.webp";
import imaginaryIcon from "../assets/images/Elements/Imaginary.webp";
import lightningIcon from "../assets/images/Elements/Lightning.webp";

import destructionIcon from "../assets/images/Paths/Destruction.webp";
import harmonyIcon from "../assets/images/Paths/Harmony.webp";
import nihilityIcon from "../assets/images/Paths/Nihility.webp";
import preservationIcon from "../assets/images/Paths/Preservation.webp";
import huntIcon from "../assets/images/Paths/Hunt.webp";
import eruditionIcon from "../assets/images/Paths/Erudition.webp";
import abundanceIcon from "../assets/images/Paths/Abundance.webp";

import questionmarkImage from "../assets/images/QuestionMarkwhite.png";

// Map element names to their respective image imports
const elementImages: Record<string, string> = {
  Fire: fireIcon,
  Ice: iceIcon,
  Physical: physicalIcon,
  Wind: windIcon,
  Quantum: quantumIcon,
  Imaginary: imaginaryIcon,
  Lightning: lightningIcon,
};

const pathImages: Record<string, string> = {
  Destruction: destructionIcon,
  Harmony: harmonyIcon,
  Nihility: nihilityIcon,
  Preservation: preservationIcon,
  Hunt: huntIcon,
  Erudition: eruditionIcon,
  Abundance: abundanceIcon,
};

export function getQuestionmarkImage() {
  return questionmarkImage;
}

// Function to get an element image by name
export function getElementImage(element: string) {
  return elementImages[element];
}

// Function to get a path image by name
export function getPathImage(path: string) {
  return pathImages[path];
}
