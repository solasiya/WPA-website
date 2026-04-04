# EmailJS Integration Guide

This website uses **EmailJS** to handle form submissions (Contact and Subscription) directly from the browser without a backend server.

## 1. Setup Instructions

To make the forms functional, you need to configure your EmailJS account:

1.  **Sign Up / Log In**: Go to [emailjs.com](https://www.emailjs.com/) and create an account.
2.  **Add Email Service**: Connect your email provider (e.g., Gmail, Outlook, or a custom SMTP server).
    *   Take note of your **Service ID**.
3.  **Create Email Templates**:
    *   **Contact Template**: Create a template for the contact form. Use placeholders like `{{from_name}}`, `{{user_email}}`, `{{subject}}`, and `{{message}}`.
    *   **Subscription Template**: Create a template for the newsletter subscription. Use the placeholder `{{user_email}}`.
    *   Take note of both **Template IDs**.
4.  **Get Public Key**: Go to **Account** -> **API Keys** and copy your **Public Key**.

## 2. Update Configuration

Open `js/emailjs-handler.js` and replace the placeholder values with your actual credentials:

```javascript
// js/emailjs-handler.js

(function () {
    // 1. Replace with your Public Key
    emailjs.init("YOUR_PUBLIC_KEY");

    // ...

    // 2. Replace with your Service ID and Contact Template ID
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_CONTACT_TEMPLATE_ID';

    // ...

    // 3. Replace with your Subscribe Template ID
    const subscribeTemplateID = 'YOUR_SUBSCRIBE_TEMPLATE_ID';
})();
```

## 3. Form Data Mapping

The following field names are used in the HTML and should match your EmailJS template placeholders:

### Contact Form
| HTML Name | Template Placeholder |
| :--- | :--- |
| `from_name` | `{{from_name}}` |
| `user_email` | `{{user_email}}` |
| `subject` | `{{subject}}` |
| `message` | `{{message}}` |

### Subscription Form
| HTML Name | Template Placeholder |
| :--- | :--- |
| `user_email` | `{{user_email}}` |

## 4. Testing

Once configured, test both forms to ensure emails are being received correctly. If there are errors, check the browser console (F12) for detailed logs from the EmailJS SDK.
