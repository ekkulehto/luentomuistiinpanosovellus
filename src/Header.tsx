import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
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
            <Link to="/">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Etusivu
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/notelist">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Muistiinpanot
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/addnewnote">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Lisää uusi muistiinpano
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/addnewcourse">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Lisää uusi kurssi
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
