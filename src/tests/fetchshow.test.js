
import shows from '../redux/reducers/shows';

describe('shows reducer', () => {
  it('should return the initial state', () => {
    expect(shows(undefined, {})).toEqual({
      shows: [],
      show: {},
      loading: false,
    });
  });

  it('should get all shows', () => {
    expect(
      shows([], {
        type: 'GET_SHOWS',
      }),
    ).toEqual({
      loading: false,
    });
  });
});