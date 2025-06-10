"use server"

import { neon } from "@neondatabase/serverless"

export async function saveMessage(formData: FormData) {
  // Connect to the Neon database
  const sql = neon(`${process.env.DATABASE_URL}`)

  const firstName = formData.get("first_name") as string
  const lastName = formData.get("last_name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  if (!firstName || !lastName || !email || !message) return

  // Insert the form data into the Postgres database
  await sql`
    INSERT INTO queries (first_name, last_name, email, message)
    VALUES (${firstName}, ${lastName}, ${email}, ${message})
  `
}
