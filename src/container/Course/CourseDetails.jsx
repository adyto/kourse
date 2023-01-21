import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '../../client';

const CourseDetails = () => {
  const { slug } = useParams();
  const [detailCourse, setDetailCourse] = useState([]);

  useEffect(() => {
    const query = `*[_type == "course" && slug.current == '${slug}'][0]`;

    client.fetch(query).then((data) => {
      setDetailCourse(data);
    });
  }, []);

  console.log(detailCourse);
  return (
    <div>
      <h1>{detailCourse.title}</h1>
    </div>
  );
};

export default CourseDetails;
