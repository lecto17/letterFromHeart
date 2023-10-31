import { NextApiRequest, NextApiResponse } from "next";

export default function uploadTweetHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("RQ: ", req.method);

  if (req.method === "post") {
    res.status(200).json({ CODE: "UPLOAD-POST" });
  }
  res.status(200).json({ CODE: "UPLOAD-SUCCESS" });
}
