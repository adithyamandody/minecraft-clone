import { Canvas } from '@react-three/fiber';
import { Sky } from '@react-three/drei';
import { Physics } from '@react-three/cannon';

import { Ground } from './component/Ground';
import { Player } from './component/Player';
import { FPV } from './component/FPV';
import { Cubes } from './component/Cubes';

function App() {
  return (
    <>
      {/* <div>Outside Canvas</div> */}
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.5} />
        <FPV />
        <Physics>
          <Player />
          <Cubes />
          <Ground />
        </Physics>
      </Canvas>
      <div className='centered cursor absolute'>+</div>
    </>
  );
}

export default App;
