import s from "./style.module.css";
import {Search as SearchIcon} from "react-bootstrap-icons"
export function SearchBar({onSubmit}){
    function submit(e){
        if(e.key === "Enter"){
            onSubmit(e.target.value);
        }
    }
    return(
        <>
            <SearchIcon size={27} className={s.icon}></SearchIcon>
            <input className={s.input} type="text" placeholder="Search a tv show" onKeyUp={submit}/>
        </>
    );
}