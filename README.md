# Recruiting Pipeline Prototype

This is a [Next.js](https://nextjs.org) prototype built to demonstrate a recruiting pipeline, showing key metrics, time-to-hire trends, source effectiveness, and allowing for basic filtering/segmentation. All data is static (fixture data) to illustrate how the final product might look and behave.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the prototype.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Libraries Used and Why

- **Next.js**: Provides a simple, powerful React-based framework for building web applications with file-based routing and server-side rendering.
- **Recharts**: A charting library for React that is easy to set up and customize. We use Recharts components (`LineChart`, `BarChart`, etc.) to visualize time-to-hire trends and source effectiveness.
- **React**: The core library for building UI components.
- **CSS Modules** (built into Next.js): For modular and maintainable styling of certain components (e.g., pipeline chart).

## How to Extend

- **Add a real backend**: Replace fixture data with APIs that query a database or other data sources.
- **Enhance the filtering**: Pass filter parameters to an API route and return dynamic data.
- **Add more charts or metrics**: Use Recharts or other libraries (e.g., Chart.js, Victory) to display additional KPIs and advanced visualizations.

## Using AI in the Development Process

This project utilized ChatGPT to help outline the structure and provide starter code snippets. By prompting ChatGPT with the requirements (pipeline visualization, metrics, filtering), we received scaffolded suggestions on how to structure the Next.js pages and components. The code was then reviewed, customized, and refined based on Next.js best practices and charting library requirements.

## Future Considerations

- **Authentication and Security**: For a real production application, add authentication/authorization.
- **Styling**: Switch from basic CSS to a design system like Tailwind, MUI, or Chakra UI for a more polished UI.
- **Analytics**: Add logic to track user interactions, load times, or other analytics.
- **Deployment**: Deploy this prototype using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

Check out [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details on deployment options.
