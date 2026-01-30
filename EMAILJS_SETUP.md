# EmailJS Setup Guide - Detailed Instructions

Your contact form is now configured to send emails directly using EmailJS. Follow these detailed steps to complete the setup:

---

## Step 1: Create an EmailJS Account

1. **Open your web browser** and go to: [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click the **"Sign Up"** button in the top right corner
3. You can sign up using:
   - Google account (recommended - quick and easy)
   - GitHub account
   - Or create a new account with email and password
4. After signing up, you'll be redirected to the EmailJS Dashboard
5. **Free tier includes 200 emails/month** - perfect for a personal website

---

## Step 2: Add Email Service (Connect Your Gmail)

1. In the EmailJS Dashboard, look at the **left sidebar**
2. Click on **"Email Services"**
3. Click the **"Add New Service"** button (blue button on the right)
4. You'll see a list of email providers. **Select "Gmail"**
5. A popup will appear:
   - Click **"Connect Account"**
   - Sign in with your Google account (ziadmohamed345@gmail.com)
   - Click **"Allow"** to grant EmailJS permission to send emails on your behalf
6. After connecting, you'll see a **Service ID** (looks like: `service_xxxxxxx`)
7. **IMPORTANT: Copy this Service ID** and save it somewhere - you'll need it later
8. Click **"Create Service"**

---

## Step 3: Create Email Template

1. In the left sidebar, click on **"Email Templates"**
2. Click **"Create New Template"** button
3. You'll see a template editor with several fields:

### Template Settings:

- **Template Name**: Enter something like "Contact Form" (this is just for your reference)

### Email Content:

In the **"Subject"** field, enter:

```
New Contact from {{from_name}}
```

In the **"Content"** field (the large text area), enter exactly this:

```
You have received a new message from your website contact form.

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}

Message:
{{message}}

---
This message was sent from your portfolio website contact form.
```

### Important Notes:

- The double curly braces `{{variable_name}}` are placeholders that will be replaced with actual data
- Do NOT change these variable names - they must match exactly: `from_name`, `from_email`, `company`, `message`
- The "To Email" should already be set to your connected Gmail address

4. Click **"Save"** in the top right
5. After saving, look at the top of the template - you'll see a **Template ID** (looks like: `template_xxxxxxx`)
6. **IMPORTANT: Copy this Template ID** and save it - you'll need it later

---

## Step 4: Get Your Public Key

1. In the left sidebar, click on **"Account"**
2. In the Account page, look for the **"API Keys"** section
3. You'll see a field labeled **"Public Key"** (looks like a long string: `xxxxxxxxxxxxxxxxxxx`)
4. **IMPORTANT: Copy this Public Key** and save it - you'll need it later

---

## Step 5: Update Your Code

Now you have three important pieces of information:

- Service ID (from Step 2)
- Template ID (from Step 3)
- Public Key (from Step 4)

### Option A: Direct Replacement (Quick & Easy)

1. Open your code editor (VS Code)
2. Navigate to: `src/components/Contact.tsx`
3. Find these lines (around line 43-51):

```typescript
await emailjs.send(
  "YOUR_SERVICE_ID", // Replace this
  "YOUR_TEMPLATE_ID", // Replace this
  {
    from_name: formData.name,
    from_email: formData.email,
    company: formData.company || "N/A",
    message: formData.message,
    to_email: "ziadmohamed345@gmail.com",
  },
  "YOUR_PUBLIC_KEY", // Replace this
);
```

4. **Replace the placeholders:**
   - Replace `"YOUR_SERVICE_ID"` with your actual Service ID (keep the quotes)
     - Example: `"service_abc123"`
   - Replace `"YOUR_TEMPLATE_ID"` with your actual Template ID (keep the quotes)
     - Example: `"template_xyz789"`
   - Replace `"YOUR_PUBLIC_KEY"` with your actual Public Key (keep the quotes)
     - Example: `"abcdefghij123456789"`

5. **Save the file** (Ctrl+S or Cmd+S)

### Option B: Use Environment Variables (More Secure - Recommended for Production)

This method keeps your keys private and out of version control.

1. **Create a `.env` file** in your project root folder (same level as `package.json`):
   - Right-click in the file explorer → New File
   - Name it exactly: `.env` (with the dot at the beginning)

2. **Add your credentials** to the `.env` file:

```
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abcdefghij123456789
```

- Replace the values with your actual IDs (NO quotes needed in .env files)

3. **Update `Contact.tsx`** to use environment variables. Replace the code from Step 5A with:

```typescript
await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  {
    from_name: formData.name,
    from_email: formData.email,
    company: formData.company || "N/A",
    message: formData.message,
    to_email: "ziadmohamed345@gmail.com",
  },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
);
```

4. **Update `.gitignore`** to protect your keys:
   - Open `.gitignore` file in your project root
   - Add this line if it's not already there:

   ```
   .env
   .env.local
   ```

   - This prevents your keys from being committed to GitHub

5. **Restart your development server:**
   - Stop the running server (Ctrl+C in terminal)
   - Start it again: `npm run dev`

---

## Step 6: Test Your Contact Form

1. **Start your development server** if it's not running:

   ```bash
   npm run dev
   ```

2. **Open your website** in the browser (usually `http://localhost:5173`)

3. **Navigate to the Contact section**

4. **Fill out the form** with test data:
   - Name: Test User
   - Email: test@example.com
   - Company: Test Company
   - Message: This is a test message

5. **Click Submit**

6. **Check for success:**
   - You should see a success toast notification
   - Check your Gmail inbox (ziadmohamed345@gmail.com)
   - You should receive an email with the test message within a few seconds

---

## Troubleshooting

### If you don't receive the email:

1. **Check Gmail Spam folder** - EmailJS emails sometimes go to spam initially
2. **Verify your credentials** in the code match exactly what's in EmailJS dashboard
3. **Check browser console** for errors (F12 → Console tab)
4. **Verify EmailJS template** has the correct variable names
5. **Check EmailJS dashboard** → Email Services → make sure your Gmail is still connected
6. **Try EmailJS Test** - In the Email Templates section, use the "Test it" button to send a test email

### Common Errors:

- **"Failed to send message"** - Check your Service ID, Template ID, and Public Key
- **Variables not showing** - Make sure template variables match exactly: `from_name`, `from_email`, `company`, `message`
- **Env variables undefined** - Restart your dev server after creating `.env` file

---

## Important Notes

- **Free Tier Limits**: 200 emails per month (resets monthly)
- **Email Delivery**: Usually instant, but can take up to 1-2 minutes
- **Security**: Never commit your `.env` file to GitHub
- **Production**: For Vercel/Netlify deployment, add environment variables in their dashboard

---

## You're Done! 🎉

Your contact form will now send emails directly to ziadmohamed345@gmail.com when users submit the form. No need to open an email client - it all happens in the background!
