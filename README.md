# Discord Clone

A modern Discord clone built with Next.js, React, and Firebase, featuring real-time messaging, server management, and user authentication. This project demonstrates full-stack development skills with modern web technologies and best practices.

## 🚀 Key Features & Technical Implementation

### Real-time Communication

- **WebSocket Integration**: Real-time messaging using Firebase's Realtime Database

### User Experience

- **Authentication System**:
  - Email/password authentication
  - Google OAuth integration
  - Session management with Redux Persist
- **User Profiles**:
  - Activity tracking

### Technical Features

- **State Management**:
  - Redux Toolkit for global state
  - Custom hooks for reusable logic
- **Performance Optimization**:
  - Code splitting with Next.js
  - Lazy loading of components
  - Image optimization
- **Type Safety**:
  - Full TypeScript implementation
  - Strict type checking
  - Custom type definitions

## 🛠️ Tech Stack

- **Frontend Framework**: Next.js 14 (App Router)
- **UI Library**: React 18 (with Hooks)
- **Styling**: Tailwind CSS with custom configurations
- **State Management**: Redux Toolkit with Redux Persist
- **Authentication & Database**: Firebase (Auth, Realtime DB, Storage)
- **Type Safety**: TypeScript 5.2
- **Testing**: Vitest, React Testing Library
- **Code Quality**: ESLint, Prettier
- **UI Components**: Custom components with Lucide React icons
- **Form Handling**: React Hook Form with validation
- **Routing**: Next.js App Router with dynamic routes

## 📁 Project Structure

```
src/
├── app/           # Next.js app router pages and layouts
├── assets/        # Static assets (images, icons, fonts)
├── components/    # Reusable React components
├── firebase/      # Firebase configuration and services
├── hooks/         # Custom React hooks
├── slices/        # Redux slices for different features
├── store/         # Redux store configuration
├── types/         # TypeScript type definitions
└── utils/         # Utility functions and helpers
```

## 🚀 Getting Started

1. Clone the repository

```bash
git clone https://github.com/yourusername/DiscordClone.git
cd DiscordClone
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file based on `.env.example` and add your Firebase configuration:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

4. Start the development server

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🧪 Testing

Run the test suite:

```bash
npm test
```

## 📦 Build

To create a production build:

```bash
npm run build
```

## 🔧 Configuration

- `next.config.mjs` - Next.js configuration with optimized settings
- `tailwind.config.js` - Tailwind CSS configuration with custom theme
- `tsconfig.json` - TypeScript configuration with strict mode
- `.eslintrc.cjs` - ESLint configuration with React and TypeScript rules

## 📝 License

This project is licensed under the terms of the MIT license. See the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. When contributing, please:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request
