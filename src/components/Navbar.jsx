import { MdFlight, MdTrain } from "react-icons/md";
import { FaShip, FaCar } from "react-icons/fa";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex">
      <NavbarItem title="flight" address="/flight" Icon={ MdFlight } />
      <NavbarItem title="trains" address="/train" Icon={ MdTrain } />
      <NavbarItem title="ship" address="/ship" Icon={ FaShip } />
      <NavbarItem title="cars" address="/car" Icon={ FaCar} />
    </div>
  );
}
