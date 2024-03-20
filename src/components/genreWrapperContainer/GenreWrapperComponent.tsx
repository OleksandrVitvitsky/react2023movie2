import {FC} from 'react';

interface IProps {
name:string
}

const GenreWrapperComponent: FC<IProps> = ({name}) => {
    return (
        <span>{name}</span>
    );
};

export {GenreWrapperComponent};