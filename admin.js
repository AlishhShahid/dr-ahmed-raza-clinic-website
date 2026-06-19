import { createClient } from 'https://cdn.jsdelivr.net/npm/@insforge/sdk@latest/dist/index.mjs';

// Initialize the InsForge client
const insforge = createClient({
  baseUrl: 'https://438cxe7j.us-east.insforge.app',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3OC0xMjM0LTU2NzgtOTBhYi1jZGVmMTIzNDU2NzgiLCJlbWFpbCI6ImFub25AaW5zZm9yZ2UuY29tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA1MTI4Mzl9.DolOdGJ7qIZ9repBdPCA9llbPB-Fz11qmrRWtM0MvgQ'
});

export { insforge };

// Store access token in localStorage for page persistence
const ACCESS_TOKEN_KEY = 'doctor_clinic_access_token';
const USER_KEY = 'doctor_clinic_user';

// Set current session
export function setSession(accessToken, user) {
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  localStorage.setItem(USER_KEY, JSON.stringify(user));
  insforge.auth.setAccessToken(accessToken);
  insforge.auth.setUser(user);
}

// Get current session
export function getSession() {
  const token = localStorage.getItem(ACCESS_TOKEN_KEY);
  const userStr = localStorage.getItem(USER_KEY);
  if (token && userStr) {
    const user = JSON.parse(userStr);
    insforge.auth.setAccessToken(token);
    insforge.auth.setUser(user);
    return { token, user };
  }
  return null;
}

// Clear current session
export function clearSession() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
  insforge.auth.clearSession();
}

// Check session on load and redirect if necessary
// requireAuth = true: redirect to login if not logged in
// requireAuth = false: redirect to dashboard if logged in
export async function checkSession(requireAuth, redirectUrl) {
  const session = getSession();
  if (session) {
    // Session exists locally, verify with backend
    const { data, error } = await insforge.auth.getCurrentUser();
    if (error || !data.user) {
      clearSession();
      if (requireAuth) {
        window.location.href = redirectUrl || 'admin-login.html';
      }
      return null;
    }
    // Update local session
    setSession(session.token, data.user);
    if (!requireAuth) {
      window.location.href = redirectUrl || 'dashboard.html';
    }
    return data.user;
  } else {
    if (requireAuth) {
      window.location.href = redirectUrl || 'admin-login.html';
    }
    return null;
  }
}

// Helper to get OTP for testing (only works if public.get_otp_for_testing is configured in database)
export async function getTestingOtp(email) {
  try {
    const { data, error } = await insforge.database.rpc('get_otp_for_testing', { target_email: email });
    if (error) {
      console.warn("Failed to get testing OTP:", error.message);
      return null;
    }
    return data;
  } catch (e) {
    console.warn("Failed to fetch testing OTP:", e);
    return null;
  }
}
