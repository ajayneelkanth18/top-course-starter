
import React from 'react';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';

const Card = (props) => {

    let course = props.course;
    let likedCourse = props.likedCourse;
    let setLikedCourse = props.setLikedCourse;

    function clickHandler() {

        if (likedCourse.includes(course.id)) {

            // Already liked
            setLikedCourse((prev) =>
                prev.filter((cid) => cid !== course.id)
            );

            toast.warning("Like Removed");

        }
        else {

            // Not liked
            setLikedCourse((prev) => [...prev, course.id]);

            toast.success("Liked Successfully");
        }
    }

    return (
        <div className="w-[300px] bg-bgDark rounded-md overflow-hidden">

            <div className="relative">
                <div className="rounded-sm">
                    <img
                        src={course.image.url}
                        alt={course.title}
                    />
                </div>

                <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center">

                    <button className="hover:scale-110" onClick={clickHandler}>
                        {
                            likedCourse.includes(course.id)
                                ? <FcLike fontSize="1.75rem" />
                                : <FcLikePlaceholder fontSize="1.75rem" />
                        }
                    </button>

                </div>
            </div>

            <div className="p-4">
                <p className="text-white font-bold text-lg leading-6">
                    {course.title}
                </p>

                <p className="text-white mt-2">
                    {
                        course.description.length > 100
                            ? course.description.substr(0, 100) + "..."
                            : course.description
                    }
                </p>
            </div>

        </div>
    )
}

export default Card;
