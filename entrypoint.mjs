#!/usr/bin/env node
const baseUrl = "https://diogenesgateway.com";
const sessionKey = process.env.INPUT_SESSION_KEY || process.env.DIOGENES_SESSION_KEY || "";
const sqlQuery = process.env.INPUT_SQL_QUERY || "";
const commandText = process.env.INPUT_COMMAND_TEXT || "";

const headers = { "Content-Type": "application/json" };
if (sessionKey) headers["Authorization"] = `Bearer ${sessionKey}`;

let failed = false;

if (commandText) {
  const r = await fetch(`${baseUrl}/api/tools/guardrail_verify`, {
    method: "POST",
    headers,
    body: JSON.stringify({ input: commandText }),
  });
  const d = await r.json();
  console.log("Guardrail Verdict:", JSON.stringify(d, null, 2));
  if (d.safe === false || d.verdict === "BLOCK") failed = true;
}

if (sqlQuery) {
  const r = await fetch(`${baseUrl}/api/tools/audit_sql_injection_ast`, {
    method: "POST",
    headers,
    body: JSON.stringify({ query: sqlQuery }),
  });
  const d = await r.json();
  console.log("SQL AST Audit:", JSON.stringify(d, null, 2));
  if (d.safe === false || d.is_vulnerable === true) failed = true;
}

if (failed) {
  console.error("Diogenes Security Gate blocked this workflow.");
  process.exit(1);
}
console.log("Diogenes Security Gate passed.");
