import { Box, Grid, Stack } from '@mui/material';
import BoxWrapper from '../../../../shared/boxwrapper';
import TitleAndEdit from './titleandedit';
import JobInfoPair from './jobinfopair';
import InterviewQuestions from './interviewquestion';
import StartInterviewButton from './startinterviewbutton';

export default async function Page() {
  return (
    <>
      <BoxWrapper
        title='Review Interview Setup'
        imageSrc='reviewInterviewSetup.svg'
      >
        <Grid container width='100%'>
          <Grid
            item
            bgcolor='secondary.light'
            xs={5}
            borderRadius='.5rem'
            paddingY='1.5rem'
            paddingLeft='2rem'
            paddingRight='1rem'
          >
            <TitleAndEdit title='Job Information' editPath='/job-info' />
            <Box
              overflow='auto'
              maxHeight='15rem'
              paddingRight='1rem'
              className='feedbackScroll'
            >
              <Stack gap={2}>
                <JobInfoPair fieldName='Job Title' jobField='title' />
                <JobInfoPair fieldName='Job Type' jobField='type' />
                <JobInfoPair fieldName='Company' jobField='company' />
                <JobInfoPair fieldName='Job Requirements' jobField='reqs' />
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={7} paddingY='1.5rem' paddingLeft='3rem'>
            <TitleAndEdit
              title='Interview Questions'
              editPath='/question-entry'
            />
            <Box overflow='auto' maxHeight='15rem' paddingRight='2rem'>
              <InterviewQuestions />
            </Box>
          </Grid>
        </Grid>
      </BoxWrapper>
      <Box
        width='100%'
        display='flex'
        justifyContent='center'
        alignItems='center'
        mt='2rem'
      >
        <StartInterviewButton />
      </Box>
    </>
  );
}
