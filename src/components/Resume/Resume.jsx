import React from "react";

import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Image,
  Font,
} from "@react-pdf/renderer";
import styled from "styled-components";
import { Flex } from "@chakra-ui/react";
import MontserratRegular from "./Montserrat-Regular.ttf";
import MontserratBold from "./Montserrat-Bold.ttf";

Font.register({
  family: "Montserrat-Regular",
  src: MontserratRegular,
});
Font.register({
  family: "Montserrat-Bold",
  src: MontserratBold,
  fontWeight: "bold",
});

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    width: 300,
    fontFamily: "Montserrat-Regular",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  leftSection: {
    padding: 10,
    flexGrow: 1,
    width: "100px",
    backgroundColor: "#84c5f0",
  },
  title: {
    fontSize: 32,
    textAlign: "center",
    paddingBottom: 10,
    fontFamily: "Montserrat-Bold",
  },
  email: {
    fontSize: 12,
    textAlign: "center",
    paddingBottom: 10,
  },
  phoneNumber: {
    fontSize: 12,
    textAlign: "center",
    paddingBottom: 10,
  },
  location: {
    fontSize: 12,
    textAlign: "center",
    paddingBottom: 10,
  },
  image: {
    borderRadius: "50%",
  },
  skills: {
    fontSize: 18,
    textAlign: "left",
    paddingBottom: 10,
    fontFamily: "Montserrat-Bold",
  },
  skillItem: {
    fontSize: 12,
    textAlign: "left",
    marginLeft: 5,
    paddingBottom: 10,
  },
  education: {
    fontSize: 18,
    textAlign: "left",
    paddingBottom: 10,
    fontFamily: "Montserrat-Bold",
  },
  educationItem: {
    fontSize: 12,
    textAlign: "left",
    marginLeft: 5,
    paddingBottom: 10,
  },
  rightSection: {
    padding: 10,
    flexGrow: 1,
    width: "200px",
  },
  summaryTtile: {
    fontSize: 18,
    textAlign: "left",
    paddingBottom: 10,
    fontFamily: "Montserrat-Bold",
  },
  summary: {
    fontSize: 12,
    textAlign: "left",
    marginLeft: 5,
    paddingBottom: 10,
  },
  accompTitle: {
    fontSize: 18,
    textAlign: "left",
    paddingBottom: 10,
    fontFamily: "Montserrat-Bold",
  },
  accomp: {
    fontSize: 12,
    textAlign: "left",
    marginLeft: 5,
    paddingBottom: 10,
  },
  workTitle: {
    fontSize: 18,
    textAlign: "left",
    paddingBottom: 10,
    fontFamily: "Montserrat-Bold",
  },
  workCname: {
    fontSize: 15,
    textAlign: "left",
    marginLeft: 5,
    paddingBottom: 10,
    fontFamily: "Montserrat-Bold",
  },
  workLocDate: {
    fontSize: 14,
    textAlign: "left",
    marginLeft: 5,
    paddingBottom: 10,
  },
  workSum: {
    fontSize: 12,
    textAlign: "left",
    marginLeft: 5,
    paddingBottom: 10,
  },
});

const Resume = () => {
  return (
    <Flex direction="column" justify="center" align="center">
      <PDFViewer width="700px" height="1000px">
        <Document title="ResumeGG" author="HS Connect">
          <Page size="Letter" style={styles.page}>
            <View style={styles.leftSection}>
              <Image
                src="https://avatars.githubusercontent.com/u/47117192?v=4"
                style={styles.image}
              />
              <Text style={styles.title}>Geeth</Text>
              <Text style={styles.title}>Gunnampalli</Text>

              <Text style={styles.email}>geeth.gunnampalli@gmail.com</Text>
              <Text style={styles.phoneNumber}>+1 (972) 829 - 5173</Text>
              <Text style={styles.location}>Coppell, TX</Text>

              <Text style={styles.skills}>Skills</Text>
              <Text style={styles.skillItem}>· Swift</Text>
              <Text style={styles.skillItem}>· JavaScript</Text>
              <Text style={styles.skillItem}>· Java</Text>
              <Text style={styles.skillItem}>· Python</Text>

              <Text style={styles.education}>Education</Text>
              <Text style={styles.educationItem}>
                {" "}
                · Coppell High School (2018 - 2022)
              </Text>
              <Text style={styles.educationItem}>
                {" "}
                · University of Texas at Dallas (2022 - Present)
              </Text>
            </View>
            <View style={styles.rightSection}>
              <Text style={styles.summaryTtile}>Professional Summary</Text>
              <Text style={styles.summary}>
                I'm Geeth Gunnampalli, a senior at Coppell High School. I
                started developing websites and applications in 2018. I have
                experience in modern programming languages like Swift,
                JavaScript & Python.
              </Text>
              <Text style={styles.accompTitle}>Accomplishments</Text>
              <Text style={styles.accomp}>· Regionals in TSA competition</Text>
              <Text style={styles.accomp}>· Got into Computer Science UTD</Text>
              <Text style={styles.accomp}>· Made apps with hundreds of downloads</Text>
  
              <Text style={styles.workTitle}>Work History</Text>
              <Text style={styles.workCname}>Apple</Text>
              <Text style={styles.workLocDate}>California - 2021</Text>
              <Text style={styles.workSum}>
                I worked under the CEO and created multiple apps that 
                have the capabilities to solve multiple problems. I was able
                to help the overall workflow of the company and created a postive 
                work environment for my peers.
              </Text>
              <Text style={styles.workCname}>Microsoft</Text>
              <Text style={styles.workLocDate}>Washington - 2021</Text>
              <Text style={styles.workSum}>
                I worked with the lead development team and created a new 
                windows version that was made to compensate for various bugs. 
                I was able to positively influence the overall atmosphere 
                of the company by implementing new strategies.
              </Text>
              <Text style={styles.workCname}>Tesla</Text>
              <Text style={styles.workLocDate}>Texas - 2021</Text>
              <Text style={styles.workSum}>
                I was in a group that researched different ways to improve 
                the production of the Model T car. After implementing this change
                the production cycle has increased by 15% and made jobs for 
                hundreds.
              </Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </Flex>
  );
};

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

export default Resume;
