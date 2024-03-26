import {FC, useEffect} from 'react';
import {useAppDispatch} from "../../../../hooks/useAppDispatch";
import {useAppSelector} from "../../../../hooks/useAppSelector";
import {castsActions} from "../../../../store";
import {ICast} from "../../../../interfaces/castInterface";
import {urls} from "../../../../constants";
import css from './castComponent.module.css'

interface IProps {
    cast: ICast
}

const CastComponent: FC<IProps> = ({cast}) => {
const {name,popularity,profile_path} = cast;
    return (
        <div className={css.castContainer}>
            <img src={urls.poster.base(profile_path)} alt={name} />
            <p> {name}</p>
        </div>
    );
};

export {CastComponent};