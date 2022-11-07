import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import BullyBullyGame from '@/lib/BullyBullyGame/BullyBullyGame';

const bullyBullyGameContext = createContext<BullyBullyGame | null>(new BullyBullyGame(20));
const setBullyBullyGameContext = createContext<Dispatch<SetStateAction<BullyBullyGame | null>>>(
  () => undefined,
);

const BullyBullyGameContextProvider: FC<{ children: ReactNode | ReactNode[] }> = ({ children }) => {
  const [game, setGame] = useState<BullyBullyGame | null>(null);
  useEffect(() => {
    const g = new BullyBullyGame(20);
    const memoGame = localStorage.getItem('BullyBully');
    if (memoGame) g.resumeGame(JSON.parse(memoGame));
    setGame(g);
  }, []);
  useEffect(() => {
    if (!game) return;
    localStorage.setItem('BullyBully', JSON.stringify(game.getProgressJson()));
  }, [game]);
  return (
    <bullyBullyGameContext.Provider value={game}>
      <setBullyBullyGameContext.Provider value={setGame}>
        {children}
      </setBullyBullyGameContext.Provider>
    </bullyBullyGameContext.Provider>
  );
};

const useBullyBullyGame = () => useContext(bullyBullyGameContext);
const useBullyBullyGameSet = () => useContext(setBullyBullyGameContext);

export { BullyBullyGameContextProvider, useBullyBullyGame, useBullyBullyGameSet };
