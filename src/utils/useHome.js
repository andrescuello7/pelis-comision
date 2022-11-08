import { useState, useEffect } from "react";
import axios from "axios";

function UseHome() {
    const [page, setpage] = useState(1);
    const [movie, setmovie] = useState([]);
    const [input, setinput] = useState("games");
    const [disabled, setdisabled] = useState(true);

    useEffect(() => {
        GetMethod();
    }, [page]);

    async function GetMethod() {
        let { data } = await axios.get(`https://www.omdbapi.com/?s=${input}&page=${page}&apikey=a3cb6a25`)
        setmovie(data.Search);
    }

    function OnChangeInput(e) {
        // e.preventDefault();
        let result = e.target.value
        setinput(result)
        if (input != "") {
            setdisabled(false)
        } else {
            setdisabled(true)
        }
    }

    function SearchMovie() {
        GetMethod();
        if (input == "") {
            setdisabled(true)
        } else {
            setdisabled(false)
        }
    }

    function PaginationMethod(bool) {
        if (bool) {
            setpage(page + 1)
        } else {
            setpage(page - 1)
        }
    }

    return {
        page,
        movie,
        disabled,
        SearchMovie,
        OnChangeInput,
        PaginationMethod,
        setpage
    }
}
export default UseHome;