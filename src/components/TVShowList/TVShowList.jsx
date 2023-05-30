import { TVShowListItem } from "../TVShowListItem/TVShowListItem";
import s from "./style.module.css"

export function TVShowList({tvShowList, onClickItem}){
    return (
        <div className={s.container}>
            <div className={s.title}>
                You'll probably like it!
            </div>
            <div className={s.list}>
                {
                    tvShowList.map((tvShow) => {
                        return <span className={s.tv_show_item}>
                            <TVShowListItem tvShow={tvShow} onClick = {onClickItem}> </TVShowListItem>
                        </span>
                    })
                }
            
                
            </div>
        </div>
    );
}