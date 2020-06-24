import { expect } from 'chai';
import { getCompletedTodos } from '../Redux/selectors';

describe('The getCompletedTodosSelector', () => {
    it('returns only completed todos', () => {
        const fakeTodos = [{
            text: 'Say Hello',
            isCompleted: true,
        }, {
            text: 'Say Goodbye',
            isCompleted: false,
        }, {
            text: 'Climb Mt Everest',
            isCompleted: false,
        }]
        const expected = [{
            text: 'Say Hello',
            isCompleted: true,
        }];
        const actual = getCompletedTodos.resultFunc(fakeTodos);

        expect(actual).to.deep.equal(expected)
    });
});