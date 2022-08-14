import emailjs from '@emailjs/browser';

export const sendEmailNotification = async (
  order_id,
  name,
  email,
  message = 'Also please visit our online store for more trending eyewears.'
) => {
  const templateParams = {
    number: order_id,
    to_name: name,
    to_email: email,
    message,
  };

  const response = await emailjs.send(
    process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
    process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID,
    templateParams,
    process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY
  );

  return response;
};
