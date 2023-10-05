import type { NextApiRequest, NextApiResponse } from "next";
import client from 'twilio';
import 'dotenv/config';

const sid = process.env.TWILIO_SID;
const tok = process.env.TWILIO_TOKEN;

export async function GET(request: NextApiRequest) { }


export async function POST(request: NextApiRequest) {
  /* TODO: Uncomment before push
  client(sid, tok).messages.create({
    from: "+18445861101",
    to: "+19173733628",
    body: "Some message"
  }).then(message => console.log(message.sid)).finally();
  */
  return new Response("Successfully sent", { status: 200 })
}


// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
