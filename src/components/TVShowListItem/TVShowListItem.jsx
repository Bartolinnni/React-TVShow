import s from "./style.module.css"
import { SMALL_IMG_COAVER_BASE_URL } from "../../config"
const MAX_TITLE_CHAR = 20;
export function TVShowListItem({tvShow, onClick}){
    const OnClick_ = () => {
        onClick(tvShow);
    };
    return(
        <div className={s.container} onClick = {OnClick_}>
            <img alt={tvShow.name} src={SMALL_IMG_COAVER_BASE_URL + tvShow.backdrop_path} className={s.img}></img>
            <div className={s.title}>{tvShow.name.length > MAX_TITLE_CHAR ? tvShow.name.slice(0,33) + "..." : tvShow.name}</div>
        </div>
    );
}