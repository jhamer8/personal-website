import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { from, subject, firstName, lastName, message } = await request.json();
    //testing redeploy
    if (typeof from !== 'string' || !from.trim()) {
      console.error('Invalid "from" field:', from);
      return Response.json({ error: 'Invalid "from" field' }, { status: 422 });
    }

    console.log('Request received with data:', { from, subject, firstName, lastName, message });

    const { data, error } = await resend.emails.send({
      from: process.env.MY_CONTACT_EMAIL as string,
      to: [process.env.MY_EMAIL as string],
      subject,
      react: EmailTemplate({ firstName, lastName, message, emailAddress: from }),
    });

    if (error) {
      console.error('Error sending email:', error);
      return Response.json({ error }, { status: 500 });
    }

    console.log('Email sent successfully:', data);
    return Response.json(data);
  } catch (error) {
    console.error('Error processing request:', error);
    return Response.json({ error }, { status: 500 });
  }
}
