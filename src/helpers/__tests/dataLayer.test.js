import expect from 'expect';
import {pushEvent} from '../datalayer';

describe('dataLayer push', () => {
  it('should push to datalayer', () => {
    const dl = {
      push: () => {},
    };
    const spy = expect.spyOn(dl, 'push');
    const eventObject = {
      eventCategory: 'test category',
      eventAction: 'test action',
    };
    pushEvent(eventObject, dl);
    expect(spy).toHaveBeenCalledWith({
      event: 'GAEvent',
      eventCategory: 'test category',
      eventAction: 'test action',
      eventLabel: undefined,
      eventValue: undefined,
    });
  });
});
