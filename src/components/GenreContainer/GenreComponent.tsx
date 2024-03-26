import {FC} from 'react';

interface IProps {
    name: string
}

const GenreComponent: FC<IProps> = ({name}) => {
    return (
        <span>{name}

        </span>
    );
};

export {GenreComponent};