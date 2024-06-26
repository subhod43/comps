import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

const INCREMENT_COUNT = 'increment';
const VALUE_TO_ADD = 'value-to-add';
const DECREMENT_COUNT = 'decrement';
const VALUE_ADDITION = 'value-addition';

const reducer = (state, action) => {
  switch(action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1
      };
    case VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload
      };
    case VALUE_ADDITION:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0
      };
    default:
      return state;
  }
}

function CounterPage({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0
  });
  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT
    });
  }

  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT
    });
  }

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    dispatch({
      type: VALUE_TO_ADD,
      payload: value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: VALUE_ADDITION
    });
  }

  return (
    <Panel className="m-3">
      <h1 className='text-lg'>Count is {state.count}</h1>
      <div className='flex flex-row'>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot</label>
        <input value={state.valueToAdd || ""} onChange={handleChange} type="number" className='p-1 m-3 bg-gray-50 border border-gray-500'/>
        <Button primary>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
