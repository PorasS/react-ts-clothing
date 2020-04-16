import { directoryState } from '../../components/directory/directoryState';
import { dir, IAction } from '../../interfaces/interface';



const INITIAL_STATE = directoryState;

const directoryReducer = (state = INITIAL_STATE, action: IAction): dir => {

    switch (action.type) {

        default: {
            return state;
        }

    }
}

export default directoryReducer;