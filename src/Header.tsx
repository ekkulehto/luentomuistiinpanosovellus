import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Link } from "react-router";

export default function Header() {
  return (
    <div className="flex flex-row justify-center mb-20">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to={"/"}>
              <p className={navigationMenuTriggerStyle()}>Etusivu</p>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to={"/notelist"}>
              <p className={navigationMenuTriggerStyle()}>Muistiinpanot</p>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to={"/courses"}>
              <p className={navigationMenuTriggerStyle()}>Kurssit</p>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
