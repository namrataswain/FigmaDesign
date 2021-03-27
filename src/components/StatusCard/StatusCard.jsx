import React from "react";

const StatusCard = ({ course }) => {
  return (
    <div>
      <div class="card" style={{ backgroundColor: "#E4E5E8" }}>
        <div class="card-content">
          <div class="content columns">
            <div className="column box is-1">
              <img src={course.url} alt="logos" />
            </div>
            <div class="column is-4">
              <p>
                <strong>{course.courseName}</strong>
              </p>
              <p>by {course.author}</p>
            </div>
            <div className="column is-3">
              <span class="icon-text">
                <span class="icon">
                  <i class="fas fa-clock"></i>
                </span>
                <span>{course.duration}</span>
              </span>
            </div>
            <div className="column is-2">
              <span class="icon-text">
                <span class="icon">
                  <i class="fas fa-fire"></i>
                </span>
                <span>{course.rating}</span>
              </span>
            </div>
            <div className="column">
              <button className="button is-outlined">View Course</button>
            </div>
          </div>
        </div>
      </div>
      <section className="Section" style={{ paddingTop: "10px" }}></section>
    </div>
  );
};

export default StatusCard;
