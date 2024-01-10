import {
  doc,
  getDoc,
  collection,
  getDocs,
  QuerySnapshot,
  DocumentData,
} from "firebase/firestore";
import db from "src/pages/api/firebase";

export async function getFeeds() {
  const collectionRef = collection(db, "posts");

  try {
    const querySnapshot = await getDocs(collectionRef);
    const data: DocumentData[] = [];
    // querySnapshot에서 문서들을 가져와 사용할 수 있음
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });

    return data;
  } catch (error) {
    console.error("Error getting documents:", error);
  }

  // const docRef = doc(db, "posts");
  // const docSnap = await getDoc(docRef);

  // if (docSnap.exists()) {
  //   const data = docSnap.data();
  //   console.log("Document data:", data);
  //   return data;
  // } else {
  //   // docSnap.data() will be undefined in this case
  //   console.log("No such document!");
  // }
}
