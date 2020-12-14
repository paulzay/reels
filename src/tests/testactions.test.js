import { changeFilter } from '../redux/actions/index';

describe('actions', () => {
  test('should filter the network types', () => {
    const network = 'Reality';
    const expectedAction = {
      type: 'CHANGE_FILTER',
      network,
    };
    expect(changeFilter(network)).toEqual(expectedAction);
  });
});
