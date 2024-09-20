import { defineEventHandler, readBody } from 'h3';
import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

        console.log(body.name)
    const transporter = nodemailer.createTransport({
        service: 'outlook', // Используйте ваш почтовый сервис
        auth: {
            user: '21980@adata.kz', // Ваша почта
            pass: 'wHyL7p8W35Az'  // Ваш пароль
        }
    });

    const mailOptions = {
        from: `21980@adata.kz`,
        to: '21980@adata.kz',
        subject: `Новая заявка с сайта Smart SU`,
        text: body.email,
        html: `
              <p>Имя: <b>${body.name}</b></p>
              <p>Фамилия: <b>${body.surname}</b></p>
              <p>Почта: <b>${body.email}</b></p>
              <p>Телефон: <b>${body.tel}</b></p>
              <p>Способ связи: <b>${body.choosen}</b></p>
              <p>Комментарий: <b>${body.comment}</b></p>
      `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return { success: true, message: 'Письмо отправлено!' };
    } catch (error: any) {
        return { success: false, message: error.message };
    }
});
