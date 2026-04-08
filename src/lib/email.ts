// In-memory storage for waitlist emails
const emails: string[] = [];

export function addEmail(email: string): void {
  emails.push(email);
}

export function isEmailRegistered(email: string): boolean {
  return emails.includes(email);
}
