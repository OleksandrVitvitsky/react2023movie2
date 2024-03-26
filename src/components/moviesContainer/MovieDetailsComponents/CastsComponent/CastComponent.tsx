import {FC} from 'react';

import {ICast} from "../../../../interfaces/castInterface";
import {urls} from "../../../../constants";

import css from './CastComponent.module.css'

interface IProps {
    cast: ICast
}

const CastComponent: FC<IProps> = ({cast}) => {
    const {name, popularity, profile_path} = cast;
    return (
        <div className={css.castContainer}>
            <img src={urls.poster.base(profile_path)} alt={name}/>
            <p> {name}</p>
        </div>
    );
};

export {CastComponent};