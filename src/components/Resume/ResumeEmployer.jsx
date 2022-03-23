import React, { useEffect, useState } from "react";

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
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../components/Signup/Firebase";
import { useParams } from "react-router-dom";

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
    backgroundColor: "#a1caff",
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
    marginBottom: 10,
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

const ResumeEmployer = () => {
  const { id } = useParams();
  const [users, setUsers] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((authObj) => {
      unsub();
      if (authObj) {
        const getUserData = async () => {
          const userCollectionRef = await doc(db, "users", id);
          const userData = await getDoc(userCollectionRef);
          console.log(userData.data());
          setUsers(userData.data());
          setFirstName(userData.data().displayName.split(" ")[0]);
          setLastName(userData.data().displayName.split(" ")[1]);
          setPhotoURL(userData.data().photoURL);
        };
        getUserData();
      } else {
        // not logged in
      }
    });
  }, [id]);
  return (
    <Flex direction="column" justify="center" align="center">
      <PDFViewer style={{ height: "100vh", width: "50%" }}>
        <Document title={`${users.displayName} Resume`} author="HS Connect">
          <Page size="Letter" style={styles.page}>
            <View style={styles.leftSection}>
              <Image src={photoURL} style={styles.image} />
              <Text style={styles.title}>{firstName}</Text>
              <Text style={styles.title}>{lastName}</Text>

              <Text style={styles.email}>{users.email}</Text>
              <Text style={styles.phoneNumber}>{users.phone}</Text>
              <Text style={styles.location}>{users.location}</Text>

              <Text style={styles.skills}>Skills</Text>
              <Text style={styles.skillItem}>{users.skill1}</Text>
              <Text style={styles.skillItem}>{users.skill2}</Text>
              <Text style={styles.skillItem}>{users.skill3}</Text>
              <Text style={styles.skillItem}>{users.skill4}</Text>
              <Text style={styles.skillItem}>{users.skill5}</Text>

              <Text style={styles.education}>Education</Text>
              <Text style={styles.educationItem}>
                {users.education} - {users.HSGradMonth} {users.HSGradYear}
              </Text>
              <Text style={styles.educationItem}>
                {users.undergradCollege} - {users.UStartYear} - {users.UEndYear}{" "}
              </Text>
            </View>
            <View style={styles.rightSection}>
              <Text style={styles.summaryTtile}>Professional Summary</Text>
              <Text style={styles.summary}>{users.about}</Text>
              <Text style={styles.accompTitle}>Accomplishments</Text>
              <Text style={styles.accomp}>{users.ac1}</Text>
              <Text style={styles.accomp}>{users.ac2}</Text>
              <Text style={styles.accomp}>{users.ac3}</Text>

              <Text style={styles.workTitle}>Work History</Text>

              <Text style={styles.workCname}>{users.jobComp1}</Text>
              <Text style={styles.workLocDate}>
                {users.jobStart1} - {users.jobEnd1}
              </Text>
              <Text style={styles.workSum}>{users.jobDescription1}</Text>
              <Text style={styles.workCname}>{users.jobComp2}</Text>
              <Text style={styles.workLocDate}>
                {users.jobStart2} - {users.jobEnd2}
              </Text>
              <Text style={styles.workSum}>{users.jobDescription2}</Text>

              <Text style={styles.workCname}>{users.jobComp3}</Text>
              <Text style={styles.workLocDate}>
                {users.jobStart3} - {users.jobEnd3}
              </Text>
              <Text style={styles.workSum}>{users.jobDescription3}</Text>
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

export default ResumeEmployer;
