import { Header } from "../../LayoutArea/Header/Header";
import { Copyrights } from "../Copyrights/Copyrights";
import { Menu } from "../Menu/Menu";
import { Routing } from "../Routing/Routing";
import "./Layout.css";

export function Layout(): JSX.Element {
    return (
        <div className="Layout">
            <header>
                <Header></Header>
            </header>
            <aside>
                <Menu></Menu>
            </aside>
            <main>
             <Routing></Routing>
            </main>
            <footer>
                <Copyrights></Copyrights>
            </footer>
        </div>
    );
}
