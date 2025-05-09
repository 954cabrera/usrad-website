// src/middleware/auth-fixed.js
import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const authCookie = context.cookies.get("usrad_auth");
  const token = process.env.AUTH_TOKEN;
  
  // Log every request
  console.log(`🛡️ Auth Check for path: ${context.url.pathname}`);
  console.log(`🔑 Environment AUTH_TOKEN exists: ${!!token}`);
  console.log(`🔒 Auth Cookie exists: ${!!authCookie}`);
  
  // Allow direct access to auth page
  if (context.url.pathname === "/auth") {
    console.log("✅ Auth path allowed without authentication");
    return next();
  }
  
  // Verify token exists in environment
  if (!token || token.trim() === "") {
    console.error("❌ ERROR: AUTH_TOKEN is missing or empty in environment");
    return new Response("Server Configuration Error: AUTH_TOKEN not set", { status: 500 });
  }
  
  // Check if cookie exists and matches
  if (!authCookie || authCookie.value !== token) {
    console.log("⛔ Authentication failed - redirecting to auth page");
    return context.redirect("/auth");
  }
  
  console.log("✅ Authentication successful");
  return next();
});