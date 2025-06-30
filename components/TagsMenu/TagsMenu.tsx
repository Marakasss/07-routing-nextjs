"use client";

import { RefObject, useEffect, useRef, useState } from "react";
import css from "./TagsMenu.module.css";
import Link from "next/link";
import { tags } from "@/constants/tags";
import { useHover } from "usehooks-ts";

const TagsMenu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const handleMenuToggle = () => setMenuIsOpen(!menuIsOpen);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuIsOpen(false);
    }
  };

  const isBtnHover = useHover(menuBtnRef as RefObject<HTMLButtonElement>);
  const isMenuHover = useHover(menuRef as RefObject<HTMLDivElement>);
  const isHover = isBtnHover || isMenuHover;
  useEffect(() => {
    if (!isHover) {
      const timeOut = setTimeout(() => setMenuIsOpen(false), 300);
      return () => clearTimeout(timeOut);
    } else {
      setMenuIsOpen(true);
    }
  }, [isHover]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef} className={css.menuContainer}>
      <button
        ref={menuBtnRef}
        onClick={handleMenuToggle}
        className={css.menuButton}
      >
        Notes ▾
      </button>
      {menuIsOpen && (
        <ul className={css.menuList}>
          {tags.map((tag) => (
            <li key={tag} className={css.menuItem}>
              <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TagsMenu;
