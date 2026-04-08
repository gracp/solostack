export type WaitlistTier = "free" | "pro" | "agency";

export interface WaitlistEntry {
  id: string;
  email: string;
  createdAt: Date;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  tier: WaitlistTier;
}

// In-memory store — replace with Prisma/Supabase/your-DB of choice
const waitlistStore: WaitlistEntry[] = [];

export { waitlistStore };
