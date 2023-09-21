'use client'
import { useState } from "react";
import {
    DndContext,
    closestCenter,
    MouseSensor,
    TouchSensor,
    DragOverlay,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    rectSortingStrategy,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";

// local exports
import { imageData } from "@/lib/exports";
import ImageCard from "../components/ImageCard";



const ApplicationPage = () => {
    const [items, setItems] = useState<ImageD[]>(imageData);
    const [activeId, setActiveId] = useState(null);
    const [searchParam, setSearchParam] = useState<string>("");
    const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

    function handleDragStart(event: any) {
        setActiveId(event.active.id);
    }

    function handleDragEnd(event: any) {
        const { active, over } = event;

        if (active.id !== over.id) {
            setItems((items) => {
                const oldIndex = items.findIndex(item => item.url === active.id)
                const newIndex = items.findIndex(item => item.url === over.id)
                return arrayMove(items, oldIndex , newIndex );
            });
        }

        setActiveId(null);
    }

    function handleDragCancel() {
        setActiveId(null);
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
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                onDragCancel={handleDragCancel}
            >
                <SortableContext items={items} strategy={verticalListSortingStrategy}>
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

                {/* <DragOverlay adjustScale={true}>
                    {activeId ? (
                        items.map((image, index) => (
                            <ImageCard
                                key={image.id}
                                id={image.id}
                                tag={image.tag}
                                url={image.url}
                                index={index}
                            />
                        ))
                    ) : null}
                </DragOverlay> */}
                {/* <div className="gallery grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[2rem]">
                    {items.map((image, index) => (
                        <ImageCard
                            key={image.id}
                            id={image.id}
                            tag={image.tag}
                            url={image.url}
                            index={index}
                        />
                    ))}
                </div> */}
            </DndContext>
        </div>
    );
};

export default ApplicationPage;
