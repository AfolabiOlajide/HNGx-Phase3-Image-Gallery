import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import Image from "next/image";

type ImageCardProps = {
    url: string;
    id: number;
    tag: string;
    index: number;
};

const ImageCard = ({ url, id, tag, index }: ImageCardProps) => {
    const sortable = useSortable({id: id,});
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = sortable;

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        transformOrigin: '0 0',
    };
    

    return (
        <div ref={setNodeRef} {...attributes} {...listeners} style={style} className="touch-none image-card bg-dark rounded-md ring-2 ring-secondary/30 hover:ring-secondary/60 p-[.2rem] trans">
            <div className="img w-full aspect-square overflow-hidden rounded-md">
                <Image
                    className={`w-full`}
                    src={url}
                    width={30}
                    height={30}
                    alt={tag}
                    unoptimized
                />
            </div>
            <div className="tag my-[1rem]">
                <span className="block bg-grad-light p-[.5rem] lg:p-[1rem] w-max rounded-md">#{tag}</span>
            </div>
        </div>
    );
};

export default ImageCard;
