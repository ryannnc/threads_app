import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  // Add "/api/uploadthing" to the publicRoutes array
  publicRoutes: ["/", "/api/webhook/clerk", "/api/uploadthing"],
  ignoredRoutes: ["/api/webhook/clerk"],

});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
