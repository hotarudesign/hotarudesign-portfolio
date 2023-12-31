import Link from "next/link";
import classes from "src/component/Header/Nav/Nav.module.scss";

const NAV_ITEMS = [
  { href: "/about", label: "About" },
  { href: "/works", label: "Works" },
  { href: "https://forms.gle/QYq4gqxE5wXoMCY98", label: "Contact" },
];

export const Nav = () => {
  return (
    <nav className={classes.gnav}>
      <ul className={classes.gnav__list}>
        {NAV_ITEMS.map((item) => {
          return (
            <li key={item.href} className={classes.gnav__item}>
              <Link href={item.href} legacyBehavior scroll={false}>
                <a>{item.label}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
