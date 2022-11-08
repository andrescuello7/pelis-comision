import "./HomePage.css";
import { Button, Pagination, Spinner } from "react-bootstrap";
import CardComponent from "../../components/Card/CardComponent";

//UseHome hook
import useHome from "../../utils/useHome";

function HomePage() {
    const {
        OnChangeInput,
        PaginationMethod,
        SearchMovie,
        disabled,
        setpage,
        movie,
        page,
    } = useHome();

    const MapMovie =
        movie.map((item, i) => (
            <CardComponent
                key={i}
                image={item.Poster}
                title={item.Title}
                type={item.Type}
            />
        )
    )


    return (
        <div>
            <div className="d-flex justify-content-center pt-5">
                <div className="w-50 d-flex">
                    <input
                        type="text"
                        className="form-control"
                        onChange={OnChangeInput}
                        placeholder="busque su pelicula"
                    />
                    <Button
                        disabled={disabled}
                        className="btn btn-primary"
                        onClick={SearchMovie}>
                        Search
                    </Button>
                </div>
            </div>
            <div className="mt-5 d-flex justify-content-evenly flex-wrap">
                {MapMovie}
            </div>
            <div className="w-100 d-flex justify-content-center">
                <div className="mt-5">
                    <Pagination>
                        <Pagination.Item onClick={() => setpage(1)}>{1}</Pagination.Item>
                        <Pagination.Item onClick={() => setpage(2)}>{2}</Pagination.Item>
                        <Pagination.Item onClick={() => setpage(3)}>{3}</Pagination.Item>
                        <Pagination.Item onClick={() => setpage(4)}>{4}</Pagination.Item>
                        <Pagination.Item onClick={() => setpage(5)}>{5}</Pagination.Item>
                    </Pagination>
                </div>
            </div>
            <div className="w-100 d-flex justify-content-center">
                <div className="mb-4">
                    <Button className="btn btn-success mx-2" disabled={page == 1} onClick={() => PaginationMethod(false)}>Anterior</Button>
                    <Button className="btn btn-success mx-2" onClick={() => PaginationMethod(true)}>Siguiente</Button>
                </div>
            </div>
        </div>
    )
}
export default HomePage;