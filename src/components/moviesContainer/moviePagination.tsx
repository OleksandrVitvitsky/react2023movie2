import {useAppSelector} from "../../hooks/useAppSelector";
import {useEffect} from "react";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {paginationActions} from "../../store";

const MoviePagination = () => {
    const dispatch = useAppDispatch();
    const {total_pages} = useAppSelector(state => state.movies)
    const {currentButton,arrayCurrentButtons} = useAppSelector(state => state.pagination)

    const numberOfPages:any[] = []
    for (let i = 1; i <= total_pages; i++) {
        numberOfPages.push(i)
    }
    useEffect(() => {
        let tempNumberOfPages:any[] = [...arrayCurrentButtons]

        let dotsInitial:string|number = '...'
        let dotsLeft :string|number   = '... '
        let dotsRight:string|number   = ' ...'

        if (numberOfPages.length < 6) {
            tempNumberOfPages = numberOfPages
        }

        else if (currentButton >= 1 && currentButton <= 3) {
            tempNumberOfPages = [1, 2, 3, 4, dotsInitial, numberOfPages.length]
        }

        else if (currentButton === 4) {
            const sliced = numberOfPages.slice(0, 5)
            tempNumberOfPages = [...sliced, dotsInitial, numberOfPages.length]
        }

        else if (currentButton > 4 && currentButton < numberOfPages.length - 2) {               // from 5 to 8 -> (10 - 2)
            const sliced1 = numberOfPages.slice(currentButton - 2, currentButton)                 // sliced1 (5-2, 5) -> [4,5]
            const sliced2 = numberOfPages.slice(currentButton, currentButton + 1)                 // sliced1 (5, 5+1) -> [6]
            tempNumberOfPages = ([1, dotsLeft, ...sliced1, ...sliced2, dotsRight, numberOfPages.length]) // [1, '...', 4, 5, 6, '...', 10]
        }

        else if (currentButton > numberOfPages.length - 3) {                 // > 7
            const sliced = numberOfPages.slice(numberOfPages.length - 4)       // slice(10-4)
            tempNumberOfPages = ([1, dotsLeft, ...sliced])
        }

        else if (currentButton === dotsInitial) {
            // [1, 2, 3, 4, "...", 10].length = 6 - 3  = 3
            // arrOfCurrButtons[3] = 4 + 1 = 5
            // or
            // [1, 2, 3, 4, 5, "...", 10].length = 7 - 3 = 4
            // [1, 2, 3, 4, 5, "...", 10][4] = 5 + 1 = 6
            // setCurrentButton(arrOfCurrButtons[arrOfCurrButtons.length-3] + 1)
            dispatch(paginationActions.setCurrentBottom(arrayCurrentButtons[arrayCurrentButtons.length-3] + 1))
        }
        else if (currentButton === dotsRight) {
            // setCurrentButton(arrOfCurrButtons[3] + 2)
            let currentButtonRight:number = arrayCurrentButtons[3]
            dispatch(paginationActions.setCurrentBottom(currentButtonRight + 2))
        }

        else if (currentButton === dotsLeft) {
            let currentButtonLeft:number = arrayCurrentButtons[3]
            dispatch(paginationActions.setCurrentBottom(currentButtonLeft- 2))

        }
        dispatch(paginationActions.setArrayOfCurrentBottoms(tempNumberOfPages))
        dispatch(paginationActions.setCurrentPage(tempNumberOfPages))
        // setArrOfCurrButtons(tempNumberOfPages)
        // setCurrentPage(currentButton)
    }, [currentButton])



    return (
        <div className="pagination-container">
            <a
                href="#"
                className={`${currentButton === 1 ? 'disabled' : ''}`}
                onClick={() => setCurrentButton(prev => prev <= 1 ? prev : prev - 1)}
            >
                Prev
            </a>

            {arrOfCurrButtons.map(((item, index) => {
                return <a
                    href="#"
                    key={index}
                    className={`${currentButton === item ? 'active' : ''}`}
                    onClick={() => setCurrentButton(item)}
                >
                    {item}
                </a>
            }))}

            <a
                href="#"
                className={`${currentButton === numberOfPages.length ? 'disabled' : ''}`}
                onClick={() => setCurrentButton(prev => prev >= numberOfPages.length ? prev : prev + 1)}
            >
                Next
            </a>
        </div>
    );
};

export {MoviePagination};