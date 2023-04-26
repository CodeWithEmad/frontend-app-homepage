/* eslint-disable react/prop-types */
import { Button, Icon, Skeleton } from '@edx/paragon';
import {
  BookOpen, DrawShapes, Groups, Share,
} from '@edx/paragon/icons';
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import partnerBanner from '../../../assets/card-image-cap-partner.png';
import logoPlaceholder from '../../../assets/card-placeholder.png';

const PartnerHeader = ({ partnerData, loading }) => {
  const [showMore, setShowMore] = useState(false);
  const [showShowMoreButton, setShowMoreButton] = useState(false);
  const pElement = useRef(null);

  useEffect(() => {
    if (pElement.current?.offsetHeight >= 112) {
      setShowMoreButton(true);
    }
  }, [pElement.current?.offsetHeight]);
  return (
    <>
      <div className="banner-container">
        <div className="partner-img-wrapper">
          <img
            src={partnerData?.header ? partnerData?.header : partnerBanner}
            alt="partnerBanner"
          />
        </div>
        <div className="partner-logo-container">
          <div className="partner-logo-wrapper">
            <img
              src={partnerData?.organization.logo ?? logoPlaceholder}
              alt="partnerLogo"
            />
          </div>
          <Icon
            className="color-gray-500 share-icon"
            src={Share}
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
            }}
          />
        </div>
      </div>
      <div className="custom-container desc-partner-wrapper">
        <div className="d-flex justify-content-between align-items-center mb-3">
          {loading ? (
            <div className="w-100">
              <Skeleton width="30%" height={44} />
            </div>
          ) : (
            <h1>{partnerData?.organization.name}</h1>
          )}
          <Icon
            className="color-gray-500 share-icon"
            src={Share}
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
            }}
          />
        </div>
        <div>
          <p
            ref={pElement}
            className={classNames('mb-2', {
              'long-desc-break': !showMore,
            })}
          >
            {loading ? (
              <Skeleton count={4} width="100%" height={24} />
            ) : (
              partnerData?.organization?.description
            )}
          </p>
          {showShowMoreButton && (
          <Button
            variant="tertiary"
            className="showMore-btn mb-4"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Show less' : 'Show more'}
          </Button>
          )}
        </div>
        <div className="d-flex justify-content-center partner-snapshot-wrapper mt-2">
          <a className="icon-wrapper" href="#courses">
            <Icon src={BookOpen} />
            <span className="partner-title">Courses</span>
            <span className="partner-count">{partnerData?.courses_count}</span>
          </a>
          <div className="vertical-line" />
          <div className="icon-wrapper" href="#">
            <Icon src={DrawShapes} />
            <span className="partner-title">Learners</span>
            <span className="partner-count">0</span>
          </div>
          <div className="vertical-line" />
          <a className="icon-wrapper" href="#instructors">
            <Icon src={Groups} />
            <span className="partner-title">Instructors</span>
            <span className="partner-count">0</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default PartnerHeader;
