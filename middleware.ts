import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { PUBLIC_DIR_MIDDLEWARE_CONFLICT } from 'next/dist/lib/constants';

const isProtectedRoute = createRouteMatcher([
  '/credits(.*)',
  '/profile(.*)',
  '/transformation(.*)',
  '/',
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ['/((?!.*..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
