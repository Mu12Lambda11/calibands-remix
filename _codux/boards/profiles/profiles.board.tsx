import { createBoard } from '@wixc3/react-board';
import { Profiles } from '../../../src/components/profiles/profiles';

export default createBoard({
    name: 'Profiles',
    Board: () => <Profiles />,
});
