# Next.js App Router Structure Examples

This project demonstrates practical use cases for Next.js App Router's special file conventions. Below are examples of how each special file is used in the dashboard section.

## File Structure and Component Hierarchy

Next.js renders components in the following hierarchy:

1. `layout.js` - Persistent UI across routes
2. `template.js` - Similar to layouts but re-renders on navigation
3. `error.js` - Error boundary for catching errors
4. `loading.js` - Loading UI during data fetching
5. `not-found.js` - Custom 404 page
6. `page.js` - The actual route content

## Use Cases

### 1. `layout.tsx` - Shared UI Elements

**Location:** `/dashboard/layout.tsx`

**Use Case:** Provides a consistent sidebar navigation that persists across all dashboard pages.

**Key Features:**
- Wraps all dashboard pages
- Contains navigation links to different dashboard sections
- Persists across route changes (doesn't re-render when navigating)

### 2. `template.tsx` - Per-Navigation Animations

**Location:** `/dashboard/template.tsx`

**Use Case:** Adds a fade-in animation that plays on every navigation within the dashboard.

**Key Features:**
- Creates a new instance on each navigation
- Perfect for transition animations
- Uses client-side React with useEffect to trigger animations

### 3. `error.tsx` - Error Handling

**Location:** `/dashboard/error.tsx`

**Use Case:** Provides a user-friendly error UI when something goes wrong in the dashboard.

**Key Features:**
- Catches and displays errors
- Offers a "Try again" button to reset the error boundary
- Logs errors for debugging
- Isolates errors to the dashboard section only

### 4. `loading.tsx` - Loading States

**Location:** `/dashboard/loading.tsx`

**Use Case:** Shows a skeleton UI while dashboard content is loading.

**Key Features:**
- Automatically displayed during data fetching
- Uses skeleton loading patterns for better UX
- Improves perceived performance

### 5. `not-found.tsx` - Custom 404 Pages

**Location:** `/dashboard/not-found.tsx` and `/dashboard/profile/not-found.tsx`

**Use Case:** Shows a custom 404 page when a dashboard section doesn't exist.

**Key Features:**
- Triggered when the `notFound()` function is called
- Provides context-specific error messaging
- Offers navigation options to valid routes

### 6. `page.tsx` - Route Content

**Location:** Multiple locations like `/dashboard/page.tsx`, `/dashboard/analytics/page.tsx`, etc.

**Use Case:** Defines the main content for each route.

**Key Features:**
- Contains the unique content for each URL
- Can fetch and display data
- Represents the innermost component in the hierarchy

## Advanced Examples

### Nested Error Handling

The profile section demonstrates how to trigger the `not-found.tsx` page programmatically:

1. Visit `/dashboard/profile?id=missing` to see the not-found page in action
2. This shows how to use the `notFound()` function to trigger the not-found UI

### Data Fetching with Loading States

The analytics page demonstrates:
1. Async data fetching with artificial delay
2. Automatic display of the loading UI during fetch
3. Rendering data-dependent UI after fetch completes

### Client vs Server Components

- Server Components: Most pages use server components for data fetching
- Client Components: The settings page uses client components for interactive UI

## How to Test

Navigate through the dashboard sections to see how the different special files work together:

1. `/dashboard` - Main dashboard with overview
2. `/dashboard/analytics` - Shows loading state during data fetch
3. `/dashboard/settings` - Interactive client component
4. `/dashboard/profile` - Normal profile view
5. `/dashboard/profile?id=missing` - Triggers not-found page
