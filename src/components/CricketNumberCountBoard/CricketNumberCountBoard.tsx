import React, { FC } from 'react'
import { Grid, GridItem, Table, TableContainer, Tbody, Td, Tr, Text } from '@chakra-ui/react'
import CricketMark from '@/components/CricketMark'
import {
  convertCountScoreToNumberOfCount,
  convertNumberOfCountToMarkCount,
} from '@/lib/Helper/Converter'

type CricketNumberCountBoardProps = {
  data: string[][]
}

const CricketNumberCountBoard: FC<CricketNumberCountBoardProps> = ({ data }) => {
  const scores = convertCountScoreToNumberOfCount(data, 15, 20)
  return (
    <>
      <TableContainer>
        <Table variant='simple'>
          <Tbody>
            {scores.map((number) => (
              <Tr key={`number-${number.number}`} h='69px'>
                <Td>
                  <Text fontSize='lg'>{number.number === 25 ? 'BULL' : number.number}</Text>
                </Td>
                <Td>
                  <Grid templateColumns='repeat(4, 50px)' gap={1}>
                    {convertNumberOfCountToMarkCount(
                      scores.find((score) => score.number === number.number)?.count ?? 0,
                    ).map((count, i) => (
                      <GridItem key={`count-${count}-${i}`}>
                        <CricketMark count={count} />
                      </GridItem>
                    ))}
                  </Grid>
                </Td>
                <Td>
                  <Text fontSize='lg'>{number.total}</Text>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}

export default CricketNumberCountBoard
