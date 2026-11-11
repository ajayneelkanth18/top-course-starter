
import React from "react";
import Card from "./Card";

const Cards = (props) => {

    let course = props.course;
    let likedCourse = props.likedCourse;
    let category =props.category;
    let setLikedCourse = props.setLikedCourse;

    let allCourse = [];

    const getCourse = () => {
        if(category==="All"){
             Object.values(course).forEach((courseCategory) => {
            courseCategory.forEach((course) => {
                allCourse.push(course);
            });
        });

        return allCourse;
        }
       else{
        return course[category];
       }
    }

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">

            {!course ? (
                <p>No Courses Found</p>
            ) : (
                getCourse().map((course) => {
                    return (
                        <Card
                            key={course.id}
                            course={course}
                            likedCourse={likedCourse}
                            setLikedCourse={setLikedCourse}
                        />
                    );
                })
            )}

        </div>
    )
}

export default Cards;
