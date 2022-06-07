import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { Link, Menu, NavArea } from "./styles";

interface IMenu {
  name: string;
  title: string;
  path: string;
  active?: boolean;
}

interface ISideBar {
  setMenuTitle: Function;
}

export const SideBar: React.FC<ISideBar> = ({ setMenuTitle }) => {
  let menus: any = [];
  const { getPayload } = useAuth();

  if (getPayload().type === "teacher") {
    menus = [
      {
        name: "Máterias",
        path: "/professor/materias",
        title: "Materias",
      },
      {
        name: "Horários",
        path: "/professor/horarios",
        title: "Horários",
      },
    ];
  }

  if (getPayload().type === "admin") {
    menus = [
      {
        name: "Usuários",
        path: "/usuarios",
        title: "Usúarios",
      },
      {
        name: "Máterias",
        path: "/materias",
        title: "Materias",
      },
      {
        name: "Horários",
        path: "/horarios",
        title: "Horários",
      },
    ];
  }

  const [menu, setMenu] = useState<Array<IMenu>>(menus);

  const route = useHistory();

  const changeTitleHead = (title: string) => {
    let defaultTitle = "ClassMate";
    const titleEl = document.querySelector("title");
    if (titleEl) {
      titleEl.text = `${defaultTitle} - ${title}`;
    }

    setMenuTitle(title);
  };

  useEffect(() => {
    let newMenu: Array<IMenu> = [];
    let title = "";
    menu.forEach((m) => {
      if (route.location.pathname === "/" && m.path === "/") {
        m.active = true;
        title = m.title;
      } else if (
        route.location.pathname.indexOf(m.path) > -1 &&
        m.path !== "/"
      ) {
        m.active = true;
        title = m.title;
      } else {
        m.active = false;
      }
      newMenu.push(m);
    });
    setMenu(newMenu);
    changeTitleHead(title);
  }, [route.location.pathname]); // eslint-disable-line

  return (
    <NavArea>
      <Menu>
        {menu.map((menu) => {
          return (
            <li key={menu.title}>
              <Link
                to={menu.path}
                linkactive={menu.active ? "true" : "false"}
                key={menu.path}
              >
                <span>{menu.title}</span>
              </Link>
            </li>
          );
        })}
      </Menu>
    </NavArea>
  );
};
