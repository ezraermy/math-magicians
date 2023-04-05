import calculate from '../logic/calculate';

describe('calculate', () => {
  it('returns an empty object for the "AC" button', () => {
    expect(calculate({ total: '10', next: '5', operation: '+' }, 'AC')).toMatchSnapshot();
  });

  it('updates the "next" value correctly for a number button', () => {
    expect(calculate({ next: '5', operation: '+' }, '6')).toMatchSnapshot();
  });

  it('updates the "next" value correctly for a "0" button', () => {
    expect(calculate({ next: '5', operation: '+' }, '0')).toMatchSnapshot();
  });

  it('updates the "next" value correctly for a "." button', () => {
    expect(calculate({ next: '5', operation: '+' }, '.')).toMatchSnapshot();
  });

  it('updates the "total" value correctly for an operation button', () => {
    expect(calculate({ total: '5', operation: '+' }, '-')).toMatchSnapshot();
  });

  it('updates the "operation" value correctly when pressing "="', () => {
    expect(calculate({ total: '5', next: '3', operation: '+' }, '=')).toMatchSnapshot();
  });

  it('updates the "next" value correctly for "+/-" button', () => {
    expect(calculate({ next: '5', operation: '+' }, '+/-')).toMatchSnapshot();
  });

  it('returns an empty object for an unknown button', () => {
    expect(calculate({ total: '5', next: '3', operation: '+' }, '#')).toMatchSnapshot();
  });
});
