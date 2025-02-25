/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Skeleton } from '@edx/paragon';
import { ArrowForward } from '@edx/paragon/icons';
import { useHistory, useParams } from 'react-router-dom';

import { FormattedMessage } from '@edx/frontend-platform/i18n';
import useGetInstructor from '../../hooks/useGetInstructor';
import CourseCardNew from '../shared/course-card/CourseCardNew';
import CourseCardSkeleton from '../shared/skeleton/CourseCardSkeleton';
import InstructorHeader from './instructor/InstructorHeader';

const Instructor = () => {
  const { slug } = useParams();
  const { InstructorData, loading } = useGetInstructor(slug);
  const history = useHistory();

  return (
    <main>
      <InstructorHeader InstructorData={InstructorData} loading={loading} />
      <div className="custom-container d-flex flex-column pb-5">
        <h2 className="d-flex popular-courses-wrapper">
          <span className="ml-2">
            <FormattedMessage
              id="popularCourses.firstPartTitle.text"
              defaultMessage="Popular"
            />
          </span>
          <span className="highlighted ml-2">
            <FormattedMessage
              id="popularCourses.secondPartTitle.text"
              defaultMessage="Courses"
            />
          </span>
        </h2>
        <div className="course-container mb-4">
          {loading
            ? Array(4)
              .fill(1)
              .map((item, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <CourseCardSkeleton key={i} />
              ))
            : InstructorData?.courses?.map((course) => (
              <CourseCardNew course={course} key={course.slug} />
            ))}
        </div>
        <div className="d-flex justify-content-center">
          {loading ? (
            <Skeleton
              width={276}
              height={44}
              className="view-all-courses-btn"
            />
          ) : (
            <Button
              className="view-all-courses-btn"
              iconAfter={ArrowForward}
              onClick={() => history.push('/discover')}
            >
              <FormattedMessage
                id="viewAllCourses.button"
                defaultMessage="View All Courses"
              />
            </Button>
          )}
        </div>
      </div>
    </main>
  );
};

export default Instructor;
