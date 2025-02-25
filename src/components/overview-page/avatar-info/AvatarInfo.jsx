import { Avatar } from '@edx/paragon';
import { useContext } from 'react';
import { AppContext } from '@edx/frontend-platform/react';
import { FormattedMessage } from '@edx/frontend-platform/i18n';

const AvatarInfo = () => {
  const { authenticatedUser } = useContext(AppContext);
  return (
    <div className="d-flex align-items-center avatar-wrapper ">
      <Avatar className="mr-3 flex-shrink-0" size="xl" />
      <div className="d-flex flex-column w-100">
        <div className="d-flex justify-content-between mb-2">
          <div className="d-flex">
            <h3 className="mr-2">
              <span className="mr-1">
                <FormattedMessage id="profile.hi.text" defaultMessage="Hi," />
              </span>
              <span>{authenticatedUser?.username}</span>
            </h3>
            {/* <Badge>Pro</Badge> */}
          </div>
          {/* <span>Access expired on 22 Jul 2022</span> */}
        </div>
        <span className="overview-email-title">
          {authenticatedUser?.email}{' '}
        </span>
      </div>
    </div>
  );
};
export default AvatarInfo;
