import React, { FC, useState } from 'react';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  CloseButton,
  Collapse,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useDisclosure,
} from '@chakra-ui/react';
import { useLiveQuery } from 'dexie-react-hooks';
import HistoryImportExport from '../ImportExport';
import Loading from '@/components/Loading';
import CricketMarkUpHistoryTable from '@/containers/CricketMarkUp/HistoryTable';
import DoubleTroubleHistoryTable from '@/containers/DoubleTrouble/HistoryTable';
import EaglesEyeHistoryTable from '@/containers/EaglesEye/HistoryTable';
import { db } from '@/db/db';
import useLocale from '@/hooks/locale';

const HistoryBoard: FC = () => {
  const [loading, setLoading] = useState(true);
  const gameHistory = useLiveQuery(async () => {
    const cricketMarkUpHistory = await (
      await db.cricketMarkUpResult.toCollection().sortBy('playedAt')
    ).reverse();
    const eaglesEyeHistory = await (
      await db.eaglesEyeResult.toCollection().sortBy('playedAt')
    ).reverse();
    const doubleTroubleHistory = await (
      await db.doubleTroubleResult.toCollection().sortBy('playedAt')
    ).reverse();
    setLoading(false);
    return { cricketMarkUpHistory, eaglesEyeHistory, doubleTroubleHistory };
  }) || { cricketMarkUpHistory: [], eaglesEyeHistory: [], doubleTroubleHistory: [] };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useLocale();
  if (loading) return <Loading />;
  return (
    <Box p={{ base: 1, md: 4 }}>
      <Collapse in={isOpen} animateOpacity>
        <Alert status='error' justifyContent='space-between'>
          <Flex>
            <AlertIcon />
            <AlertTitle>{t.import.errortitle}</AlertTitle>
            <AlertDescription>{t.import.errordescription}</AlertDescription>
          </Flex>
          <CloseButton alignSelf='flex-start' position='relative' right={-1} onClick={onClose} />
        </Alert>
      </Collapse>
      <Flex pb={4} justifyContent='space-between' alignItems='center' mt={2}>
        <Heading as='h2' size={{ base: 'lg', md: 'xl' }}>
          History
        </Heading>
        <HistoryImportExport onError={onOpen} />
      </Flex>
      <Tabs>
        <TabList>
          <Tab aria-label='cricket mark up'>Cricket Mark-Up</Tab>
          <Tab aria-label="eagle's eye">{"Eagle's Eye"}</Tab>
          <Tab aria-label='double trouble'>Double Trouble</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <CricketMarkUpHistoryTable history={gameHistory.cricketMarkUpHistory} />
          </TabPanel>
          <TabPanel>
            <EaglesEyeHistoryTable history={gameHistory.eaglesEyeHistory} />
          </TabPanel>
          <TabPanel>
            <DoubleTroubleHistoryTable history={gameHistory.doubleTroubleHistory} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default HistoryBoard;
