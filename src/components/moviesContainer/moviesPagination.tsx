import {useAppSelector} from "../../hooks/useAppSelector";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {moviePaginationActions} from "../../store";
import css from './moviesPagination.module.css'
import {total_pages} from "../../constants";

const MoviePagination = () => {
    const dispatch = useAppDispatch();
    // const {total_pages} = useAppSelector((state) => state.movies)

    const {currentPage} = useAppSelector((statePag) => statePag.moviePagination)


    const goToPage = (pageNumber: number) => {
        dispatch(moviePaginationActions.setCurrentPage(pageNumber));
    };

    const toNextPage = () => {
        dispatch(moviePaginationActions.goToNextPage(currentPage));
    };
    const toPrevPage = () => {
        dispatch(moviePaginationActions.goToPrevPage(currentPage));
    };

    const createPaginationButtons = () => {
        const buttons = [];
        const maxVisiblePages = 10; // Кількість видимих кнопок

        // // Логіка для кнопок 1 ... 10 ... totalPages
        // if (totalPages <= maxVisiblePages) {
        //     for (let i = 1; i <= totalPages; i++) {
        //         buttons.push(
        //             <button key={i} onClick={() => handleGoToPage(i)} disabled={currentPage === i}>
        //                 {i}
        //             </button>
        //         );
        //     }
        // } else {
            const start = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
            const end = Math.min(total_pages, start + maxVisiblePages - 1);

            if (start > 1) {
                buttons.push(
                    <button key={1} onClick={() => goToPage(1)}>
                        1
                    </button>
                );

                if (start > 2) {
                    buttons.push(<span key="ellipsis">...</span>);
                }
            }

            for (let i = start; i <= end; i++) {
                buttons.push(
                    <button key={i} onClick={() => goToPage(i)} disabled={currentPage === i}>
                        {i}
                    </button>
                );
            }

            if (end < total_pages) {
                if (end < total_pages - 1) {
                    buttons.push(<span key="endEllipsis">...</span>);
                }

                // buttons.push(
                //     <button key={totalPages} onClick={() => handleGoToPage(totalPages)}>
                //         {totalPages}
                //     </button>
                // );
            }
        if (total_pages - currentPage > 4 ) {
            buttons.push(
                     <button className={css.buttonGoToEndPage} onClick={() => goToPage(total_pages)}
                          disabled={currentPage === total_pages}>
                      {total_pages}
                     </button>
            )
        }
        // }

        return buttons;
    };

    return (
        <div className={css.buttonNavContainer}>
            <div className={css.btnNavigation}>
                {/*<button className={css.buttonGoToStartPage} onClick={() => goToPage(1)} disabled={currentPage === 1}>*/}
                {/*    start*/}
                {/*</button>*/}
                <button className={css.buttonPrevPage} onClick={toPrevPage} disabled={currentPage === 1}>
                    prev
                </button>
                {createPaginationButtons()}
                <button className={css.buttonNextPage} onClick={toNextPage} disabled={currentPage === total_pages}>
                    Next
                </button>

            </div>
        </div>
    )
};

export {MoviePagination};