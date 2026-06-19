-- Create a testing helper function that allows fetching the latest OTP code for a given email address.
-- This function uses SECURITY DEFINER to bypass RLS and read from the auth schema.
CREATE OR REPLACE FUNCTION public.get_otp_for_testing(target_email TEXT)
RETURNS TEXT SECURITY DEFINER AS $$
DECLARE
  latest_otp TEXT;
BEGIN
  SELECT otp INTO latest_otp
  FROM auth.email_otps
  WHERE email = target_email
  ORDER BY created_at DESC
  LIMIT 1;
  
  RETURN latest_otp;
END;
$$ LANGUAGE plpgsql;
