import { NextApiRequest, NextApiResponse } from "next";
import db from "./firebase";
import { doc, setDoc, collection } from "firebase/firestore";

export default async function uploadTweetHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("req: ", req.body, req.method);

  if (req.method === "POST") {
    try {
      const collectionRef = collection(db, "posts");
      const newDocRef = doc(collectionRef);

      await setDoc(newDocRef, {
        message: JSON.parse(req.body).text,
      });
    } catch (e) {
      console.log("post fail: ", e);
    }
    res.status(200).json({ CODE: "UPLOAD-POST" });
    return;
  }
  res.status(200).json({ CODE: "UPLOAD-SUCCESS" });
}
