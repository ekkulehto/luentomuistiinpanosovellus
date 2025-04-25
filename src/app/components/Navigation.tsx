import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { useMediaQuery } from "@custom-react-hooks/use-media-query";
import { Link } from "react-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function Navigation() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div
      className={
        isDesktop
          ? "flex flex-row justify-center mb-20"
          : "flex flex-row justify-center mb-15"
      }
    >
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to={"/"}>
              <p className={navigationMenuTriggerStyle()}>Etusivu</p>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to={"/notes"}>
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
