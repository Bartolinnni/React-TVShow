import s from "./style.module.css"
import { TVShowAPI } from "./api/tv-show";
import { useEffect, useState } from "react";
import { BACKDROP_BASE_URL } from "./config";
import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";
import { TVShowListItem } from "./components/TVShowListItem/TVShowListItem";
import { TVShowList } from "./components/TVShowList/TVShowList";
TVShowAPI.fetchPopulars();
export function App(){
    const [currentTVShow, setCurrentTvShow] = useState();
    const [recommendationList, setRecommendationList] = useState([]);

    
    useEffect( () => {
        (async ()=>{
            const popularTVShowList = await TVShowAPI.fetchPopulars();
            if(popularTVShowList.length > 0) {
                setCurrentTvShow(popularTVShowList[0])
            }
        })();
    }, []);

    async function fetchRecommendations(tvShowId) {
        const recommendationListResp = await TVShowAPI.fetchRecommendations(
          tvShowId
        );
        if (recommendationListResp.length > 0) {
          setRecommendationList(recommendationListResp.slice(0, 10));
        }
      }
    useEffect(() => {
        if (currentTVShow) {
          fetchRecommendations(currentTVShow.id);
        }
      }, [currentTVShow]);


    function updateCurrentTVShow(tvShow){
      setCurrentTvShow(tvShow);
    }

    return(
        <div className={s.main_container}
        style={{
            background: currentTVShow
              ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
                 url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
              : "black",
          }}>
            <div className={s.header}>
                <div className="row">
                    <div className="col-4">
                        <div>LOGO</div>
                        <div>Subitit</div>

                    </div>
                    
                    
                    <div className="col-md-12 col-lg-4">
                        <input style= {{width:"100%"}}type="text"></input>
                    </div>
                </div>
            </div>
            <div className={s.tv_show_detail}>{ currentTVShow && <TVShowDetail tvShow={currentTVShow}></TVShowDetail>}</div>
            <div className={s.recommended_tv_shows}>{currentTVShow &&<TVShowList onClickItem = {updateCurrentTVShow} tvShowList={recommendationList}></TVShowList>}</div>
        </div>
    );
}