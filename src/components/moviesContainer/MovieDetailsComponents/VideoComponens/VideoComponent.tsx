import {FC} from 'react';
import {IVideo} from "../../../../interfaces";

interface IProps {
video:IVideo
}

const VideoComponent: FC<IProps> = ({video}) => {
    return (
        <div>
            VideoComponent
        </div>
    );
};

export {VideoComponent};