import { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";
//
sgMail.setApiKey(process.env.SENDGRID_APIKEY as string);
interface IReqestBody {
  name: string;
  email: string;
  message: string;
  subject?: string;
}
//
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { name, message, email }: IReqestBody = JSON.parse(req.body);
    const sgMailMessage = {
      from: "ahmedshehataq98@gmail.com",
      to: "ahmedshehata98@outlook.sa",
      subject: `${name} sent you a message from your portfolio`,
      text: `email address => ${email}`,
      html: `
        <div>
          <div>
            <b>name :</b>
            <p>${name}</p>
          </div>
          <hr/>
          <div>
            <b>Email :</b>
            <br/>
            <p>${email}</p>
          </div>
          <hr/>
          <div>
            <b>Message :</b>
            <br/>
            <small>${message}</small>
          </div>
          <hr/>
        </div>
      `,
    };

    return await sgMail
      .send(sgMailMessage)
      .then((data) => {
        res.status(200).json({
          pending: false,
          isSent: true,
          message: "your message is sent successfully",
          description: data,
        });
      })
      .catch((err) => {
        res.status(err?.code).json({
          pending: false,
          isSent: false,
          message: `error , ${err.message}`,
        });
      });
  } else if (req.method === "GET") {
    return res.status(200).json({
      pending: false,
      message: "is working now",
    });
  }
};
export default handler;
