# Next.js Image Sharing App

A modern, full-stack image sharing platform built with [Next.js](https://nextjs.org), Prisma, Clerk authentication, and ImageKit for image hosting. Share, comment, like, and favorite images with your friends!

---

## 🚀 Features

- 🔒 **Authentication**: Secure login/signup with Clerk
- 🖼️ **Image Upload**: Drag & drop or select images to upload (ImageKit integration)
- 👥 **Friends System**: Send, accept, and manage friend requests
- ❤️ **Likes & Favorites**: Like, dislike, and favorite images
- 💬 **Comments**: Comment on images and join the conversation
- 🗑️ **Image Deletion**: Remove your own uploads (with cleanup)
- 🌙 **Responsive UI**: Beautiful, mobile-friendly design with Tailwind CSS

---

## 🛠️ Getting Started

1. **Clone the repository**
   ```sh
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Install dependencies**
   ```sh
   npm install
   # or
   yarn
   ```

3. **Configure environment variables**

   Create a `.env` file in the root directory and add your credentials:
   ```
   IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
   IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
   IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   DATABASE_URL=your_database_url
   ```

4. **Run the development server**
   ```sh
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**

   Visit [http://localhost:3000](http://localhost:3000) to see the app in action.

---

## 📁 Project Structure

```
app/
  api/           # API routes (images, friends, auth)
  login/         # Login page
  signup/        # Signup page
  layout.tsx     # Root layout
  page.tsx       # Main feed page
components/
  image-card.tsx # Image display card
  upload-modal.tsx # Image upload modal
  ...            # Other UI components
hooks/           # Custom React hooks
lib/             # Prisma, utility functions, types
prisma/          # Prisma schema and migrations
public/          # Static assets
schemas/         # Validation schemas
```

---

## ✨ Technologies Used

- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [Clerk](https://clerk.dev/) (authentication)
- [ImageKit](https://imagekit.io/) (image hosting)
- [Tailwind CSS](https://tailwindcss.com/)
- [React](https://react.dev/)

---

## 📝 Customization

- **UI Components**: Modify or extend components in [`components/`](components/)
- **API Logic**: Update backend logic in [`app/api/`](app/api/)
- **Database Models**: Edit your Prisma schema in [`prisma/schema.prisma`](prisma/schema.prisma)

---

## 🐳 Deployment

Deploy easily on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for more options.

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Docs](https://www.prisma.io/docs/)
- [Clerk Docs](https://clerk.com/docs)
- [ImageKit Docs](https://docs.imagekit.io/)

---

## 🤝 Contributing

Pull requests and issues are welcome! Please open an issue to discuss your ideas or report bugs.

---

## License

[MIT](LICENSE)