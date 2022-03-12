import {
  ADMIN,
  STAFF,
  AUTHENTICATED,
  LOADING,
  UNAUTHENTICATED,
  STAFFS,
} from '../constant/GlobalConstants';

class SellercentralControl {
  #baseUrl;
  #adminAccess;
  #page;

  constructor(paramUsername, session, status, menus, page) {
    this.paramUsername = paramUsername;
    this.session = session;
    this.status = status;
    this.authorized = false;
    this.#adminAccess = menus;
    this.#baseUrl = '';
    this.#page = page;
  }

  getBaseUrl = () => {
    if (this.status === AUTHENTICATED && this.session !== undefined) {
      this.#baseUrl = `/sellercentral/${this.status}/${this.session.user.role}/${this.session.user.username}`;
    }

    return this.#baseUrl;
  };

  authorizedPageAccess = () => {
    switch (this.status) {
      case LOADING:
        return [
          (this.authorized = false),
          [
            {
              type: LOADING,
              message: 'Authentication in process! Please wait...',
            },
          ],
        ];
      case UNAUTHENTICATED:
        return [
          (this.authorized = false),
          [{ type: UNAUTHENTICATED, message: 'Not Authorized!' }],
        ];
      case AUTHENTICATED:
        if (
          this.session !== undefined &&
          this.paramUsername !== this.session.user.username
        ) {
          return [
            (this.authorized = false),
            [{ type: UNAUTHENTICATED, message: 'Not Authorized!' }],
          ];
        }

        if (
          this.session !== undefined &&
          this.session.user.role === ADMIN &&
          this.#page === ADMIN
        ) {
          const additionalField = [
            {
              name: 'staffs',
              id: 'staffs',
              link: '/staffs',
              type: `${STAFFS}`,
            },
          ];

          this.#adminAccess = this.#adminAccess.concat(additionalField);

          return [(this.authorized = true), this.#adminAccess];
        }
        if (
          this.session !== undefined &&
          this.session.user.role === STAFF &&
          this.#page === STAFF
        ) {
          return [(this.authorized = true), this.#adminAccess];
        }
      default:
        return [
          (this.authorized = false),
          [{ type: UNAUTHENTICATED, message: 'Not Authorized!' }],
        ];
    }
  };
}

export default SellercentralControl;
