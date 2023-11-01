import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../_app";
import { addDoc, collection } from "firebase/firestore";

export default async function uploadTweetHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method?.toLocaleLowerCase() === "post") {
    const { message } = JSON.parse(req.body);

    const docRef = await addDoc(collection(db, "posts"), {
      message,
    }).catch((err) => console.error("err: ", err));

    console.log("inserted doc id: ", docRef.id);
    res.status(200).json({ CODE: "UPLOAD-SUCCESS" });
  }
  // res.status(200).json({ CODE: "UPLOAD-SUCCESS" });
}
