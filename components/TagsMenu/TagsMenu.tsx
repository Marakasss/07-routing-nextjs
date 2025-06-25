import { Tag } from "@/types/note"; // Тут тип
import css from "./TagsMenu.module.css";

const tags: Tag[] = ["Work", "Personal", "Meeting", "Shopping", "Todo"];

const TagsMenu = () => {
  return (
    <div className={css.menuContainer}>
      <button className={css.menuButton}>Notes ▾</button>
      <ul className={css.menuList}>
        {tags.map((tag) => (
          <li key={tag} className={css.menuItem}>
            <a href={`/notes/${tag.toLowerCase()}`} className={css.menuLink}>
              {tag}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagsMenu;
