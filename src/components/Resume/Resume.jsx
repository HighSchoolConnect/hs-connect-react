import React from 'react'
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import styled from "styled-components";
import { Bg, BgImage } from '../GeneralPurpose/GPElements';
import hero from "../../images/hero-bg.png";

const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4',
      width: 300,
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    }
  });
 

const Resume = () => {
  return (
   <ResumeContainer>
       <Bg>
           <BgImage src={hero} />
       </Bg>
       <ResumeContent>
<PDFViewer>
<Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
</PDFViewer>
       </ResumeContent>
   </ResumeContainer>
  )
}

export const ResumeContainer = styled.div`
  background-color: hsl(0, 0%, 0%);
  background-color: clear;
  display: flex;
  justify-content: center;
  padding: 60px 30px;
  height: fit-content;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

export const ResumeContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 30px;
`;

export default Resume