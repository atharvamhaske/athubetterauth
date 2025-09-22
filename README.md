# BetterAuth Boilerplate

<p align="center">
  The most comprehensive authentication framework for TypeScript. Best auth solution with OAuth, magic links & more.
</p>

## About

This is a Modern Betterauth boilerplate template with a tech stack of Better-Auth, Prisma ORM, PostgreSQL, Tailwind v4 & ShadCN UI for secure web development. Customize according to your own needs. Truly an open source, open for contributions.

## Tech Stack

- **Frontend**: NextJS - React framework with lots of features and easy to use
- **Styling**: TailwindCSS - Utility-first CSS framework for rapidly building custom UI components
- **UI Components**: ShadCN UI - Modern UI components library built with RadixUI & TailwindCSS
- **Database**: PostgreSQL - Reliable and powerful relational database
- **ORM**: Prisma - TypeScript-based ORM for PostgreSQL, ship faster with Prisma
- **Authentication**: BetterAuth - Comprehensive authentication framework with OAuth, magic links & more

## Getting Started

```bash
# Clone the repository
git clone https://github.com/atharvamhaske/athubetterauth

# Navigate to the project directory
cd athubetterauth

# Install dependencies
pnpm install

# Set up your environment variables
# Create a .env.local file with the following content:
# DATABASE_URL="postgresql://postgres:password@localhost:5432/betterauth?schema=public"
# AUTH_SECRET="your-auth-secret-key-change-this-in-production"
# AUTH_TRUST_HOST=true

# Start the development server
pnpm dev
```

## Features

- Modern, responsive UI design
- Comprehensive authentication system
- Type-safe database operations with Prisma
- Customizable UI components with ShadCN
- Easy to extend and customize

## Environment Variables

This project requires the following environment variables:

```
# Database connection
DATABASE_URL="postgresql://postgres:password@localhost:5432/betterauth?schema=public"

# Auth configuration
AUTH_SECRET="your-auth-secret-key-change-this-in-production"
AUTH_TRUST_HOST=true

# Optional: Email configuration for verification
EMAIL_SERVER_HOST=smtp.example.com
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=user@example.com
EMAIL_SERVER_PASSWORD=password
EMAIL_FROM=noreply@example.com

# Optional: OAuth providers
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

Create a `.env.local` file in the root directory with these variables before starting the application.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

Open source - Created by Atharva Mhaske