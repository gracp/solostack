import { randomUUID } from "crypto";
import { WaitlistEntry, WaitlistTier, waitlistStore } from "./schema";

export function createWaitlistEntry({
  email,
  tier,
  utmSource,
  utmMedium,
  utmCampaign,
}: {
  email: string;
  tier: WaitlistTier;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}): WaitlistEntry {
  const entry: WaitlistEntry = {
    id: randomUUID(),
    email,
    createdAt: new Date(),
    utmSource,
    utmMedium,
    utmCampaign,
    tier,
  };
  waitlistStore.push(entry);
  return entry;
}

export function getWaitlistCount(): number {
  return waitlistStore.length;
}

export function getWaitlistByEmail(email: string): WaitlistEntry | undefined {
  return waitlistStore.find((entry) => entry.email === email);
}
