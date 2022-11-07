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
import EightyThrewGame from '@/lib/EightyThrewGame/EightyThrewGame';

const eightyThrewGameContext = createContext<EightyThrewGame | null>(new EightyThrewGame(20));
const setEightyThrewGameContext = createContext<Dispatch<SetStateAction<EightyThrewGame | null>>>(
  () => undefined,
);

const EightyThrewGameContextProvider: FC<{ children: ReactNode | ReactNode[] }> = ({
  children,
}) => {
  const [game, setGame] = useState<EightyThrewGame | null>(null);
  useEffect(() => {
    const g = new EightyThrewGame(20);
    const memoGame = localStorage.getItem('EightyThrew');
    if (memoGame) g.resumeGame(JSON.parse(memoGame));
    setGame(g);
  }, []);
  useEffect(() => {
    if (!game) return;
    localStorage.setItem('EightyThrew', JSON.stringify(game.getProgressJson()));
  }, [game]);
  return (
    <eightyThrewGameContext.Provider value={game}>
      <setEightyThrewGameContext.Provider value={setGame}>
        {children}
      </setEightyThrewGameContext.Provider>
    </eightyThrewGameContext.Provider>
  );
};

const useEightyThrewGame = () => useContext(eightyThrewGameContext);
const useEightyThrewGameSet = () => useContext(setEightyThrewGameContext);

export { EightyThrewGameContextProvider, useEightyThrewGame, useEightyThrewGameSet };
