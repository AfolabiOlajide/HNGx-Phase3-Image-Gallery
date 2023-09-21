'use client'
import { useState } from "react";
import {
    DndContext,
    closestCenter,
    MouseSensor,
    TouchSensor,
    useSensor,
    useSensors,
    KeyboardSensor,
} from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    rectSortingStrategy,
} from "@dnd-kit/sortable";

// local exports
import { imageData } from "@/lib/exports";
import ImageCard from "../components/ImageCard";



const ApplicationPage = () => {
    const [items, setItems] = useState<ImageD[]>(imageData);
    // const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor), useSensor(KeyboardSensor));


    function handleDragEnd(event: any) {
        const { active, over } = event;

        if (active.id !== over.id) {
            setItems((items) => {
                const oldIndex = items.findIndex(item => item.id === active.id)
                const newIndex = items.findIndex(item => item.id === over.id)
                return arrayMove(items, oldIndex , newIndex );
            });
        }
    }

    function handleSearchChange (e: React.ChangeEvent<HTMLInputElement>) {

        if(e.target.value === ""){
            setItems(imageData);
        }else{
            const filteredByTag = items.filter(item => item.tag.includes(`${e.target.value}`))
            setItems(filteredByTag)
        }
    }


    return (
        <div className="image-gallery w-[90%] md:w-[80%] mx-auto">
            <div className="search w-full">
                <input onChange={(e) => handleSearchChange(e)} type="text" placeholder="search tag" className="bg-transparent mx-auto block mb-[2rem] w-full md:w-[60%] outline-none border border-primary/70 rounded-md p-[1rem] text-white focus:ring focus:ring-primary/60" />
            </div>
            <h1 className="mb-[2rem] text-[2rem] text-gradient">Gallery</h1>
            <DndContext
                // sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
            >
                <SortableContext items={items} strategy={rectSortingStrategy}>
                <div className="gallery grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[2rem]">
                    {items.map((image, index) => (
                        <ImageCard
                            key={index}
                            id={image.id}
                            tag={image.tag}
                            url={image.url}
                            index={index}
                        />
                    ))}
                </div>
                </SortableContext>

                {
                    items.length === 0 && <div>No Image with this tag</div>
                }
            </DndContext>
        </div>
    );
};

export default ApplicationPage;
